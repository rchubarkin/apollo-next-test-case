import cx from "classnames";
import { Launch } from "@/gql";
import { Heading } from "./Heading";
import { Link } from "./Link";

import { formatDate, MS_IN_SEC } from "./lib";
import { FavoriteButton } from "./FavoriteButton";
import { toggleFavorite, useFavorites } from "@/state/favorites";
import { useMemo } from "react";
import { RocketIcon } from "./RocketIcon";
import { Badge } from "./Badge";

type LaunchCardProps = React.HTMLAttributes<HTMLDivElement> & {
  launch: Launch;
};

export function LaunchCard({ launch, className, ...rest }: LaunchCardProps) {
  const favorites = useFavorites();

  const isFavorite = useMemo(
    () => Boolean(favorites.find((l) => l.id === launch.id)),
    [launch, favorites]
  );

  const _toggleFavorite = () => {
    toggleFavorite(launch);
  };

  return (
    <article
      className={cx(
        "flex flex-col lg:flex-row items-start",
        "p-6 bg-stone rounded-2xl",
        className
      )}
      {...rest}
    >
      <div className="flex-1 flex flex-col self-stretch lg:mr-16">
        <div className="flex justify-between">
          <Heading>{launch.mission_name}</Heading>

          <FavoriteButton
            className="lg:hidden"
            active={isFavorite}
            onClick={_toggleFavorite}
          />
        </div>

        <span className="mt-2">
          {formatDate(launch.launch_date_unix! * MS_IN_SEC)}
        </span>

        {launch.details && (
          <>
            <span className="text-neutral-darker mt-4">Details</span>

            <p className="text-neutral-dark line-clamp-6 text-ellipsis mt-2">
              {launch.details}
            </p>
          </>
        )}

        {launch.links?.presskit && (
          <Link className="mt-4" href={launch.links?.presskit} target="_blank">
            PressKit
          </Link>
        )}
      </div>

      <RocketCard rocket={launch.rocket!} className="lg:mr-16 mt-20 lg:mt-0" />

      <FavoriteButton
        className="hidden lg:inline"
        active={isFavorite}
        onClick={_toggleFavorite}
      />
    </article>
  );
}

type RocketCardProps = {
  rocket: NonNullable<Launch["rocket"]>;
  className?: string;
};

function RocketCard({ rocket, className }: RocketCardProps) {
  const tableRowBorder = "border-b-1 border-neutral-dark";
  const tableTitle = "py-3 text-neutral-darker";
  return (
    <div className={cx("flex-1 flex flex-col", className)}>
      <Heading className="flex items-center lg:-ml-[26px]">
        <RocketIcon className="mr-2" />
        {rocket.rocket_name}
        {rocket.rocket?.active && <Badge className="ml-6">Active</Badge>}
      </Heading>

      <table className="mt-4 min-w-[400px]">
        <tbody>
          <tr className={tableRowBorder}>
            <td className={tableTitle}>First Flight</td>
            <td>{formatDate(rocket.rocket?.first_flight)}</td>
          </tr>
          <tr className={tableRowBorder}>
            <td className={tableTitle}>Engines</td>
            <td>{rocket.rocket?.engines?.number}</td>
          </tr>
          <tr className={tableRowBorder}>
            <td className={tableTitle}>Stages</td>
            <td>{rocket.rocket?.stages}</td>
          </tr>
          <tr>
            <td className={tableTitle}>Engine Layout</td>
            <td>{rocket.rocket?.engines?.layout}</td>
          </tr>
        </tbody>
      </table>

      <Link className="mt-2" href={rocket.rocket?.wikipedia!} target="_blank">
        Read more on wikipedia
      </Link>
    </div>
  );
}
