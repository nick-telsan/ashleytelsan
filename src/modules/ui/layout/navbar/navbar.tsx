import Image from 'next/image';
import Link from 'next/link';
import { NavbarLink } from './navbar-link';
import { useEffect, useState } from 'react';
import { NavbarMobileMenu, NavbarMobileMenuTrigger } from './navbar-menu';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type NavbarProps = {
  color: 'green' | 'eggplant';
};

export const Navbar = ({ color }: NavbarProps) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const classes = clsx(
    'flex h-90 w-full items-center justify-between px-32 shadow-25 md:px-64 lg:px-124',
    color === 'green' ? 'bg-green-light' : 'bg-eggplant-light',
  );

  const toggleMobileMenu = () => setMobileMenuOpen((previous) => !previous);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <nav>
      <div className={classes}>
        <div className="flex items-center gap-24">
          <Link
            className="flex h-60 w-60 items-center justify-center rounded-full bg-white"
            href="/"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          <h2 className="hidden text-24 font-bold uppercase sm:block">
            Ashley Telsan
          </h2>
        </div>
        <div>
          <ul className="hidden list-none gap-24 sm:flex">
            <li>
              <NavbarLink href="/">Home</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/about">About</NavbarLink>
            </li>
            <li>
              <NavbarLink href="/about#resume">Resume</NavbarLink>
            </li>
          </ul>
          <NavbarMobileMenuTrigger onClick={toggleMobileMenu} />
        </div>
      </div>
      <NavbarMobileMenu color={color} open={mobileMenuOpen} />
    </nav>
  );
};
