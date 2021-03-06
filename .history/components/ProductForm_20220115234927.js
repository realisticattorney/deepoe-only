import { useState, useContext, useRef, useCallback, useEffect } from 'react';
import { formatter } from '../utils/helpers';
import ProductOptions from './ProductOptions';
import { CartContext } from '../context/shopContext';
import ProductCarousel from './ProductCarousel';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { ExclamationCircleIcon, TruckIcon } from '@heroicons/react/outline';
import atob from 'atob';
import ReviewsPopup from './ReviewsPopup';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  // '&:not(:last-child)': {
  backgroundColor: '#F5F3EE',
  borderBottom: '1px solid rgba(0, 0, 0, 1)',
  // paddingBottom: "1px",
  // },
  '&:before': {
    display: 'none',
  },
}));

const Icon = styled((props) => (
  <div {...props}>
    <div className="n">
      <RemoveIcon className="h-5 w-5" />
    </div>
    <div className="y">
      <AddIcon className="h-5 w-5" />
    </div>
  </div>
))`
  & > .y {
    display: block;
  }
  & > .n {
    display: none;
  }
  .Mui-expanded & > .n {
    display: block;
  }
  .Mui-expanded & > .y {
    display: none;
  }
`;

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Icon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: '0px',
  paddingRight: '0px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    // transform: 'rotate(90deg)',
    marginRight: '0px',
    paddingRight: '0px',
  },

  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
}));

const ProductForm = ({ product, collection }) => {
  const stageCanvasRef = useRef(null);
  const [disable, setDisable] = useState(false);
  const [parentReviewState, setParentReviewState] = useState(false);

  const wrapperSetParentReviewState = useCallback(
    (val) => {
      setParentReviewState(val);
    },
    [setParentReviewState]
  );

  useEffect(() => {
    if (parentReviewState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [parentReviewState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!', stageCanvasRef);
      let inner = stageCanvasRef.current.innerText
        ? stageCanvasRef.current.innerText
        : 'empty';
      console.log(inner);
      let lalala = inner.indexOf('Currently, there');
      if (lalala > -1) {
        setDisable(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  let itemsSpecs;
  const { description } = product;
  let[variantsHex, restOfShipping] = description.split('$$$$');
  let [shipping, restOfDescription] = restOfShipping.split('%%%');
  let [intro, details] = restOfDescription.split('^^^DETAILS');
  [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
  const itemsSpecs2 = itemsSpecs.split('**');

  const variantsHexArray = variantsHex.split('$$')
  const variantsHexArray2 = variantsHexArray.map(variant => {
    let [variantColor, hex] = variant.split('#');
    return {
      

  console.log("varianteHexArray",variantsHexArray);

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
  console.log('allVariantOptions', allVariantOptions);

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
    <div className="flex-col flex w-full pt-1 font-public-sans-normal lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-10 ">
      <div className="relative h-111 w-full lg:col-start-1 lg:col-end-1">
        <ProductCarousel
          product={product}
          selectedVariant={selectedVariant}
          key={selectedVariant.id}
        />
      </div>
      <div className="lg:col-start-2 lg:col-end-2 lg:mt-8">
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
                {formatter.format(
                  product.variants.edges[0].node.priceV2.amount
                )}
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
                  ? 'text-deepoe_default-black font-semibold'
                  : ''
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
              <TruckIcon className="h-5 flex pr-1" /> {shipping}
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
            className={`  px-2 pt-2 pb-1.5 mt-1 mb-3 text-2xl font-sans self-center justify-self-center items-center  w-full active:scale-95 ${
              selectedVariant.availableForSale
                ? 'disabled bg-deepoe-chocolate text-white'
                : 'text-deepoe-chocolate border border-deepoe-chocolate bg-white font-medium focus:outline-none'
            }`}
            disabled={selectedVariant.availableForSale === false ? true : false}
          >
            {selectedVariant.availableForSale === false
              ? 'Out of Stock'
              : 'Add to Cart'}
          </button>
        </div>

        <div className="font-mono text-sm font-extralight mb-4">
          <p>{intro}</p>
        </div>
        <div className="flex flex-col w-full border-t border-deepoe-chocolate lg:col-end-2 lg:col-start-2">
          <Accordion className="p-0 m-0 shadow-none    border-b border-deepoe_default-black ">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="flex p-0   justify-between text-lg font-extralight text-left text-deepoe_default-black"
            >
              <p className="font-mono font-extralight text-lg2 py-0 my-0 ">
                Details
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="overflow-hidden duration-300  text-sm  font-mono  text-left font-extralight  ">
                <p className="mb-4">{details}</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              margin: '0px',
              pardding: '0px',
              '& .MuiAccordionDetails-root': {
                paddingTop: '10px',
                paddingBottom: '4px',
              },

              '& .MuiAccordionSummary-content': {
                paddingBottom: '0px',
                marginTop: '0px',
                marginBottom: '0px',
              },

              '& .MuiButtonBase-root': {
                minHeight: 'auto',
                alignItems: 'center',
              },
              '& .MuiSvgIcon-root': {
                paddingTop: '0px',
                paddingBottom: '0px',
                marginTop: '0px',
              },
              '& .MuiPaper-root & .MuiAccordion-root & .Mui-expanded': {
                marginTop: '0px',
              },
            }}
            className="py-3 m-0 shadow-none border-b border-deepoe_default-black "
            id="accordion"
          >
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="flex justify-between text-lg font-extralight text-left text-deepoe_default-black"
            >
              <p className="font-mono font-extralight text-lg2 py-0 my-0 ">
                Items Specifications
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="m-0 overflow-hidden  text-sm   font-mono  text-left font-extralight border-deepoe_default-black">
                <ul className="list-disc list-outside font-mono font-extralight ">
                  {itemsSpecs2.map((item, index) => (
                    <li key={index} className="">
                      <span className="px-1 text-base font-black">???</span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
          <div className="">
            {/* <Link href={`/reviews/${product.handle}`}> */}
            {/* <a> */}
            <div className="flex justify-between pt-2 -mb-2 font-extralight text-left text-lg text-deepoe_default-black items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium">
              <span className="font-mono font-extralight text-lg2">
                Reviews
              </span>
            </div>

            <div
              id="reviews-productpage"
              className=" overflow-hidden focus:outline-none active:outline-none text-center max-h-140 "
            >
              <div
                ref={stageCanvasRef}
                className="yotpo yotpo-main-widget "
                data-product-id={`${atobId}`}
                data-currency="USD"
                data-price={`${product.variants.edges[0].node.priceV2.amount}`}
                data-name={`${product.handle}`}
                data-url={`https://deepoe.com/products/${product.handle}`}
                data-image-url={`${product.images.edges[0].node.originalSrc}`}
              ></div>
            </div>
            <div
              className={`pt-2.5 text-center w-full self-center border-0 border-deepoe_default-black ${
                disable ? 'hidden' : 'inline-block'
              } focus:outline-none active:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              {/* <a
                href={`https://deepoe.com/reviews/${product.handle}`}
                rel="noreferrer"
              > */}
              {/* <Link href={`/reviews/${product.handle}`}> */}
              {/* <button
                  type="submit"
                  disabled={disable ? true : false}
                  onClick={() => wrapperSetParentReviewState(!parentReviewState)}
                
                > */}
              <ReviewsPopup
                parentReviewState={parentReviewState}
                product={product}
                disable={disable}
                collection={collection}
                wrapperSetParentReviewState={wrapperSetParentReviewState}
                // cancelButtonRef={cancelButtonRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
