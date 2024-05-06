import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      if (typeof window !== 'undefined') {
        const cartId = localStorage.getItem('cartId');

        if (cartId) {
          try {
            const cart = await axios.get(
              `http://localhost:8000/cart/${cartId}/get-cart`
            );
            setCartItems(cart.data.cartItems);
          } catch (itemsError) {
            console.error('Failed to fetch cartitems', itemsError);
            setCartTotal([]);
          }
          
          try {
            const cartTotalResponse = await axios.get(
              `http://localhost:8000/cart/${cartId}/getTotalQuantity`
            );
            setCartTotal(cartTotalResponse.data);
          } catch (cartTotalError) {
            console.error('Failed to get cart total', cartTotalError);
            setCartTotal(0);
          }
        }
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <div className="text-xl">Cart - Total Items: {cartTotal}</div>
      {/* <div>
        {cartItems.map((item) => (

        ))}
      </div> */}
      {cartItems.length > 0 ? (
        <div>
          Render cart items here
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <Link href={'/Checkout'} className="text-white">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
