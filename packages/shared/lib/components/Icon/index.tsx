import React from 'react';
import * as heroicons from 'react-icons/hi';

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
      case heroicons.HiCheckCircle:
        return 'text-green-500';

      case heroicons.HiExclamationCircle:
        return 'text-yellow-500';

      case heroicons.HiXCircle:
        return 'text-red-500';

      case heroicons.HiInformationCircle:
        return 'text-yellow-500';

      case heroicons.HiExternalLink:
      case heroicons.HiArrowsExpand:
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

export const CheckCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiCheckCircle} {...props} />;
export const ExclamationCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiExclamationCircle} {...props} />;
export const XCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiXCircle} {...props} />;
export const ExternalLinkIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiExternalLink} {...props} />;
export const PlusIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiPlus} {...props} />;
export const ArrowsExpandIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiArrowsExpand} {...props} />;
export const InformationCircleIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={heroicons.HiInformationCircle} {...props} />;

export const alertTypeToIcon = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  error: XCircleIcon,
  warning: ExclamationCircleIcon,
};
