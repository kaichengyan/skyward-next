import Link from "next/link";

export default function TagPill({ tagName }: { tagName: string }) {
  return (
    <Link
      href={`/tag/${tagName}`}
      className="inline-block border-0 no-underline align-middle rounded
            text-gray-600 bg-gray-200 hover:bg-gray-300
            dark:text-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800
            text-xs px-1 py-0.5 whitespace-nowrap"
      passHref
    >
      {tagName}
    </Link>
  );
}
