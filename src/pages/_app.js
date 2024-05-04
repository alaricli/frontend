import Layout from '@/app/layout';
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51PBPQJLQCW5U5NqDLdP7NVHZL5jTYkPR1x5wk6fYoMfDD0qiNxcbULHIhxojxcyvHyrkkgEw4SfrRk7zNZVxVg5s00t1MpXvLQ'
);

function Store({ Component, pageProps }) {
  const isCheckoutPage = Component.name === 'Checkout';

  const componentWithStripe = (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  )
  
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        {isCheckoutPage ? componentWithStripe : <Component {...pageProps} />}
      </Layout>
    </ClerkProvider>
  );
}

export default Store;