import { errorTypeToMessage } from "../../utils/forms";
import { classNames } from "../../utils/tailwind";
import { ExclamationCircleIcon } from "../Icon";
import React, { forwardRef, HTMLProps } from "react";
import { ErrorOption } from "react-hook-form";

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  error?: ErrorOption;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const { error } = props;

    const textAreaClassName = classNames(
      "shadow-sm",
      "focus:outline-none",
      "w-full",
      "border",
      "border-light-400",
      "rounded-tr-md",
      "rounded-bl-md",
      "block",
      "text-gray-900",
      "placeholder-gray-500",
      "focus:border-primary-600",
      "focus:ring-primary-600",
      "focus:ring-1",
      "px-4 py-2",
      "resize-none",
      "dark:bg-dark-light",
      "dark:border-transparent",
      "dark:text-white"
    );

    return (
      <div className={props.className}>
        {props.label && (
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {props.label}
          </label>
        )}
        <div className="relative">
          <textarea {...props} ref={ref} className={textAreaClassName} />
          {error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon />
            </div>
          )}
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {error.message || errorTypeToMessage(error.type)}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
