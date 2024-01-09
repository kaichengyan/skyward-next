import FullWidthImage from "@/components/FullWidthImage";
import SimpleImage from "@/components/SimpleImage";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Tweet } from "react-tweet";

const components = {
  SimpleImage,
  FullWidthImage,
  Tweet: (props: any) => (
    <div className="flex justify-center">
      <Tweet {...props} />
    </div>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
