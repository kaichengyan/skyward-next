import Link from "next/link";

export default function TagPill({ tagName }: { tagName: string }) {
  return (
    <Link
      href={`/tag/${tagName}`}
      className="inline-block border-0 no-underline align-middle rounded text-xs px-1 py-0.5 whitespace-nowrap
                bg-gray-100 hover:bg-gray-300 text-gray-600
                dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-gray-400"
      passHref
    >
      {tagName}
    </Link>
  );
}
