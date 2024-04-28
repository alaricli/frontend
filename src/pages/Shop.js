import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const addToCart = async (productId) => {
  let cartId = localStorage.getItem('cartId');

  if (!cartId) {
    try {
      const cartRes = await axios.post('http://localhost:8000/cart/create');
      cartId = cartRes.data.cartId;
      localStorage.setItem('cartId', cartId);
    } catch (error) {
      console.error('Failed to create cart', error);
      return;
    }
  }

  try {
    await axios.post('http://localhost:8000/cart/${cartId}/add', { productId });
    console.log( ' ${ productId } added to cart');
  } catch (error) {
    console.error("Failed to add to cart", error);
  }
};

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:8000/product/get');
    const products = res.data;
    return { props: { products } };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { props: { products: [] } }; // Return empty products array as a fallback
  }
}

const Shop = ({ products }) => {
  return (
    <div>
      <div className="text-3xl text-center mt-4 mb-4">
        <h1>Shop</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-96 h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/product/${product.id}`} passHref>
              <img
                src={product.picUrl}
                alt={product.name}
                className="w-96 h-96 object-contain rounded-t-lg"
              />
            </Link>

            <div className="p-4">
              <Link href={`/product/${product.id}`} passHref>
                <h2 className="text-center text-lg font-bold dark:text-white">
                  {product.name}
                </h2>
              </Link>

              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">
                  {`$${product.price}`}
                </span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
