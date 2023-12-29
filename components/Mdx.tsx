import FullWidthImage from "@/components/FullWidthImage";
import SimpleImage from "@/components/SimpleImage";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  SimpleImage,
  FullWidthImage,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
