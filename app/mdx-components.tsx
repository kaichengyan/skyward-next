import FullWidthImage from "@/components/FullWidthImage";
import SimpleImage from "@/components/SimpleImage";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import React from "react";

function Heading1({ children }: { children?: React.ReactNode }) {
  return (
    <h1
      className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
              before:font-light before:text-rose-600 before:dark:text-cyan-400
              font-bold mt-4 mb-2 text-2xl leading-7"
    >
      {children}
    </h1>
  );
}

function Heading2({ children }: { children?: React.ReactNode }) {
  return (
    <h2
      className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-xl leading-7"
    >
      {children}
    </h2>
  );
}

function Heading3({ children }: { children?: React.ReactNode }) {
  return (
    <h3
      className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-lg leading-7"
    >
      {children}
    </h3>
  );
}

function Heading4({ children }: { children?: React.ReactNode }) {
  return (
    <h4
      className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-md leading-7"
    >
      {children}
    </h4>
  );
}

export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  p: ({ children }) => <p className="my-2">{children}</p>,
  FullWidthImage: FullWidthImage,
  img: SimpleImage,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading4,
  h6: Heading4,
  ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
};
