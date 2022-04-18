import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { queryClient } from '../api';
import '@styles/globals.css';

function RedditApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default RedditApp;
