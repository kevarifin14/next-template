import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { classNames, TailwindSize } from '../../utils/tailwind';
import { Spin } from '../Spin';

export type ButtonProps = {
  type: 'primary' | 'secondary',
  children: ReactNode,
  htmlType?: 'submit' | 'button',
  className?: string,
  loading?: boolean,
  disabled?: boolean,
  gradient?: boolean,
  size?: TailwindSize,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  block?: boolean,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    type, children, htmlType = 'button', className, loading, disabled, onClick, block, size,
    gradient,
  },
  ref,
) => {
  const primaryClassName = classNames(
    'text-white',
    gradient
      ? 'bg-gradient-to-tr from-primary-500 to-primary-900'
      : 'bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark border',
  );
  const secondaryClassName = 'dark:text-primary dark:bg-transparent dark:border-primary text-primary-dark bg-primary-100 border-primary-100 hover:bg-primary-200 hover:border-primary-200 border';

  const disabledClassName = 'opacity-50';
  const blockClassName = 'w-full';

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

  const buttonClassName = [
    'inline-flex', 'items-center', 'justify-center', 'focus:outline-none', 'font-medium',
    'rounded-md',
    type === 'primary' ? primaryClassName : '',
    type === 'secondary' ? secondaryClassName : '',
    disabled ? disabledClassName : '',
    block ? blockClassName : '',
    sizeClassName,
    className,
  ].join(' ');

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
});
