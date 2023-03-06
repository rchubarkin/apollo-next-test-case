import cx from "classnames";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ className, children, ...rest }: Props) {
  return (
    <h1
      {...rest}
      className={cx("text-[32px] leading-10 font-medium", className)}
    >
      {children}
    </h1>
  );
}
