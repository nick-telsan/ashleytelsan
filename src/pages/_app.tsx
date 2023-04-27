import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: React.ReactElement, props: P) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Ashley Telsan</title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  );
};

export default App;
