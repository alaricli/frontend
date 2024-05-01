import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

function Cart() {
  const [ cartTotal, setCartTotal ] = useState(0);

  useEffect(() => {
    const fetchCartQuantity = async () => {
      if (typeof window !== 'undefined') {
        let cartId = localStorage.getItem('cartId');
        
        if (cartId) {
          try {
            const response = await axios.get(
              `http://localhost:8000/cart/${cartId}/getTotalQuantity`
            );
            setCartTotal(response.data);
          } catch (error) {
            console.error('Failed to get cart total', error);
          }
        }
      }
    };

    fetchCartQuantity();
  }, []);

  return (
    <div>
      <div className="text-xl">Cart - Total Items: {cartTotal}</div>
      <Link href={'/Checkout'} className="text-white">
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
