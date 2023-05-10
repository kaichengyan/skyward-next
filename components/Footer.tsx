export default function Footer() {
  return <footer className="text-xs text-center p-6 text-gray-400 dark:text-gray-600">
    <div>Kyle Yan &copy; 2015 - {new Date().getFullYear()}</div>
    <div className="space-x-1">
      <span>越而胜己</span>
      <span>·</span>
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:border-b-gray-500"
      >CC BY-NC-SA 4.0
      </a>{' '}
    </div>
  </footer>
}
