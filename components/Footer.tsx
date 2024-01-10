import Link from "next/link";
import { GitHub, Rss, Twitch, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-1 pt-8 pb-4 text-xs text-center text-gray-400 dark:text-gray-600">
      <div className="flex space-x-6 pb-3">
        <Link
          href="https://github.com/skywardpixel"
          className="inline-block border-0 pb-0"
        >
          <GitHub
            strokeWidth="1"
            className="stroke-gray-400 hover:stroke-gray-900
                           dark:stroke-gray-600 dark:hover:stroke-gray-200
                           transition duration-300"
          />
        </Link>
        <Link
          href="https://twitter.com/skywardpixel"
          className="inline-block border-0 pb-0"
        >
          <Twitter
            strokeWidth="1"
            className="stroke-gray-400 hover:stroke-gray-900
                           dark:stroke-gray-600 dark:hover:stroke-gray-200
                           transition duration-300"
          />
        </Link>
        <Link
          href="https://twitch.tv/sukiyakidon"
          className="inline-block border-0 pb-0"
        >
          <Twitch
            strokeWidth="1"
            className="stroke-gray-400 hover:stroke-gray-900
                           dark:stroke-gray-600 dark:hover:stroke-gray-200
                           transition duration-300"
          />
        </Link>
        <Link
          href="/feed"
          target="_blank"
          className="inline-block border-0 pb-0"
        >
          <Rss
            strokeWidth="1"
            className="stroke-gray-400 hover:stroke-gray-900
                           dark:stroke-gray-600 dark:hover:stroke-gray-200
                           transition duration-300"
          />
        </Link>
      </div>
      <div>Skyward &copy; 2015 - {new Date().getFullYear()}</div>
      <div className="flex space-x-1">
        <span>Beyond awesome.</span>
        <span>·</span>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-gray-500"
        >
          CC BY-NC-SA 4.0
        </a>{" "}
      </div>
    </footer>
  );
}
