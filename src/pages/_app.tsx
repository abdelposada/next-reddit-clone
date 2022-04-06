import type { AppProps } from 'next/app';

function RedditApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RedditApp;
