import Link from 'next/link';

type NavIconLinkProps = {
  href: string,
  title: string,
  icon?: any,
};

export default function NavIconLink({ title, href, ...props }: NavIconLinkProps) {
  return (
    <Link href={href}>
      <a className="-m-3 flex items-center p-3 rounded-lg no-underline prose hover:bg-light-dark dark:prose-light dark:hover:bg-dark-500">

        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary sm:h-12 sm:w-12">
          <props.icon className="h-5 w-5 text-white" />
        </div>

        <p className="ml-3 text-base font-medium m-0 dark:text-gray-50">
          {title}
        </p>

      </a>
    </Link>
  );
}
