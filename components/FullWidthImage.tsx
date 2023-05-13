import Image from "next/image";

export default function FullWidthImage({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: string;
}) {
  return (
    <div className="full-width my-3" style={{ height }}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
