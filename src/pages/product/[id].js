import AddToCartButton from '@/components/addToCartBtn';
import axios from 'axios';

const ProductPage = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.picUrl} alt={product.name} />
      <p>Price: ${product.price}</p>
      {/* <p>Description: {product.description}</p> */}
      <AddToCartButton productId={product.id} />
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
