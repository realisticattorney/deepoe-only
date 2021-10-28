import ProductPageContent from '../../../components/ProductPageContent';
import { getAllProducts, getProduct, getProductsInCollection } from '../../../lib/shopify';

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
   const collections = await getCollections();
   console.log(collections);
   const paths = collections.map((collection) => ({
     params: { collection: String(collection.node.handle) },
   }));
 
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
  const product = await getProduct(params.product);
  return {
    props: {
      product,
    },
  };
}
