import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure, Popover } from '@headlessui/react';
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
    <Popover className="overflow-y-hidden">
      {({ parentReviewState }) => (
        <>
          <Popover.Button className="inline-flex justify-center py-1 px-10 mt-2 font-mono font-light border border-transparent shadow text-xl  text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2">
            More Reviews
          </Popover.Button>

          <Popover.Panel static className="absolute overflow-y-hidden">
            <Transition.Child
              as={Fragment}
              unmount={false}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="bg-deepoe-cream  z-50 fixed inset-y-0 top-0 left-0 pr-0 max-w-full flex overflow-y-auto">
              <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto">
        <div className="flex flex-col w-full  ">
                    <div className="flex flex-col justify-between items-baseline py-2 font-extralight text-left text-lg text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75   group-focus:font-medium">
                      <div className="px-3.5 pb-0 z-0">
                        <button
                          type="button"
                          className=" font-light text-lg mt-3 mr-5 font-mono "
                          onClick={() => wrapperSetParentReviewState(false)}
                        >
                          close
                        </button>
                      </div>
                      <span className="font-mono font-light text-lg2">
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
                  </div>
                </div>
                <div className="mb-10"></div>
                <div></div>
              </div>
            </Transition.Child>
          </Popover.Panel>
          {/* </Transition> */}
        </>
      )}
    </Popover>
  );
}
