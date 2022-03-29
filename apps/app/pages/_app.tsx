import { pageview, Fonts } from "@next-template/shared";
import { Providers } from "components/Providers";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      router.events.on("routeChangeComplete", pageview);
    }

    return () => {
      if (process.env.NODE_ENV === "production") {
        router.events.off("routeChangeComplete", pageview);
      }
    };
  }, [router.events]);

  const title = router.query.symbol
    ? `$${(router.query.symbol as string)?.toUpperCase()} | Underdog Protocol`
    : "Underdog Protocol";
  const description = "Back the People You Believe In";

  const seoProps: DefaultSeoProps = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_APP_URL,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
        },
      ],
    },
    twitter: {
      site: title,
      handle: "",
      cardType: "summary_large_image",
    },
  };

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo {...seoProps} />

      <Head>
        <Fonts />
      </Head>

      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
    </>
  );
}

export default App;
