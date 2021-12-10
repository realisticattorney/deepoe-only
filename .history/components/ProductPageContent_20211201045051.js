import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
import atob from 'atob';
import { useCallback, useEffect, useRef, useState } from 'react';
import YotpoReviews from './YotpoReviews';
import ReviewsPopup from './ReviewsPopup';
const ProductPageContent = ({ collection, product }) => {
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];

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

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  let itemsSpecs;
  const { description } = product;
  let [intro, details] = description.split('^^^DETAILS');
  [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
  const itemsSpecs2 = itemsSpecs.split('**');

  return (
    <div className={`${parentReviewState ? 'overflow-y-hidden' : ''}`}>
      <div className="px-3.5 pb-0  z-0">
        <a
          href={`https://deepoe-only.vercel.app/collections/${collection}/`}
          rel="noreferrer"
        >
          {/* <Link href={`/collections/${collection}/`}> */}
          <a className="text-left pl-3 text-lg font-extralight font-mono">
            {'<'} back to{' '}
            {collection === 'frontpage' ? 'all products' : collection}
          </a>
          {/* </Link> */}
        </a>
      </div>

      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="w-full max-w-md  overflow-hidden"></div>
        <ProductForm product={product} collection={collection} />

        <div className="font-mono text-sm font-extralight">
          <p>{intro}</p>
        </div>
        <div className="flex flex-col w-full border-t pt-2 border-deepoe-chocolate">
          <button className="group focus:outline-none" onClick={handleShow}>
            <div className="flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium">
              <span className="truncate font-mono font-extralight text-lg2">
                Details
              </span>

              <p className="font-mono font-thin text-3xl group-focus:hidden">
                +
              </p>

              <p className="font-mono font-thin text-3xl  -mt-5  hidden group-focus:flex">
                _
              </p>
            </div>
            <div className="max-h-0 overflow-hidden duration-300  group-focus:py-2 font-mono  group-focus:max-h-72  text-sm text-left font-extralight  border-b border-deepoe_default-black">
              <p className="mb-1">{details}</p>
            </div>
          </button>
          <button className="group focus:outline-none">
            <div className="flex justify-between py-2 text-lg font-extralight text-left items-center text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium">
              <span className="truncate font-mono font-extralight text-lg2">
                Item Specifications
              </span>
              <p className="font-mono font-thin text-3xl group-focus:hidden">
                +
              </p>

              <p className="font-mono font-thin text-3xl  -mt-5  hidden group-focus:flex">
                _
              </p>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 text-sm  group-focus:pb-2 font-mono group-focus:max-h-56  text-left font-extralight border-b border-deepoe_default-black">
              <ul className="list-disc list-outside font-mono font-extralight ">
                {itemsSpecs2.map((item, index) => (
                  <li key={index} className="">
                    <span className="px-1 text-base font-black">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <div className="">
            {/* <Link href={`/reviews/${product.handle}`}> */}
            {/* <a> */}
            <div className="flex justify-between pt-2 -mb-2 font-extralight text-left text-lg text-deepoe_default-black items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium">
              <span className="font-mono font-extralight text-lg2">
                Reviews
              </span>
            </div>

            <div
              id="reviews-productpage "
              className=" overflow-hidden focus:outline-none active:outline-none text-center max-h-96"
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
                href={`https://deepoe-only.vercel.app/reviews/${product.handle}`}
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
      <div className={`${disable ? 'my-10' : ''}`}></div>
      <div className="flex flex-col w-full  font-mono">
        {/* <div className="relative h-96">
          <Image src="/brunch.jpg" layout="fill" objectFit="cover" />
        </div> */}

        <div className="px-6 my-6 mt-10">
          <div className="w-full  overflow-hidden">
            <div className="relative h-110">
              <Image
                src="/peopleFood.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
        <div className="font-sans italic font-medium mx-auto text-3xl mb-5 mt-1 tracking-tighter px-6">
          what we offer...
        </div>
        <h2 className="text-center w-60 mx-auto font-light leading-6  font-mono text-md">
          Vibrant and sustainably-considered, pieces for the home.
        </h2>

        <h2 className="text-center w-60 mx-auto font-light leading-6 my-4 font-mono text-md">
          Functional designs to mix and match.
        </h2>

        <h2 className="text-center w-60 mx-auto font-light leading-6  font-mono text-md">
          Considered materials, low-waste packaging.
        </h2>

        <div className="pt-2.5 self-center">
          <Link href={`/deepoe/sustainability`}>
            <button
              type="submit"
              className=" text-sm  font-extralight text-center mt-5 mb-7 w-40 underline font-mono focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPageContent;
