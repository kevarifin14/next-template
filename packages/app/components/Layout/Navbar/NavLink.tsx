import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary no-underline font-medium">
        {children}
      </a>
    </Link>
  );
}
