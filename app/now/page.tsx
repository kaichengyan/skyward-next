import Link from "next/link";

export default function NowPage() {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold my-4">What I am up to now.</h1>

      <section className="mt-4">
        <p>I live in Bothell, WA.</p>
        <p>
          I work at{" "}
          <Link href="https://www.google.com/about/careers/applications/locations/seattle-kirkland-bellevue-redmond/">
            Google Seattle
          </Link>{" "}
          in South Lake Union, and commute to the office twice a week.
        </p>
      </section>

      <section className="mt-4">
        <p>
          Learning to play tennis, and also trying to improve my freestyle
          swimming.
        </p>
        <p>Playing Genshin Impact, Honkai: Star Rail.</p>
        <p>
          Also casually playing Overwatch 2, World of Warcraft Classic, and
          Hearthstone.
        </p>
        <p>
          I main{" "}
          <Link href="https://overwatch.blizzard.com/en-us/heroes/kiriko/">
            Kiriko
          </Link>{" "}
          and{" "}
          <Link href="https://overwatch.blizzard.com/en-us/heroes/ana/">
            Ana
          </Link>{" "}
          in Overwatch. I play mostly resto druid in WoW.
        </p>
      </section>

      <section className="mt-4">
        <p>Losing weight. Trying to get my life back together.</p>
      </section>
    </main>
  );
}
