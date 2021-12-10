import ReviewsPageContent from '../../components/ReviewsPageContent';
import { getAllProducts, getProduct } from '../../lib/shopify';
import '../../styles/globals.css';
const Product = ({ product }) => {
  console.log('reviews,', product);
  return (
    <div className="min-h-screen ">
      <ReviewsPageContent product={product} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { product: String(product.node.handle) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);
  console.log(params);
  return {
    props: {
      product,
    },
  };
}
