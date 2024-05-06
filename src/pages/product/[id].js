import AddToCartButton from '@/components/addToCartBtn';
import axios from 'axios';
import { useState } from 'react';

const ProductPage = ({ product }) => {
  // State to hold the selected size option
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions[0]);

  // Function to handle size selection event
  const handleSizeSelection = (event) => {
    setSelectedSize(parseInt(event.target.value));
  };

  // Function to get the associated price for size selected
  const getPriceForSizeSelected = () => { 
    return product.prices[product.sizeOptions.indexOf(selectedSize)];
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg max-w-md mx-auto mt-10 text-white">
      <h1 className='text-3xl mb-4'>{product.name}</h1>
      <img src={product.picUrl} alt={product.name} />
      <p>
        Size:
      </p> 
      <select
          value={selectedSize}
          onChange={handleSizeSelection}
          className="rounded-lg text-sm p-2.5 text-black"
        >
          {product.sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}mL
            </option>
          ))}
      </select>
      <p>Price: ${getPriceForSizeSelected()}</p>
      <p>{product.description}</p>
      <AddToCartButton productId={product.id} size={selectedSize} price={getPriceForSizeSelected()} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const res = await axios.get(`http://localhost:8000/product/get/${id}`);
    const product = res.data;
    return { props: { product } };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return { props: { product: {} } };
  }
}

export default ProductPage;
