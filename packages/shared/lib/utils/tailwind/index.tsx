import { ComponentProps } from 'react';

export type TailwindSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const sizeToDimension = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
};

export const sizeToClassName = (size: TailwindSize) => {
  const dimension = sizeToDimension[size];
  return `h-${dimension} w-${dimension}`;
};

export type AlertType = 'success' | 'info' | 'error' | 'warning';

export type Heroicon = (props: ComponentProps<'svg'>) => JSX.Element; // eslint-disable-line