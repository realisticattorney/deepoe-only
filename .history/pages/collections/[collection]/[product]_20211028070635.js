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
  // iterate through each variantSection and create objects like {"type": "frame", "value": "black"}
  const getAllCombinations = (collections) => {
   const combinations = [];
   for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const products = collection.node.products.edges;
      for (let j = 0; j < products.length; j++) {
         const product = products[j];
         combinations.push({
         collection: collection.node.,
         product: product.node,
         });
      }
   }
   return combinations;
   }
   console.log(getAllCombinations(products));

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
