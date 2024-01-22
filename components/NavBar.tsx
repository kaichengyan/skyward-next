import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar() {
  return (
    <header className="font-overpass flex p-6 z-50 items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Link href="/" className="text-xl font-light border-0">
          Skyward
        </Link>
      </div>
      <nav className="flex items-center space-x-4 sm:space-x-8 text-gray-600 dark:text-gray-400">
        <Link
          href="/"
          className="border-0 pb-0 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="border-0 pb-0 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/now"
          className="border-0 pb-0 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
        >
          Now
        </Link>
        <div className="w-11">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
