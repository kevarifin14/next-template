import * as heroicons from '@heroicons/react/solid';
import React from 'react';

import {
  classNames, Heroicon, sizeToClassName, TailwindSize,
} from '../../utils/tailwind';

type IconProps = {
  icon: Heroicon,
  size?: TailwindSize,
  className?: string,
};

export default function Icon({ size = 'xs', className, ...props }: IconProps) {
  const sizeClassName = sizeToClassName(size);

  const getDefaultColorClassName = (icon: Heroicon) => {
    switch (icon) {
      case heroicons.CheckCircleIcon:
        return 'text-green-500';

      case heroicons.ExclamationCircleIcon:
        return 'text-yellow-500';

      case heroicons.XCircleIcon:
        return 'text-red-500';

      case heroicons.InformationCircleIcon:
        return 'text-yellow-500';

      case heroicons.ExternalLinkIcon:
      case heroicons.ArrowsExpandIcon:
        return 'text-gray-500';

      default:
        return '';
    }
  };

  const defaultColorClassName = getDefaultColorClassName(props.icon);

  const iconClassName = classNames(
    defaultColorClassName,
    sizeClassName,
    className,
  );

  return (
    <props.icon className={iconClassName} />
  );
}

export const CheckCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.CheckCircleIcon} {...props} />;
export const ExclamationCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.ExclamationCircleIcon} {...props} />;
export const XCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.XCircleIcon} {...props} />;
export const ExternalLinkIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.ExternalLinkIcon} {...props} />;
export const PlusIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.PlusIcon} {...props} />;
export const ArrowsExpandIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.ArrowsExpandIcon} {...props} />;
export const InformationCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.InformationCircleIcon} {...props} />;

export const alertTypeToIcon = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  error: XCircleIcon,
  warning: ExclamationCircleIcon,
};
