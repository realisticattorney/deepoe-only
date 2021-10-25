import React from 'react';
import { getAllProducts } from '../../lib/shopify';

const Product = ({ product }) => {
  console.log(product);
  return <div>Yep</div>;
};

export default Product;

export async function getStaticPaths() {
  const response = await getAllProducts();
  return {
    paths: [{ params: { product: response } }],
    fallback: true,
  };
}
