import '../styles/reset.css';
import '../styles/react_dates_overrides.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <meta
          name="description"
          content="廃品回収業者を比較＆予約できるサービスです"
        />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
