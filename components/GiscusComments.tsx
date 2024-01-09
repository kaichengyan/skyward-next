"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments({ lang }: { lang: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="kaichengyan/skyward-next"
      repoId="R_kgDOJhOK8g"
      category="Blog Comments"
      categoryId="DIC_kwDOJhOK8s4CcHCg"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme}
      lang={lang}
      loading="lazy"
    />
  );
}
