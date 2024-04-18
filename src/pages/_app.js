import Layout from '@/app/layout';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';

function Store({ Component, pageProps }) {
  const [customer, admin] = useState(null);
  const [guest, loggedIn] = useState(null);

  useEffect(() => {

  }, []);

  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default Store;
