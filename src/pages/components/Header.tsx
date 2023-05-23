import React from "react";
import ToggleTheme from "./ToggleTheme";
import { Avatar, Text } from "@mantine/core";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar
            src={theme === "light" ? "1.png" : "2.png"}
            size="lg"
            alt="icon"
          />
          <Text fz="xl" fw={500}>
            mimototo
          </Text>
        </div>
        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ToggleTheme />
        </span>
      </div>
    </header>
  );
};

export default Header;
