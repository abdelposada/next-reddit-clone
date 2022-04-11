import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '../api';

function RedditApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default RedditApp;
