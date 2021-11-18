import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';
import ProductCarousel from './ProductCarousel';

const ProductForm = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    // console.log('laldala', variant)
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantComparedAtPrice: variant.node.compareAtPriceV2?.amount || '',
      variantQuantity: 1,
      currentlyNotInStock: variant.node.currentlyNotInStock,
      availableForSale: variant.node.availableForSale,
    };
  });
  // console.log(allVariantOptions);
  const defaultValues = {}; //saving here the default values of the form

  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues); //this will re-render the component every time the user changes the selected option

  //   console.log('defaultValues', defaultValues);
  // console.log('variant options', selectedVariant);

  function setOptions(name, value) {
    //this function will be called every time the user changes the selected option (onChange, in the ProductOptions component) and will update the selectedOptions state
    setSelectedOptions((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="flex-col flex w-full pt-1 font-public-sans-normal ">
      <div className="relative h-80 w-full">
        <ProductCarousel product={product} selectedVariant={selectedVariant} key={selectedVariant.id} />
      </div>

      <div>
        <h2 className="text-2xl font-mono font-extralight text-gray-800 -mt-5">{product.title}</h2>
        <div className="pb-2 pt-2.5 items-center flex justify-between">
          <div className="flex items-start">
            <span className="text-lg  text-gray-600">
              {formatter.format(product.variants.edges[0].node.priceV2.amount)}
            </span>
            {product.variants.edges[0].node.compareAtPriceV2 ? (
              <span className="text-lg font-mono font-thin pl-2 line-through">
                {formatter.format(
                  product.variants.edges[0].node.compareAtPriceV2?.amount
                )}
              </span>
            ) : (
              <></>
            )}
          </div>
          <h3
            className={`text-right text-sm font-normal text-gray-600 ${
              selectedVariant.availableForSale === false
                ? 'text-red-800'
                : 'text-gray-700'
            }`}
          >
            {selectedVariant.availableForSale === false
              ? 'Currently out of stock'
              : 'In Stock'}
          </h3>
        </div>
        {product.options.map(({ name, values }) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions} //just passing the function to the ProductOptions component to be called when the user changes the selected option
          />
        ))}

        <button
          onClick={() => {
            addToCart(selectedVariant);
          }}
          className="bg-deepoe-chocolate text-white px-2 py-2.5 my-1 text-2xl  w-full hover:bg-gray-800 font-sans"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
