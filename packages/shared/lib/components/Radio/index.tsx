import React from "react";

export { RadioGroup } from "./RadioGroup";

type RadioProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  value: string | boolean;
};

export function Radio({ children, selected, value, onClick }: RadioProps) {
  const selectedClassName = [
    "absolute",
    "inset-0",
    "rounded-lg",
    "border-2",
    "pointer-events-none",
    selected ? "border-primary" : "border-transparent",
  ].join(" ");

  return (
    <li
      className="group relative bg-light-dark dark:bg-dark-light rounded-lg shadow-sm cursor-pointer focus:outline-none"
      onClick={onClick}
    >
      <div className="rounded-lg border border-light dark:border-dark px-6 py-4 hover:border-gray-400">
        {children}
      </div>
      <div className={selectedClassName} />
    </li>
  );
}
