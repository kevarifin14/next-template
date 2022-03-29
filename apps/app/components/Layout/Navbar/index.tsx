import NavLink from "./NavLink";
import { useAppearanceContext } from "@next-template/shared";
import LogoImage from "components/LogoImage";
import Link from "next/link";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Navbar() {
  const links = [];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-2 w-full">
      <div className="mx-auto max-w-7xl relative flex items-center justify-between h-16">
        <Link href="/">
          <a>
            <LogoImage className="h-8 sm:h-10" />
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ title, href }) => (
            <NavLink href={href} key={href}>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
