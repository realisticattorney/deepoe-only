import ProductPageContent from '../../../components/ProductPageContent';
import { getAllProducts, getProduct, getProductFromCollections } from '../../../lib/shopify';

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
  const products = await getProductFromCollections();
  const paths = products.map((product) => 
  a.products.map(b => b.
  
  ({
    params: { collection: String(product.node.handle),
      product: String(product.node.products.edges.node.handle) },
  }));
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);
  console.log(params)
  return {
    props: {
      product,
    },
  };
}
