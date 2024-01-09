import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { overpass } from "@/app/fonts";

export default function NavBar() {
  return (
    <header className="flex p-6 z-50 items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Link
          href="/"
          className={`${overpass.className} text-xl font-light border-0`}
        >
          Skyward
        </Link>
        <div className="hidden sm:inline-flex">
          <ThemeSwitch />
        </div>
      </div>
      <nav className="flex items-center space-x-4 sm:space-x-8">
        <Link href="/" className="inline-block border-0 pb-0">
          <span
            className={`${overpass.className} text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 inline-flex`}
          >
            Home
          </span>
        </Link>
        <Link href="/about" className="inline-block border-0 pb-0">
          <span
            className={`${overpass.className} text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 inline-flex`}
          >
            About
          </span>
        </Link>
        <Link href="/now" className="inline-block border-0 pb-0">
          <span
            className={`${overpass.className} text-gray-600 hover:text-gray-900
                           dark:text-gray-400 dark:hover:text-gray-200
                             transition duration-300 inline-flex`}
          >
            Now
          </span>
        </Link>
      </nav>
    </header>
  );
}
