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
    <div
      className="w-screen max-w-screen relative left-50% right-50% -mx-50vw my-3"
      style={{ height }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
