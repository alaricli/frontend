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
              `http://localhost:8000/cart/${cartId}/get`
            );
            setCartItems(cart.data.items);
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
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <h3>Product: {item.productName}</h3>
              <p>Size: {item.size}</p>
              {/* TODO: scale it so you can change the quantity here */}
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <div>
            Grand Total: ${cartTotal}
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      {/* send cart data into checkout */}
      <Link href={'/Checkout'} className="text-white">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
