import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';

const ProductForm = ({ product }) => {
  console.log(product);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      varianteTitle: variant.node.title,
      variantePrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};

  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  //   console.log('defaultValues', defaultValues);
  //   console.log('variant options', allVariantOptions);

  function setOptions(name, value) {
    setSelectedOptions((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex-col flex w-full">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-6">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))
      }
      <button className="bg-black rounded-lg text-white px-2 py-3 "></button>
    </div>
  );
};

export default ProductForm;
