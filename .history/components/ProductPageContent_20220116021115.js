import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
import atob from 'atob';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
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
    if (parentReviewState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [parentReviewState]);

  const [show, setShow] = useState(false);

  let itemsSpecs;
  const { description } = product;
  let [intro, details] = description.split('^^^DETAILS');
  [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
  const itemsSpecs2 = itemsSpecs.split('**');

  return (
    <div
      className={`sm:max-w-2xl mx-auto lg:max-w-xxl lg:grid lg:grid-cols-2 xxl:px-50`}
    >
      <div className="px-3.5  pb-0  z-0 lg:col-span-1">
        <a
          href={`https://deepoe.com/collections/${collection}/`}
          rel="noreferrer"
        >
          <p className="text-left pl-3 text-lg font-extralight font-mono lg:mb-8 lg:mt-2">
            {'<'} back to{' '}
            {collection === 'frontpage' ? 'all products' : collection}
          </p>
        </a>
      </div>

      <div
        className={`flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 lg:w-full lg:px-6 lg:max-w-xxl px-2 mx-auto lg:col-span-2 `}
      >
        <div className="w-full max-w-md  overflow-hidden"></div>
        <ProductForm product={product} collection={collection} />
      </div>
      <div className={`${disable ? 'my-10' : ''}`}></div>
      <div className="flex flex-col w-full lg:col-span-2 font-mono">
        <div className="px-6 my-6 mt-10 lg:mt-12 lg:px-16 ">
          <div className="w-full">
            <div className="relative h-110 lg:h-66 xxl:h-66">
              <Image
                src="/peopleFood.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={70}
              />
            </div>
          </div>
        </div>
        <div className="font-sans italic font-medium mx-auto text-3xl mb-5 mt-1 tracking-tighter px-6 lg:text-4xl lg:mt-4 lg:mb-9">
          what we offer...
        </div>
        <div className="lg:flex lg:items-center lg:justify-around lg:px-40">
          <div className="lg:flex-col">
            <div className="text-center">
              <Image
                src="/heart.svg"
                height={48}
                width={48}
                className="svg-stroke"
              />
            </div>
            <h2 className="text-center w-60 mx-auto font-light leading-6  font-mono text-md">
              Vibrant and sustainably-considered, pieces for the home.
            </h2>
          </div>
          <div className="lg:flex-col">
            <div className="text-center mt-5">
              <Image
                src="/radix-icons_mix.svg"
                height={48}
                width={48}
                className="svg-stroke"
              />
            </div>
            <h2 className="text-center w-60 mx-auto font-light leading-6 mb-5 font-mono text-md">
              Functional designs to mix and match.
            </h2>
          </div>
          <div className="lg:flex-col">
            <div className="text-center">
              <Image
                src="/bi_box-seam.svg"
                height={48}
                width={48}
                className="svg-stroke"
              />
            </div>

            <h2 className="text-center w-60 mx-auto font-light leading-6  font-mono text-md">
              Considered materials, low-waste packaging.
            </h2>
          </div>
        </div>
        <div className="pt-2.5 self-center">
          <Link href={`/deepoe/sustainability`}>
            <button
              type="submit"
              className=" text-sm  font-extralight text-center mt-5 mb-7 w-40 underline font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:mb-12 lg:mt-10"
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
