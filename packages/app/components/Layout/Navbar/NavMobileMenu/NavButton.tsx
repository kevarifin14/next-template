import { ReactNode } from 'react';

type NavButtonProps = {
  children: ReactNode,
  onClick: () => void,
};

export default function NavButton({ onClick, children }: NavButtonProps) {
  return (
    <button
      type="button"
      className="bg-light rounded-md p-2 inline-flex items-center justify-center focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
