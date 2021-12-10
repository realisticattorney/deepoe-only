import Image from 'next/image';
import ProductForm from './ProductForm';
// import styles from './ReviewsPageContent.module.css';
import Link from 'next/link';
import atob from 'atob';
import { useEffect, useRef, useState } from 'react';
import YotpoReviews from './YotpoReviews';
const ReviewsPageContent = ({ collection, product }) => {
  console.log('product_id', product);
  console.log('collection_id', collection);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);

  const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   show ? setShow(false) : setShow(true);
  // };

  // const stageCanvasRef = useRef(null);
  // useEffect(() => {
  //   // The 'current' property contains info of the reference:
  //   console.log('stageCanvasRef', stageCanvasRef);
  //   // align, title, ... , width, height, etc.
  //   // if (stageCanvasRef.current) {
  //     // let height = stageCanvasRef.current;
  //     // let width = stageCanvasRef.current.offsetWidth;
  //     // console.log('height,', height);
  //     // console.log('width,', width);
  //   // }
  // }, [stageCanvasRef]);

  return (
    <div>
      <div className="px-3.5 pb-0 z-0">
        {/* <a
          href={`https://deepoe-only.vercel.app/collections/${collection}/${product.handle}`}
          rel="noreferrer"
        > */}
        <Link href={`/collections/${collection}/${product.handle}`}>
          <p className="text-left pl-3 text-lg font-extralight font-mono">
            {'<'} back to {product.title.slice(0, 27)}
            {product.title.length > 28 ? ' …' : ''}
          </p>
        </Link>
        {/* </a> */}
      </div>

      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto">
        <div className="flex flex-col w-full   ">
          <div className="flex flex-col justify-between items-baseline py-2 font-extralight text-left text-lg text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75   group-focus:font-medium">
            <span className="font-mono font-light text-lg2">Reviews For</span>
            <span className="font-mono font-extralight text-lg2 -mt-1.3">
              {product.title}
            </span>
            <div id="reviews-complete">
              <div
                className="yotpo bottomLine"
                data-yotpo-product-id={`${atobId}`}
              ></div>
            </div>
          </div>
          <div
            className={`yotpo yotpo-main-widget`}
            data-product-id={`${atobId}`}
            data-currency="USD"
            data-price={`${product.variants.edges[0].node.priceV2.amount}`}
            data-name={`${product.handle}`}
            data-url={`https://deepoe.com/products/${product.handle}`}
            // data-url={`${atobURL}`}
            data-image-url={`${product.images.edges[0].node.originalSrc}`}
          ></div>
        </div>
      </div>
        <div className="mb-10"></div>
      {/* <div className="flex flex-col w-full py-5 font-public-sans-normal"> */}
      {/* <div className="pt-2.5 self-center">
          <Link href={`/deepoe/sustainability`}>
            <button
              type="submit"
              className="inline-flex justify-center py-1 px-10 mt-2 border border-transparent font-sans shadow text-xl font-light text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Learn More
            </button>
          </Link>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default ReviewsPageContent;
