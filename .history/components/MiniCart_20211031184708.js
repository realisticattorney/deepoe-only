import { Fragment, useContext, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../context/shopContext';
import { formatter } from '../utils/helpers';

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);
  console.log('cart', cart);
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
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

          <div className="fixed inset-y-0  top-20 right-0 pl-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-deepoe-cream shadow-xl overflow-y-scroll">
                  <div className="flex-1 pb-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="ml-3 h-3 flex items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          // onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length > 0 ? (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-900"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="py-4 flex">
                                <div className="relative flex-shrink-0 w-24 h-28 border border-gray-200 overflow-hidden">
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          href={`/products/${product.handle}`}
                                          passHref
                                        >
                                          <a
                                            onClick={() => setCartOpen(false)}
                                            href={product.href}
                                          >
                                            {product.title}
                                          </a>
                                        </Link>
                                      </h3>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                      <p className="mt-1 text-sm font-public-sans-normal text-gray-600">
                                        {product.variantTitle}
                                      </p>
                                      <p className="ml-4">
                                        <button
                                          type="button"
                                          className="font-medium text-gray-500 hover:text-gray-800"
                                          onClick={() =>
                                            removeCartItem(product.id)
                                          }
                                        >
                                          <TrashIcon
                                            className="mt-1.5 h-6 w-6"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.variantQuantity}
                                    </p>

                                    <div className="flex text-xs font-extralight text-gray-700">
                                      {formatter.format(product.variantPrice)}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="">
                            <p>Nothing in your cart</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {cart.length > 0 ? (
                    <div className="px-4 sm:px-6">
                      <div className="pt-4 border-t border-gray-900 space-y-1.5 flex-col text-sm font-extralight text-gray-900">
                        <div className="flex justify-between">
                          <p>Subtotal</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Subtotal</p>
                          <p>Free</p>
                        </div>
                        <div className="flex justify-between underline">
                          <p>Add Promo Code</p>
                        </div>
                        <div className="flex justify-between font-normal">
                          <p>Subtotal</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
                      <div className="mt-5">
                        <a
                          href={checkoutUrl}
                          className="flex justify-center items-center px-6 py-1.5 border border-transparent shadow-sm text-lg font-medium text-white bg-deepoe-chocolate hover:bg-gray-800"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium hover:text-gray-800"
                            onClick={() => setCartOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// enterFrom="-translate-x-full"
// enterTo="translate-x-0"
// leave="transform transition ease-in-out duration-500 sm:duration-700"
// leaveFrom="translate-x-0"
// leaveTo="-translate-x-full"
