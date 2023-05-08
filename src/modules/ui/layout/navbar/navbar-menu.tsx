import { MenuIcon } from 'modules/ui/icons';
import { NavbarLink } from './navbar-link';

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
  open: boolean;
};

export const NavbarMobileMenu = ({ open }: NavbarMobileMenuProps) => {
  if (open) {
    return (
      <div className="bg-[#b4d4c3] py-24 shadow-25">
        <ul className="flex flex-col items-center gap-24">
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
