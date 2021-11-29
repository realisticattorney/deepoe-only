import ProductPageContent from '../../components/ProductPageContent';
import { getAllProducts, getProduct } from '../../lib/shopify';
// import { useRouter } from 'next/router';

const Product = ({ collection, product }) => {
  console.log(product);
  return (
    <div className="min-h-screen ">
      <ProductPageContent product={product} collection={collection} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  // const products = await getAllProducts();
  // const paths = products.map((product) => ({
  //   params: { product: String(product.node.handle) },
  // }));
  
    const products = await getProductFromCollections();
  const getAllCombinations = (collections) => {
    const combinations = [];
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const products = collection.node.products.edges;
      for (let j = 0; j < products.length; j++) {
        const product = products[j];
        combinations.push({
          params: {
            collection: collection.node.handle,
            product: product.node.handle,
          },
        });
      }
    }
    return combinations;
  };
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
      product,
      collection: params.collection,
    },
  };
}
