import React from 'react';

const Product = () => {
  return <div></div>;
};

export default Product;

export async function getStaticPaths() {

   const response = await getAllProducts();
   return {
    paths: {},
  };
}
