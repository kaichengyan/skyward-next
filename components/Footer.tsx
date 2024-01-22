import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-1 pt-8 pb-4 text-xs text-center text-gray-400 dark:text-gray-600">
      <div className="flex space-x-6 pb-3">
        <Link
          href="https://github.com/skywardpixel"
          className="inline-block border-0 pb-0"
        >
          <div
            className="i-ri-github-line text-2xl text-gray-400 hover:text-gray-900
                           dark:text-gray-600 dark:hover:text-gray-200
                           transition duration-300"
          ></div>
        </Link>
        <Link
          href="https://twitter.com/skywardpixel"
          className="inline-block border-0 pb-0"
        >
          <div
            className="i-ri-twitter-line text-2xl text-gray-400 hover:text-gray-900
                         dark:text-gray-600 dark:hover:text-gray-200
                         transition duration-300"
          ></div>
        </Link>
        <Link
          href="https://mastodon.social/@skywardpixel"
          className="inline-block border-0 pb-0"
        >
          <div
            className="i-ri-mastodon-line text-2xl text-gray-400 hover:text-gray-900
                         dark:text-gray-600 dark:hover:text-gray-200
                         transition duration-300"
          ></div>
        </Link>
        <Link
          href="https://twitch.tv/sukiyakidon"
          className="inline-block border-0 pb-0"
        >
          <div
            className="i-ri-twitch-line text-2xl text-gray-400 hover:text-gray-900
                           dark:text-gray-600 dark:hover:text-gray-200
                           transition duration-300"
          ></div>
        </Link>
        <Link
          href="/feed"
          target="_blank"
          className="inline-block border-0 pb-0"
        >
          <div
            className="i-ri-rss-line text-2xl text-gray-400 hover:text-gray-900
                           dark:text-gray-600 dark:hover:text-gray-200
                           transition duration-300"
          ></div>
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
