import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure, Menu } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import atob from 'atob';
export default function ReviewsPopup({
  parentReviewState,
  wrapperSetParentReviewState,
  product,
  collection,
}) {
  console.log('product_id', product);
  console.log('collection_id', collection);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto">
          <div className="flex flex-col w-full  ">
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
        <div>
          <div className="px-3.5 pb-0 z-0">
            <button
              type="button"
              className="text-indigo-600 font-medium hover:text-indigo-500"
              onClick={() => wrapperSetParentReviewState(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
