import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold my-4">About me.</h1>

      <section className="mt-4">
        <p>My name is Kyle.</p>
        <p>I come from Shanghai, China.</p>
      </section>

      <section className="mt-4">
        <p>
          You can find me on Twitter as{" "}
          <Link href="https://twitter.com/skywardpixel">@skywardpixel</Link>.
        </p>
        <p>
          I sometimes stream Hearthstone or Genshin Impact on{" "}
          <Link href="https://www.twitch.tv/sukiyakidonburi">Twitch</Link>.
        </p>
      </section>
    </main>
  );
}
