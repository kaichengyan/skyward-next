import Link from "next/link";
import { Headphones, Home, Smile } from "react-feather";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar() {
  return (
    <header className="flex p-6 z-50 items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Link href="/" className="text-xl font-light border-0">
          Skyward
        </Link>
        <ThemeSwitch />
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/" className="inline-block border-0 pb-0">
          <div className="flex space-x-2">
            <Home
              strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                             transition duration-300"
            />
            <span
              className="text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 hidden sm:inline-flex"
            >
              Home
            </span>
          </div>
        </Link>
        <Link href="/about" className="inline-block border-0 pb-0">
          <div className="flex space-x-2">
            <Smile
              strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                             transition duration-300"
            />
            <span
              className="text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 hidden sm:inline-flex"
            >
              About
            </span>
          </div>
        </Link>
        <Link href="/now" className="inline-block border-0 pb-0">
          <div className="flex space-x-2">
            <Headphones
              strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                             transition duration-300"
            />
            <span
              className="text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 hidden sm:inline-flex"
            >
              Now
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
