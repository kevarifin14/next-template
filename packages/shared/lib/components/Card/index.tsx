import { classNames } from "../../utils/tailwind";
import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  type?: "primary" | "secondary-outline";
  className?: string;
  title?: string;
};

export function Card({ children, className, type, title }: CardProps) {
  let typeClassName;

  switch (type) {
    case "primary":
      typeClassName = "bg-primary-dark";
      break;

    case "secondary-outline":
      typeClassName = "border border-secondary";
      break;

    default:
      typeClassName = "bg-light dark:bg-dark-light";
  }

  const cardClassName = classNames(
    "px-6 py-8 rounded-tr-3xl rounded-bl-3xl shadow-md dark:shadow-none",
    typeClassName,
    className
  );

  return (
    <div>
      {title && (
        <div className="flex justify-end mr-12">
          <div className="my-0 text-dark text-lg font-semibold float-right inline-block bg-secondary px-4 py-1 rounded-tl-xl">
            {title}
          </div>
        </div>
      )}
      <div className={cardClassName}>{children}</div>
    </div>
  );
}
