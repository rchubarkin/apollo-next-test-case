import { useFavorites } from "@/state/favorites";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<React.ComponentProps<typeof Link>> = ({
  href,
  className,
  ...rest
}) => {
  const active = useRouter().pathname === href;
  return (
    <Link
      href={href}
      className={cx("underline text-neutral p-4 rounded-lg", className, {
        "bg-stone": active,
      })}
      {...rest}
    />
  );
};

export function Nav() {
  const favorites = useFavorites();
  return (
    <nav>
      <NavLink href="/">Show All</NavLink>
      <NavLink href="/favorites" className="no-underline">
        <span className="underline">Bookmarks</span>
        {favorites.length > 0 && (
          <span className="ml-2">{favorites.length}</span>
        )}
      </NavLink>
    </nav>
  );
}
