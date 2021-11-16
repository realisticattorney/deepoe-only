import ProductPageContent from '../../../components/ProductPageContent';
import { getProduct, getProductFromCollections } from '../../../lib/shopify';

const Product = ({ collection, product }) => {
  console.log("proooooodcut",product);
  return (
    <div className={``}>
    <div class={``}
data-product-id={``}
data-price={``}
data-currency={``}
data-name={``}
data-url={`The url of your `}
data-image-url={``}>
</div>
      <ProductPageContent product={product} collection={collection} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const products = await getProductFromCollections();
  const getAllCombinations = (collections) => {
   const combinations = [];
   for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const products = collection.node.products.edges;
      for (let j = 0; j < products.length; j++) {
         const product = products[j];
         combinations.push({ params: {
         collection: collection.node.handle,
         product: product.node.handle,
         }});
      }
   }
   return combinations;
   }
   const paths = getAllCombinations(products);

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
      collection: params.collection,
      product,
    },
  };
}