import Image from "next/image";

export default function SimpleImage(props: {
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
      width={props.width as number}
      height={props.height as number}
      className="mx-auto"
    />
  );
}
