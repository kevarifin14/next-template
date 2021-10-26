import 'tailwindcss/tailwind.css'; // eslint-disable-line import/no-extraneous-dependencies
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview, NotificationsProvider, AppearanceProvider } from 'shared';

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
    <>
      <DefaultSeo {...seoProps} />

      <AppearanceProvider dark>
        <NotificationsProvider>
          {getLayout(<Component {...pageProps} />)}
        </NotificationsProvider>
      </AppearanceProvider>

    </>
  );
}

export default App;
