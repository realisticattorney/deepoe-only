import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';

const ProductForm = ({ product }) => {
  
   
   const { addToCart } = useContext(CartContext);

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

  const defaultValues = {}; //saving here the default values of the form

  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues); //this will re-render the component every time the user changes the selected option

  //   console.log('defaultValues', defaultValues);
  //   console.log('variant options', allVariantOptions);

  function setOptions(name, value) { //this function will be called every time the user changes the selected option (onChange, in the ProductOptions component) and will update the selectedOptions state
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
          setOptions={setOptions} //just passing the function to the ProductOptions component to be called when the user changes the selected option
        />
      ))
      }
      <button className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800">Add to cart</button>
    </div>
  );
};

export default ProductForm;
