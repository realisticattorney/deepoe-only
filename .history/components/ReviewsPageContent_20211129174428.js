import Image from 'next/image';
import ProductForm from './ProductForm';
import '../styles/globals.css';
import Link from 'next/link';
import atob from 'atob';
import { useState } from 'react';
import YotpoReviews from './YotpoReviews';
const ReviewsPageContent = ({ collection, product }) => {
  console.log('product_id', product);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);

  // const fetchReviews = () => {
  //   fetch(
  //     `https://api.yotpo.com/v1/widget/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/products/${atobId}/reviews.json`
  //   )
  //     .then((response) => response.json())
  //     .then(({ response }) => {
  //       console.log('responseeeee', response);
  //     });
  // };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div>
      <div className="px-3.5 pb-0  z-0">
        <Link href={`/collections/${collection}/`}>
          <a className="text-left pl-3 text-lg font-extralight font-mono">
            {'<'} back to{' '}
            {collection === 'frontpage' ? 'all products' : collection}
          </a>
        </Link>
      </div>

      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="flex flex-col w-full border-t pt-2 border-deepoe-chocolate">
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
              <div className="flex justify-between py-2 font-extralight text-left text-lg text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
                <span className="font-mono font-extralight text-lg2">
                  Reviews
                </span>
                <div
        className="yotpo bottomLine"
        data-yotpo-product-id={`${atobId}`}
      ></div>
              </div>
              <YotpoReviews product={product} atobId={atobId} />
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
