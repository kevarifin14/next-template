import { ReactNode } from 'react';
import { classNames, TailwindSize } from 'shared';

type SectionProps = {
  children: ReactNode,
  size?: TailwindSize,
  className?: string,
};

export default function Section({ children, size, className }: SectionProps) {
  const sectionClassName = classNames(
    'py-8 px-4 lg:py-12 lg:px-6 w-full prose dark:prose-light mx-auto',
    size ? `max-w-${size}` : 'max-w-none',
    className,
  );

  return (
    <div className={sectionClassName}>
      {children}
    </div>
  );
}
