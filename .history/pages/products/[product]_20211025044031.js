import { getAllProducts } from '../../lib/shopify';

const Product = () => {
//   console.log(paths);
  return <div>Yep</div>;
};

export default Product;

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { handle: String(product.node.handle) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
   const product = await getAllProducts(params.handle);
   
   return {
      props: {
         product: product.node,
      },
   };
   }