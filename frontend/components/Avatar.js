import React from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function Avatar({ className }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeHandler = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const renderBtn = () => {
    if (currentTheme === "dark") {
      return <SunIcon className="h-5" />;
    } else {
      return <MoonIcon className="h-5" />;
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-10 w-10 rounded-lg border-gray-600 bg-gray-300 dark:bg-secondary-dark cursor-pointer translate duration-150 hover:scale-110 shadow-lg border-2 ${className}`}
      onClick={themeHandler}
    >
      {renderBtn()}
    </div>
  );
}

export default Avatar;
