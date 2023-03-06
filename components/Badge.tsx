import cx from "classnames";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...rest }: Props) {
  return (
    <span
      className={cx(
        "bg-neutral text-stone text-xs px-2 rounded-lg font-medium",
        className
      )}
      {...rest}
    />
  );
}
