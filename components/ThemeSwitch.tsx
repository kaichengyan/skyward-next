"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        className="inline-block sm:hidden border-0 pb-0"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? (
          <Moon
            strokeWidth="1"
            className="stroke-gray-600 hover:stroke-gray-900
                    dark:stroke-gray-400 dark:hover:stroke-gray-200
                    transition duration-300"
          />
        ) : (
          <Sun
            strokeWidth="1"
            className="stroke-gray-600 hover:stroke-gray-900
                    dark:stroke-gray-400 dark:hover:stroke-gray-200
                    transition duration-300"
          />
        )}
      </button>

      <Switch
        checked={resolvedTheme === "dark"}
        onChange={(on: boolean) => setTheme(on ? "dark" : "light")}
        className={`${
          resolvedTheme === "dark" ? "bg-blue-600" : "bg-gray-200"
        } relative items-center h-6 rounded-full w-11 hidden sm:inline-flex`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            resolvedTheme === "dark" ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 p-0.5 transform transition ease-in-out duration-200 bg-white rounded-full`}
        >
          {resolvedTheme === "dark" ? (
            <Moon strokeWidth="1" className="stroke-gray-400" size="100%" />
          ) : (
            <Sun strokeWidth="1" className="stroke-gray-400" size="100%" />
          )}
        </span>
      </Switch>
    </>
  );
}
