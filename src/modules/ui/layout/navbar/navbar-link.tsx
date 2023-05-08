import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type NavbarLinkProps = LinkProps & {
  children: string;
};

export const NavbarLink = ({ children, href }: NavbarLinkProps) => {
  const router = useRouter();
  const active = router.asPath === href;

  const classes = clsx(
    'text-24 font-bold uppercase',
    active && 'underline decoration-3 underline-offset-8',
  );

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
};
