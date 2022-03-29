import { classNames } from "../../utils/tailwind";
import React, { ReactNode } from "react";

type StatProps = {
  title: string;
  stat: number;
  className?: string;
  formatter?: (value: number) => ReactNode;
};

export function Stat({
  title,
  stat,
  className,
  formatter = (value) => value,
}: StatProps) {
  const statClassName = classNames("prose dark:prose-invert", className);

  return (
    <div className={statClassName}>
      <p className="m-0 text-sm font-medium truncate">{title}</p>
      <h2 className="mt-1 text-xl md:text-2xl lg:text-3xl font-semibold">
        {formatter(stat)}
      </h2>
    </div>
  );
}
