import { classNames, TailwindSize } from "../../utils/tailwind";
import { Spin } from "../Spin";
import React, { forwardRef, MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  type: "primary" | "secondary" | "white";
  children: ReactNode;
  htmlType?: "submit" | "button";
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  gradient?: boolean;
  size?: TailwindSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      children,
      htmlType = "button",
      className,
      loading,
      disabled,
      onClick,
      block,
      size,
      gradient,
    },
    ref
  ) => {
    const primaryClassName = classNames(
      "text-white",
      gradient
        ? "bg-gradient-to-tr from-primary-400 to-primary-600"
        : "bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark border"
    );
    const secondaryClassName =
      "dark:text-primary dark:bg-transparent dark:border-primary text-primary-dark bg-primary-100 border-primary-100 hover:bg-primary-200 hover:border-primary-200 border hover:bg-primary-50";
    const whiteClassName = "text-primary bg-white";

    const disabledClassName = "opacity-50 cursor-not-allowed";
    const blockClassName = "w-full";

    let sizeClassName;

    switch (size) {
      case "sm":
        sizeClassName = "px-3 py-1 text-sm";
        break;

      case "lg":
        sizeClassName = "px-5 py-3 text-lg";
        break;

      case "xl":
        sizeClassName = "px-6 py-4 text-xl";
        break;

      default:
        sizeClassName = "px-4 py-2";
    }

    const buttonClassName = [
      "inline-flex",
      "items-center",
      "justify-center",
      "focus:outline-none",
      "font-medium",
      "rounded-t-md",
      "rounded-br-md",
      type === "primary" ? primaryClassName : "",
      type === "secondary" ? secondaryClassName : "",
      type === "white" ? whiteClassName : "",
      disabled ? disabledClassName : "",
      block ? blockClassName : "",
      sizeClassName,
      className,
    ].join(" ");

    return (
      <button
        ref={ref}
        type={htmlType}
        className={buttonClassName}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {loading && <Spin className="mr-2" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
