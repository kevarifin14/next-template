import React, { forwardRef, HTMLProps } from 'react';
import { ErrorOption } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { errorTypeToMessage } from '../../utils/forms';
import { classNames, TailwindSize } from '../../utils/tailwind';
import { ExclamationCircleIcon } from '../Icon';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  size?: TailwindSize,
  error?: ErrorOption,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'md', label, error, ...inputProps
}, ref) => {
  let sizeClassName;
  switch (size) {
    case 'lg':
      sizeClassName = 'px-5 py-3 text-lg';
      break;

    case 'xl':
      sizeClassName = 'px-6 py-4 text-xl';
      break;

    default:
      sizeClassName = 'px-4 py-2';
  }

  const inputClassName = classNames(
    'shadow-sm', 'focus:outline-none', 'w-full', 'border', 'bg-light',
    'border-light-400', 'rounded-md', 'block',
    'text-gray-900', 'placeholder-gray-500',
    'focus:border-primary-600', 'focus:ring-primary-600', 'focus:ring-1',
    'dark:bg-dark-light', 'dark:border-transparent', 'dark:text-white',
    sizeClassName,
    inputProps.className,
  );
  const id = uuid();

  return (
    <div className="w-full">

      {label && (
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          {...inputProps}
          className={inputClassName}
          ref={ref}
          style={{ WebkitAppearance: 'none' }}
        />

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
});
