import { classNames } from "@next-template/shared";

type LogoImageProps = {
  className?: string;
};

export default function LogoImage({ className }: LogoImageProps) {
  return (
    <img
      src="/logo.png"
      alt="logo"
      className={classNames("mx-auto", "w-auto", className)}
    />
  );
}
