import { components } from "@/neodb";
import Image from "next/image";
import Link from "next/link";

const NEO_DB_API_URL = "https://neodb.social/api";
const NEO_DB_EXTERNAL_FETCH_URL = "https://neodb.social/api/catalog/fetch?url=";

const NEO_DB_URL_REGEX = /neodb\.social\/(\w+)\/(\w+)/;

type Movie = components["schemas"]["MovieSchema"];
type Game = components["schemas"]["GameSchema"];
type Book = components["schemas"]["EditionSchema"];
type Podcast = components["schemas"]["PodcastSchema"];
type TvShow = components["schemas"]["TVShowSchema"];

type NeoDbItem = Movie | Game | Book | Podcast | TvShow;

interface Props {
  title: string;
  rating: number | null;
  brief: string;
  cover_image_url: string | null;
  authors: string;
  category: string;
  url: string;
}

async function fetchItemProps(url: string): Promise<Props | undefined> {
  const match = url.match(NEO_DB_URL_REGEX);
  let requestUrl;
  if (match) {
    const [, type, id] = match;
    requestUrl = `${NEO_DB_API_URL}/${type}/${id}`;
  } else {
    requestUrl = `${NEO_DB_EXTERNAL_FETCH_URL}${url}`;
  }

  const item = (await fetch(requestUrl).then((res) => res.json())) as NeoDbItem;
  if (item.category === "book") {
    const bookItem = item as Book;
    return { ...item, authors: bookItem.author.join(", ") };
  } else if (item.category === "movie") {
    const movieItem = item as Movie;
    return { ...item, authors: movieItem.director.join(", ") };
  } else if (item.category === "game") {
    const gameItem = item as Game;
    return { ...item, authors: gameItem.publisher.join(", ") };
  } else if (item.category === "podcast") {
    const podcastItem = item as Podcast;
    return { ...item, authors: podcastItem.hosts.join(", ") };
  } else if (item.category === "tv") {
    const tvShowItem = item as TvShow;
    return { ...item, authors: tvShowItem.actor.slice(2).join(", ") };
  } else {
    return undefined;
  }
}

function Rating({ rating }: { rating: number | null }) {
  return (
    <div className="flex items-center text-sm">
      {rating === null ? (
        "No rating"
      ) : (
        <>
          <div className="i-ic-round-star-rate text-lg text-yellow"></div>
          <span>{rating}</span>
        </>
      )}
    </div>
  );
}

export default async function NeoDb({ url }: { url: string }) {
  const item = await fetchItemProps(url);

  return item ? (
    <div
      className="flex space-x-4 rounded-xl border-1 my-2 p-4 relative
          bg-slate-50 border-slate-100 dark:bg-slate-900 dark:border-slate-500"
    >
      <Image
        src={item.cover_image_url!}
        alt={item.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: "200px", width: "auto" }}
        className="m-0 rounded-lg"
      />

      <div className="flex flex-col space-y-1 overflow-hidden">
        <div className="flex space-x-2">
          <Link href={`https://neodb.social/${item.url}`} className="border-0">
            <h3 className="before:content-[''] my-0 hover:text-slate-600 dark:hover:text-slate-300 transition truncate">
              {item.title}
            </h3>
          </Link>
          <Rating rating={item.rating} />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 max-h-9rem overflow-auto whitespace-pre-line">
          {item.authors}
        </div>
        <div className="text-sm max-h-9rem overflow-auto whitespace-pre-line">
          {item.brief}
        </div>
      </div>

      <div className="absolute top-0 right-0 rounded-bl-xl rounded-tr-xl px-2 py-1 text-sm capitalize bg-orange-200 dark:bg-orange-500">
        {item.category}
      </div>
    </div>
  ) : (
    <>Unsupported item type.</>
  );
}
