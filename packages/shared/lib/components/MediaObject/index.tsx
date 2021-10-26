import React from 'react';

import { classNames, TailwindSize } from '../../utils/tailwind';
import { Avatar } from '../Avatar';

export type MediaObjectProps = {
  title: string,
  src?: string,
  description?: string,
  size?: TailwindSize,
  className?: string,
  dark?: boolean,
};

export function MediaObject({
  title, src, description, size, className, dark,
}: MediaObjectProps) {
  const textClassName = dark ? 'text-white' : 'text-black';

  return (
    <div className={classNames('flex items-center space-x-2', className)}>
      <div className="flex-shrink-0">
        <Avatar size={size} src={src} />
      </div>

      <div className={classNames('flex flex-col justify-center overflow-hidden', textClassName)}>
        <p className={`font-medium text-${size} truncate m-0`}>
          {title}
        </p>
        <p className="text-xs truncate m-0">
          {description}
        </p>
      </div>
    </div>
  );
}
