import Layout from '@/app/layout';
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';

function Store({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default Store;