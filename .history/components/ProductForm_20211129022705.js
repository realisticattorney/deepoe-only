import { useState, useContext } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';
import ProductCarousel from './ProductCarousel';
import { ExclamationCircleIcon, TruckIcon } from '@heroicons/react/outline';
import atob from 'atob';

const ProductForm = ({ product, collection }) => {
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

  console.log('product_id', product);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobURL', atobURL);
  console.log('atobId', atobId);

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
      <div className="relative h-111 w-full">
        <ProductCarousel
          product={product}
          selectedVariant={selectedVariant}
          key={selectedVariant.id}
        />
      </div>

      <h2 className="text-2xl font-mono font-extralight -mt-5 mb-1">
        {product.title}
      </h2>

      <div
        className="yotpo bottomLine"
        data-yotpo-product-id={`${atobId}`}
      ></div>
      <div>
        <div className="pb-3.5 pt-2 items-center flex justify-between">
          <div className="flex items-start">
            <span className="text-lg font-extralight">
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
              : ''}
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
        <div className="text-sm font-light mb-3 mt-1.5 space-y-1.5">
          <p className="flex items-center text-sm">
            <TruckIcon className="h-5 flex pr-1" /> Usually ships in 1-2 weeks
          </p>
          {product.variants.edges[0].node.compareAtPriceV2?.amount && (
            <p className="flex items-center text-xs">
              <ExclamationCircleIcon className="h-4 flex pr-1" />
              Final Sale! No Returns
            </p>
          )}
        </div>
        <button
          onClick={() => {
            addToCart(selectedVariant);
          }}
          className={`bg-deepoe-chocolate text-white px-2 py-2 mt-1 mb-3 text-2xl font-sans self-center justify-self-center items-center  w-full active:scale-95 ${
            selectedVariant.availableForSale ? 'disabled' : ''
          }`} //disabled if the selected variant is not available for sale (out of stock)

          disabled={selectedVariant.availableForSale === false
              ? false : true}
          
          
        >
          {selectedVariant.availableForSale === false ? }
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
