type Props = React.HTMLAttributes<SVGElement>;

export function RocketIcon(props: Props) {
  return (
    <svg
      {...props}
      width="16"
      height="30"
      viewBox="0 0 16 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00008 0H12.0001V21.5858L15.7072 25.2929L14.293 26.7071L10.0001 22.4142V2H6.00008V22.4142L1.70718 26.7071L0.292969 25.2929L4.00008 21.5858V0Z"
        fill="#EBEBEB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00012 30L7.00012 25L9.00012 25L9.00012 30L7.00012 30Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
