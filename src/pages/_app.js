import "../../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PixelRhino</title>
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
