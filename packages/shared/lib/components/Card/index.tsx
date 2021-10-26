import React, { ReactNode } from 'react';

import { classNames } from '../../utils/tailwind';

type CardProps = {
  children: ReactNode,
  className?: string,
};

export function Card({
  children, className,
}: CardProps) {
  const cardClassName = classNames(
    'px-6 py-8',
    'rounded-3xl border-2 border-transparent dark:border-dark-light',
    className,
  );

  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
}
