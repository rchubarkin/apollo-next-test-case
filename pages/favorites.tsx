import Head from "next/head";

import { LaunchCard, LaunchListMeta } from "@/components";
import { useFavorites } from "@/state/favorites";
import { FavoriteButton } from "@/components/FavoriteButton";

/**
 *
 * Тут закладки берутся целиком из кеша, без запроса к апи, что я считаю в общем случае неправильным
 * Т.к. актуальность данных не гарантируется.
 *
 * Правильно было бы хранить id запусков в закладках и запрашивать остальные данные по ним
 *
 * Но апи из условия задачи не позволяет запросить данные по списку id
 * (напр. filter : { id: { _in: ids } })
 */

export default function Favorites() {
  const launches = useFavorites();

  return (
    <>
      <Head>
        <title>Favorite Launches</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {launches.length > 0 && <LaunchListMeta />}

      {launches.map((launch) => (
        <LaunchCard key={launch.id!} className="mb-4" launch={launch} />
      ))}

      {launches.length === 0 && <Stub />}
    </>
  );
}

function Stub() {
  return (
    <article className="p-6 bg-stone rounded-2xl text-neutral-dark flex items-center">
      Press <FavoriteButton className="mx-2 cursor-default" active={false} /> if
      you want add item to bookmarks
    </article>
  );
}
