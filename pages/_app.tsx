import 'tailwindcss/tailwind.css'; // eslint-disable-line import/no-extraneous-dependencies
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import WalletsProvider from 'contexts/wallets';
import { pageview } from 'utils/ga';

const WalletConnectionProvider = dynamic(() => import('contexts/walletConnection'), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      router.events.on('routeChangeComplete', pageview);
    }

    return () => {
      if (process.env.NODE_ENV === 'production') {
        router.events.off('routeChangeComplete', pageview);
      }
    };
  }, [router.events]);

  const title = 'title';
  const description = 'description';

  const seoProps = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <WalletConnectionProvider>
      <WalletsProvider>
        <DefaultSeo {...seoProps} />
        {getLayout(<Component {...pageProps} />)}
      </WalletsProvider>
    </WalletConnectionProvider>
  );
}

export default App;
