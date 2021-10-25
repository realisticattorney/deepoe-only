import { useState, useContext } from 'react';

const ProductForm = ({ product }) => {
  console.log(product);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map((option) => {
      allOptions[option.name] = option.value;
    });
    return {
      id: variant.node.id,
      title: variant.node.product.title,
      handle: variant.node.product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      varianteTitle: variant.node.title,
      variantePrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {}
  

  return <div></div>;
};

export default ProductForm;
