import { MenuIcon } from 'modules/ui/icons';
import { NavbarLink } from './navbar-link';
import clsx from 'clsx';

type NavbarMobileMenuTriggerProps = {
  onClick: () => void;
};

export const NavbarMobileMenuTrigger = ({
  onClick,
}: NavbarMobileMenuTriggerProps) => {
  return (
    <button onClick={onClick} className="flex sm:hidden">
      <MenuIcon />
    </button>
  );
};

type NavbarMobileMenuProps = {
  color: 'green' | 'eggplant';
  open: boolean;
};

export const NavbarMobileMenu = ({ color, open }: NavbarMobileMenuProps) => {
  const classes = clsx(
    'py-24 shadow-25',
    color === 'green' ? 'bg-green-lighter' : 'bg-eggplant-lighter',
  );

  if (open) {
    return (
      <div className={classes}>
        <ul className="flex list-none flex-col items-center gap-24">
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
      </div>
    );
  }

  return null;
};
