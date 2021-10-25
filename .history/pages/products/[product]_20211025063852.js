import ProductPageContent from '../../components/ProductPageContent';
import { getAllProducts, getProduct } from '../../lib/shopify';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className=:>
      <ProductPageContent product={product} />
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
  return {
    props: {
      product,
    },
  };
}
