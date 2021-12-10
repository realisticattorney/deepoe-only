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

  const stageCanvasRef = useRef(null);
  useEffect(() => {
    // The 'current' property contains info of the reference:
    consoselo.log('stageCanvasRef', stageCanvasRef);
    // align, title, ... , width, height, etc.
    // if (stageCanvasRef.current) {
      // let height = stageCanvasRef.current;
      // let width = stageCanvasRef.current.offsetWidth;
      // console.log('height,', height);
      // console.log('width,', width);
    // }
  }, [stageCanvasRef]);

  return (
    <div>
      <div className="px-3.5 pb-0  z-0">
        <Link href={`/collections/${collection}/${product.handle}`}>
          <a className="text-left pl-3 text-lg font-extralight font-mono">
            {'<'} back to{' '}
            {collection === 'frontpage' ? 'all products' : collection}
          </a>
        </Link>
      </div>

      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="flex flex-col w-full  pt-2 ">
          {/* <button className="group focus:outline-none" onClick={handleShow}>
            <div className="flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
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
            <div className="max-h-0 overflow-hidden duration-300   group-focus:py-2 font-public-sans-normal  group-focus:max-h-56  text-sm text-left font-extralight  border-b border-gray-700">
              {product.description}
            </div>
          </button> */}

          <button className="group focus:outline-none">
            <a
              href={`https://deepoe-only.vercel.app/reviews/${product.handle}`}
            >
              <div className="flex flex-col justify-between items-baseline py-2 font-extralight text-left text-lg text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75   group-focus:font-medium">
                <span className="font-mono font-extralight text-lg2">
                  Reviews For
                </span>
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
            </a>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full py-5 font-public-sans-normal">
        <div className="pt-2.5 self-center">
          <Link href={`/deepoe/sustainability`}>
            <button
              type="submit"
              className="inline-flex justify-center py-1 px-10 mt-2 border border-transparent font-sans shadow text-xl font-light text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPageContent;
