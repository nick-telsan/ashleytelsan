import { Footer } from './footer';
import { Navbar } from './navbar';

type LayoutProps = {
  children: React.ReactElement;
  color?: 'green' | 'eggplant';
};

export const Layout = ({ children, color = 'green' }: LayoutProps) => {
  return (
    <>
      <Navbar color={color} />
      <main className="flex w-full flex-1">{children}</main>
      <Footer color={color} />
    </>
  );
};
