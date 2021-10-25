import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiBookOpen, HiUser } from 'react-icons/hi';
import { Button } from 'shared';

import LogoImage from 'components/LogoImage';

import NavLink from './NavLink';
import NavMobileMenu from './NavMobileMenu';

export default function Navbar() {
  const router = useRouter();

  const links = [
    {
      href: '/docs',
      icon: HiBookOpen,
      title: 'Documentation',
    },
    {
      href: '/signin',
      icon: HiUser,
      title: 'Sign In',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-2 w-full bg-light z-50">
      <div className="mx-auto max-w-7xl relative flex items-center justify-between h-16">

        <Link href="/">
          <a>
            <LogoImage className="h-8 sm:h-10" />
          </a>
        </Link>

        <div className="hidden md:block space-x-8">

          {links.map(({ title, href }) => (
            <NavLink href={href}>
              {title}
            </NavLink>
          ))}

          <Button type="primary" onClick={() => router.push('/signin')}>
            Sign Up
          </Button>

        </div>

        <NavMobileMenu links={links} />

      </div>
    </div>
  );
}
