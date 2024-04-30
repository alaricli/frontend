import axios from "axios";
import { useState } from "react";

const AddToCartButton = ({ productId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    setLoading(true);
    setError(null);
    let cartId = localStorage.getItem('cartId');

    if (!cartId) {
      try {
        const cartRes = await axios.post('http://localhost:8000/cart/createCart');
        cartId = cartRes.data.cartId;
        localStorage.setItem('cartId', cartId);
        console.log('cartId:', cartId)
      } catch (error) {
        console.error('Failed to create cart', error);
        setError('Failed to create cart');
        setLoading(false);
        return;
      }
    } else {
      console.log("using existing cart:", cartId);
    }

    try {
      await axios.post(`http://localhost:8000/cart/${cartId}/add`, { productId, quantity });
      console.log(`${productId} added to cart`);
    } catch (error) {
      console.error("Failed to add to cart", error);
      setError('Failed to add to cart');
    } 
    setLoading(false);
  };

  return (
    <div>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="rounded-lg text-sm p-2.5 text-black"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
          <option key={qty} value={qty}>
            {qty}
          </option>
        ))}
      </select>
      <button
        onClick={addToCart}
        disabled={loading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default AddToCartButton;
