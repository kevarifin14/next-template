import Link from 'next/link';
import { HiInbox, HiMoon, HiSun } from 'react-icons/hi';
import { useAppearanceContext, LogoImage } from 'shared';

import NavLink from './NavLink';
import NavMobileMenu from './NavMobileMenu';

export default function Navbar() {
  const { dark, setDark } = useAppearanceContext();
  const links = [
    {
      title: 'Packages',
      href: '/packages',
      icon: HiInbox,
    },
    {
      title: 'Docs',
      href: '/docs',
      icon: HiInbox,
    },
    {
      title: 'Guides',
      href: '/guides',
      icon: HiInbox,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-2">
      <div className="mx-auto relative flex items-center justify-between h-16 max-w-7xl w-full">

        <Link href="/">
          <a>
            <LogoImage className="h-8 sm:h-10" />
          </a>
        </Link>

        <div className="hidden md:flex justify-center space-x-8 flex-1">
          {links.map(({ title, href }) => (
            <NavLink key={title} href={href}>
              {title}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end space-x-8">

          <button
            onClick={() => setDark(!dark)}
            className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary no-underline font-medium"
          >
            {dark ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
          </button>

        </div>

        <NavMobileMenu links={links} />

      </div>
    </div>
  );
}
