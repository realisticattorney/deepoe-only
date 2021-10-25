import React from 'react';

const Product = ({response}) => {
  return <div></div>;
};

export default Product;

export async function getStaticPaths() {
  const response = await getAllProducts();
  return {
    paths: { response },
  };
}
