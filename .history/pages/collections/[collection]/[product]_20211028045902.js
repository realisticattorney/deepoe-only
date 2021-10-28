import ProductPageContent from '../../../components/ProductPageContent';
import { getAllProducts, getProduct, getProductsInCollection } from '../../../lib/shopify';
import { useRouter } from 'next/router';
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="min-h-screen py-12">
      <ProductPageContent product={product} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
   const router = useRouter();
   
  const products = await getProductsInCollection();
  const paths = products.map((product) => ({
    params: { product: String(product.node.handle) },
  }));
  console.log;
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.collection.product);
  return {
    props: {
      product,
    },
  };
}
