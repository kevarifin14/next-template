import 'tailwindcss/tailwind.css'; // eslint-disable-line import/no-extraneous-dependencies
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import WalletsProvider from 'contexts/wallets';

const WalletConnectionProvider = dynamic(() => import('contexts/walletConnection'), {
  ssr: false,
});

function App({ Component, pageProps }) {
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
