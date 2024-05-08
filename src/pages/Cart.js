import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.00);

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
            setCartTotalQuantity([]);
          }
          
          try {
            const cartTotalQuantityRes = await axios.get(
              `http://localhost:8000/cart/${cartId}/getTotalQuantity`
            );
            setCartTotalQuantity(cartTotalQuantityRes.data);
          } catch (cartTotalQuantityError) {
            console.error('Failed to get cart total', cartTotalQuantityError);
            setCartTotalQuantity(0);
          }

          try {
            const cartTotalRes = await axios.get(
              `http://localhost:8000/cart/${cartId}/get-cart-total`
            );
            setCartTotal(cartTotalRes.data);
          } catch (cartTotalError) {
            console.error('Failed to get cart total: ', cartTotalError);
            setCartTotal(0);
          }
        }
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <div className="text-xl">Cart - Total Items: {cartTotalQuantity}</div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <h3>Product: {item.productName}</h3>
              <p>Size: {item.size}</p>
              {/* TODO: quantity button can be updated in cart/checkout */}
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <div>
            Cart Total: ${cartTotal}
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      {/* TODO: send cart data into checkout */}
      <Link href={'/Checkout'} className="text-white">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
