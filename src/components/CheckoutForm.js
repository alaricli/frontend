import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe has not loaded yet.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // TODO: send paymentmethod.id to server for processing
      // use axios
      const response = await fetch('http://localhost:8000/checkout/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });
      const paymentResult = await response.json();
      console.log(paymentResult);
    }
  };

  return (
    <form onSubmit={handleCheckout}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
      >
        Submit Payment
      </button>
    </form>
  );
}

export default CheckoutForm