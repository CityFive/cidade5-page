import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/ProximaNova.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/AbrilFatface.ttf"
            as="font"
            crossOrigin=""
          />

          <title>Cidade Cinco - Igreja Reformada Missional</title>
          <meta
            name="title"
            content="Cidade Cinco - Igreja Reformada Missional"
          />
          <meta
            name="description"
            content="Nós somos uma igreja conectada à tradição reformada. E entendendo nosso chamado para esse tempo no contexto no qual estamos inseridos, somos também uma igreja missional."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cidadecinco.vercel.app/" />
          <meta
            property="og:title"
            content="Cidade Cinco - Igreja Reformada Missional"
          />
          <meta
            property="og:description"
            content="Nós somos uma igreja conectada à tradição reformada. E entendendo nosso chamado para esse tempo no contexto no qual estamos inseridos, somos também uma igreja missional."
          />
          <meta
            property="og:image"
            content="https://cidadecinco.vercel.app/images/preview.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://cidadecinco.vercel.app/"
          />
          <meta
            property="twitter:title"
            content="Cidade Cinco - Igreja Reformada Missional"
          />
          <meta
            property="twitter:description"
            content="Nós somos uma igreja conectada à tradição reformada. E entendendo nosso chamado para esse tempo no contexto no qual estamos inseridos, somos também uma igreja missional."
          />
          <meta
            property="twitter:image"
            content="https://cidadecinco.vercel.app/images/preview.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
