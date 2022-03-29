import {
  classNames,
  TailwindSize,
  sizeToClassName,
} from "../../utils/tailwind";
import React from "react";

type AvatarProps = {
  src: string;
  size?: TailwindSize;
  className?: string;
};

export function Avatar({ src, size = "md", className }: AvatarProps) {
  const sizeClassName = sizeToClassName(size);

  const avatarClassName = classNames(
    "relative",
    "rounded-full",
    "overflow-hidden",
    "flex",
    "items-center",
    "flex-shrink-0",
    sizeClassName,
    className
  );

  return (
    <div className={avatarClassName}>
      <img src={src} alt={src} />
    </div>
  );
}
