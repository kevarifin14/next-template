import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const footerNavigation = {
  main: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/intent/follow?screen_name=notionql',
      icon: (props) => <FaTwitter {...props} />,
    },
    {
      name: 'Mail',
      href: 'mailto:kevin@notionql.com',
      icon: (props) => <HiMail {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">

        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-gray-400 hover:text-gray-300">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2021 App, Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
