import { Footer } from './footer';
import { Navbar } from './navbar';

type LayoutProps = {
  children: React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-1">{children}</main>
      <Footer />
    </>
  );
};
