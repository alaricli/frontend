import CheckoutForm from "@/components/CheckoutForm";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  'pk_test_51PBPQJLQCW5U5NqDLdP7NVHZL5jTYkPR1x5wk6fYoMfDD0qiNxcbULHIhxojxcyvHyrkkgEw4SfrRk7zNZVxVg5s00t1MpXvLQ'
);

function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // change the amount to a get request to get the cartTotal
    axios.post('http://localhost:8000/checkout/payment-intent', { amount: 2000 })
      .then(response => {
        setClientSecret(response.data);
      })
      .catch(error => {
        console.error("Error creating payment intent", error);
      });
  }, []);

  const options = {
    clientSecret,
    appearance: { theme: 'stripe' },
  };

  if (!clientSecret) {
    return <div>
      Loading...
    </div>
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="bg-gray-800 p-8 rounded-lg max-w-md mx-auto mt-10 text-white">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <CheckoutForm />
      </div>
    </Elements>
  );
}

export default Checkout