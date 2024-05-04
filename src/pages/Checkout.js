import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: 'gray',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (!stripe || !elements ) {
      console.log("Stripe has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // send paymentmethod.id to server for processing
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
    <div className="bg-gray-800 p-8 rounded-lg max-w-md mx-auto mt-10 text-white">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handleCheckout} className="space-y-6">
        <h2 className="text-xl">Your Cart Items</h2>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Total: $100</div>

        <h2 className="text-xl">Payment Details</h2>
        <div className="bg-gray-900 p-4 rounded">
          <CardElement options={cardStyle} />
        </div>
        <button type="submit" disabled={!stripe}>
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default Checkout