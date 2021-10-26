import React, { ReactNode } from 'react';

import { classNames } from '../../utils/tailwind';

type CardProps = {
  children: ReactNode,
  type?: 'primary',
  className?: string,
};

export function Card({
  children, className, type,
}: CardProps) {
  let typeClassName;

  switch (type) {
    case 'primary':
      typeClassName = 'bg-primary-dark';
      break;

    default:
      typeClassName = 'bg-light dark:bg-dark-light';
  }

  const cardClassName = classNames(
    'px-6 py-8 rounded-3xl shadow-xl dark:shadow-none',
    typeClassName,
    className,
  );

  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
}
