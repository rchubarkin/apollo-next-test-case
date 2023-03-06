import cx from "classnames";
import { Heading } from "./Heading";
import { Nav } from "./Nav";

function Header() {
  return (
    <header className="w-full max-w-[1032px] flex justify-between items-center px-6 py-8">
      <Heading>SpaceX Launches</Heading>
      <Nav />
    </header>
  );
}

export const Layout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={cx(
      "w-full h-screen overflow-y-auto",
      "flex flex-col items-center",
      "font-root text-neutral bg-stone-dark",
      className
    )}
  >
    <Header />
    <main className="w-full max-w-[584px] lg:max-w-[1032px]">{children}</main>
  </div>
);
