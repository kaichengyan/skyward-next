import FullWidthImage from "@/components/FullWidthImage";
import SimpleImage from "@/components/SimpleImage";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Tweet } from "react-tweet";
import NeoDb from "./NeoDb";

const components = {
  SimpleImage,
  FullWidthImage,
  Tweet: (props: any) => (
    <div className="flex justify-center custom-component">
      <Tweet {...props} />
    </div>
  ),
  NeoDb: (props: any) => (
    <div className="flex justify-center sm:mx-8 custom-component">
      <NeoDb {...props} />
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
