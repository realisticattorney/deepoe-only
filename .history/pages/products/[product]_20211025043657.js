import { getAllProducts } from '../../lib/shopify';

const Product = ({ paths }) => {
  console.log(paths);
  return <div>Yep</div>;
};

export default Product;

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map(({node}) => ({
    params: { node.handle },
  }));

  return {
    paths,
    fallback: false,
  };
}
