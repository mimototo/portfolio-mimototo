import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { Avatar, Container, Text } from "@mantine/core";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4">
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          {mounted && (
            <Avatar
              src={theme === "light" ? "icon-light.png" : "icon-dark.png"}
              size="xl"
              alt="icon"
            />
          )}
          <Text fz="xl" fw={300}>
            mimototo
          </Text>
        </div>
        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ToggleTheme />
        </span>
      </Container>
    </header>
  );
};

export default Header;
