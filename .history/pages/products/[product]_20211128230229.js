import ProductPageContent from '../../components/ProductPageContent';
import { getAllProducts, getProduct, getProductFromCollections } from '../../lib/shopify';
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
  const products = await getAllProducts();
  //get the collection where the product is
  
 
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
  console.log(params)
  return {
    props: {
      product,
      collection: params.collection,
    },
  };
}
