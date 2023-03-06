import cx from "classnames";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, className, ...rest }: Props) {
  return (
    <a className={cx("underline text-neutral", className)} {...rest}>
      {children}
    </a>
  );
}
