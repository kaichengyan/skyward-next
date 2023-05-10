'use client';

import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FileText, GitHub, Moon, Sun, User } from 'react-feather';

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // do not render theme toggle if not on home page or if not mounted
  if (!mounted) return null;

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
          <a href="https://github.com/kaichengyan" className="inline-block border-0 pb-0">
            <GitHub strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </a>
          <a href="https://resume.skyward.moe" className="inline-block border-0 pb-0">
            <FileText strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </a>
          {/* <Link href="/feed" target="_blank" className="inline-block border-0 pb-0">
            <Rss strokeWidth="1"
              className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
          </Link> */}

          <button className="inline-block sm:hidden border-0 pb-0"
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
            {resolvedTheme === 'light' ? (
              <Moon strokeWidth="1"
                className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
            ) : (
              <Sun strokeWidth="1"
                className="stroke-gray-600 hover:stroke-gray-900
                           dark:stroke-gray-400 dark:hover:stroke-gray-200
                           transition duration-300" />
            )}
          </button>

          <Switch
            checked={resolvedTheme === 'dark'}
            onChange={(on: boolean) => setTheme(on ? 'dark' : 'light')}
            className={`${resolvedTheme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
              } relative items-center h-6 rounded-full w-11 hidden sm:inline-flex`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 p-0.5 transform transition ease-in-out duration-200 bg-white rounded-full`}
            >
              {resolvedTheme === 'dark' ?
                <Moon strokeWidth="1" className="stroke-gray-400" size="100%" /> :
                <Sun strokeWidth="1" className="stroke-gray-400" size="100%" />}
            </span>
          </Switch>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
