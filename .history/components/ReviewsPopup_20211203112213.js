import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition, Disclosure, Popover } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import atob from 'atob';
export default function ReviewsPopup({
  parentReviewState,
  wrapperSetParentReviewState,
  product,
  collection,
  disable,
}) {
  console.log('product_id', product);
  console.log('collection_id', collection);
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <Popover className="">
      {({ parentReviewState }) => (
        <>
          <Popover.Button
            className={`inline-flex justify-center border-b leading-tight  border-deepoe_default-black  mt-8 mb-7 font-mono font-extralight  text-xl  text-deepoe_default-black  focus:outline-none active:outline-none  focus:ring-0 ${
              disable ? 'hidden' : 'inline-block'
            }`}
            onClick={() => {
              wrapperSetParentReviewState(!parentReviewState);
            }}
          >
            All Reviews
          </Popover.Button>

          <Popover.Panel static className="absolute ">
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
              <div className="bg-deepoe-cream w-full h-screen md:max-w-md md:border-r border-deepoe_default-black    z-50 fixed inset-y-0 top-0 left-0 right-0 bottom-0 max-w-full  overflow-y-auto">
                <div className="z-50 fixed w-full h-16 bg-deepoe-cream  text-right">
                  <button
                    type="button"
                    className=" font-extralight text-lg mt-5 pt-0.5 mr-9 font-mono "
                    onClick={() => wrapperSetParentReviewState(false)}
                  >
                    close
                  </button>
                </div>
                <div className="w-full z-50 block mt-8 overflow-y-auto">
                  <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto overflow-y-auto">
                    <div className="flex flex-col w-full  ">
                      <div className="flex flex-col justify-between items-baseline py-2 font-extralight text-left text-lg text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75   group-focus:font-medium">
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
                        className={`yotpo yotpo-main-widget `}
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
              </div>
            </Transition.Child>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
