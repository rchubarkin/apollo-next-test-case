import cx from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function Button({
  children,
  className,
  fullWidth = false,
  ...rest
}: Props) {
  return (
    <button
      className={cx(
        "bg-stone-light text-center p-5 rounded-2xl text-2xl",
        { "w-full": fullWidth },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
