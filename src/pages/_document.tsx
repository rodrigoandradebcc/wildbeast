import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }     
    return renderPage();
  }

  render() {
    return (

      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          {/* <title>Wildbeast</title> */}
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}