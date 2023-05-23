import React from "react";
import ToggleTheme from "./ToggleTheme";
import { Avatar } from "@mantine/core";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar src={theme === "light" ? "1.png" : "2.png"} alt="icon" />
          <h2 className="font-semibold text-gray-800 dark:text-white text-xl">
            mimototo
          </h2>
        </div>
        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ToggleTheme />
        </span>
      </div>
    </header>
  );
};

export default Header;
