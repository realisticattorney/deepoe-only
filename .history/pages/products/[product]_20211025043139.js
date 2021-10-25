import React from 'react';
import { getAllProducts } from '../../lib/shopify';

const Product = ({ response }) => {
  console.log(response);
  return <div>Yep</div>;
};

export default Product;

export async function getStaticPaths() {
   
  const response = await getAllProducts();
  return {
    paths: [{ params: { response } }],
    fallback: true,
  };
}
