import Layout from '@/app/layout';
import '../styles/globals.css';

function Store({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Store;
