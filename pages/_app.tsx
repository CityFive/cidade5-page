import * as React from "react";
import GlobalStyles from "../styles/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cidade Cinco - Igreja Reformada Missional</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
