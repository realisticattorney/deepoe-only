import ReviewsPageContent from '../../components/ReviewsPageContent';
import { getAllProducts, getProduct } from '../../lib/shopify';
import { useEffect } from 'react';
import ProductPageContent from '../../components/ProductPageContent';
import {
  getAllProducts,
  getProduct,
  getProductFromCollections,
} from '../../lib/shopify';

const ProductReview = ({ product }) => {
  console.log('reviews,', product);
  return (
    <div className="min-h-screen ">
      <ReviewsPageContent product={product} />
    </div>
  );
};

export default ProductReview;
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
  console.log(params);

  const products = await getProductFromCollections();
  const getAllCombinations = (collections) => {
    const combinations = [];
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const products = collection.node.products.edges;
      for (let j = 0; j < products.length; j++) {
        const product = products[j];
        if (product.node.handle === params.product) {
          combinations.push(collection.node.handle);
        }
      }
    }
    return combinations;
  };
  const collection = getAllCombinations(products);
  console.log(
    'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
    collection
  );
  return {
    props: {
      product,
      collection,
    },
  };
}