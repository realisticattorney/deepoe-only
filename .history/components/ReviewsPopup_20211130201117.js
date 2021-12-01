import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
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
    
     
      <Dialog
        as="div"
        as={Fragment}
      className={`z-40 absolute font-public-sans-normal ${
        parentReviewState ? 'hidden' : 'block'
      } `}
        onClose={() => {
          wrapperSetParentReviewState(!parentReviewState);
        }}
      >
        <div className="absolute  inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 top-0 left-0 right-0 pl-0 pr-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full min-h-screen flex flex-col bg-deepoe-cream shadow-xl overflow-y-scroll">
                  <Disclosure>
                    <Disclosure.Button className=" focus:outline-none active:outline-none active:no-underline">
                      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto">
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
                    </Disclosure.Button>
                    <Transition
                      //  show={reviewOpen}
                      appear={true}
                      enter="transform transition ease-in duration-250"
                      enterFrom="-translate-y-1/4 opacity-0"
                      enterTo="translate-y-0 opacity-100"
                      leave="transform transition ease-out duration-200"
                      leaveFrom="translate-y-0 opacity-100"
                      leaveTo="-translate-y-4  opacity-0"
                    >
                      <Disclosure.Panel className="font-extralight font-mono"></Disclosure.Panel>{' '}
                    </Transition>
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
                  </Disclosure>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
