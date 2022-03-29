import { classNames } from "../../utils/tailwind";
import React from "react";

type LogoImageProps = {
  className?: string;
  dark: boolean;
};

export function LogoImage({ className, dark }: LogoImageProps) {
  return (
    <img
      src={dark ? "/logo-light.svg" : "/logo-dark.svg"}
      alt="logo"
      className={classNames("mx-auto", "w-auto", className)}
    />
  );
}
