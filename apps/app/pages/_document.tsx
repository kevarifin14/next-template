import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-dark h-full">
        <Head>
          {process.env.NODE_ENV === "production" &&
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
              <>
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
              `,
                  }}
                />
              </>
            )}
        </Head>

        <body className="h-full bg-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
