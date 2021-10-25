import React from 'react';
import { getAllProducts } from '../../lib/shopify';

const Product = ({ response }) => {
  console.log(response);
  return <div>Yep</div>;
};

export default Product;

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map(({node}) => ({
    params: { productId: node.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
