import type { MDXComponents } from "mdx/types";
import Image from "next/image";
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

function MyImage(props: {
  src?: string;
  alt?: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
}) {
  // Assume that images have src, and rehypeImgSize have added width and height.
  return (
    <Image
      src={props.src!}
      alt={props.alt || ""}
      width={props.width! as number}
      height={props.height! as number}
      sizes="100vw"
      style={{ width: "100vw", height: "auto" }}
    />
  );
}

export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  p: ({ children }) => <p className="my-2">{children}</p>,
  img: MyImage,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading4,
  h6: Heading4,
};
