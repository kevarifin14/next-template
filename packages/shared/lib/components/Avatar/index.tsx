import React from 'react';

import { classNames, TailwindSize, sizeToClassName } from '../../utils/tailwind';

type AvatarProps = {
  src: string,
  size?: TailwindSize,
  className?: string,
};

export function Avatar({ src, size = 'md', className }: AvatarProps) {
  const sizeClassName = sizeToClassName(size);

  const avatarClassName = classNames(
    'relative', 'rounded-full', 'overflow-hidden', 'flex', 'items-center', `text-${size}`,
    sizeClassName,
    className,
  );

  return (
    <div className={avatarClassName}>
      <img src={src} alt={src} />
    </div>
  );
}
