import { TWStyles } from '@uitypes';
import classNames from 'classnames';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
// import { extractCritical } from 'emotion-server';

export default class RedditDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // const styles = extractCritical(initialProps.html);
    return initialProps;
  }

  render() {
    const bodyClasses = classNames(TWStyles.bg.DARK, TWStyles.bg.LIGHT, TWStyles.text.DARK)
    return (
      <Html className="dark">
        <Head>{/* {<!-- TODO -->} */}</Head>
        <body className={bodyClasses}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
