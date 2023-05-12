import Link from 'next/link';
import { FileText, GitHub, Rss, User } from 'react-feather';
import ThemeSwitch from './ThemeSwitch';

const NavBar = () => {
  return (
    <header className="flex p-6 z-50 items-center justify-between">
      <Link href="/" className="text-xl font-light border-0">
        Skyward
      </Link>
      <div className="flex space-x-4 items-center">
        <nav className="flex space-x-4 items-center sm:space-x-6">
          <Link href="/about" className="inline-block border-0 pb-0">
            <User strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                             transition duration-300" />
          </Link>
          <Link href="https://github.com/kaichengyan" className="inline-block border-0 pb-0">
            <GitHub strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </Link>
          <Link href="https://resume.skyward.moe" className="inline-block border-0 pb-0">
            <FileText strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </Link>
          <Link href="/feed" target="_blank" className="inline-block border-0 pb-0">
            <Rss strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </Link>

          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
