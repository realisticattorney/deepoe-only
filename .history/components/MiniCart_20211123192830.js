import { Fragment, useContext, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  XIcon,
  TrashIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../context/shopContext';
import { formatter } from '../utils/helpers';

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const {
    cartOpen,
    setCartOpen,
    checkoutUrl,
    removeCartItem,
    subtractCartItem,
    addItemToCart,
  } = useContext(CartContext);
  console.log('cart', cart);
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed inset-0 overflow-hidden "
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

          <div className="fixed inset-y-0  top-24 right-0 pl-0 max-w-full flex ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md min-h-screen">
                <div className="h-full  flex flex-col bg-deepoe-cream shadow-xl overflow-y-scroll">
                  <div className="flex-1 pb-6 overflow-y-auto px-4 sm:px-6">
                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length > 0 ? (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-deepoe_default-black"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="py-5 flex ">
                                <div className="relative flex-shrink-0 w-28 h-36 border border-gray-200 overflow-hidden">
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>

                                <div className="ml-3.5 flex-1 flex flex-col -mb-1 ">
                                  <div>
                                    <div className="flex justify-between text-lg font-medium">
                                      <h3 className="mt-0.5">
                                        <Link
                                          href={`/products/${product.handle}`}
                                          passHref
                                        >
                                          <a
                                            onClick={() => setCartOpen(false)}
                                            href={product.href}
                                            className="focus:outline-none active:outline-none active:no-underline font-mono font-light"
                                          >
                                            {product.title}
                                          </a>
                                        </Link>
                                      </h3>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                    {product.variantTitle !== "Default Title" ? (
                                      <p className="text-sm font-mono">
                                        {product.variantTitle}
                                      </p>
                                      ) : (
                                        <div>?</div>}
                                      <p className="ml-4 -mt-0.5 text-deepoe_default-black">
                                        <button
                                          type="button"
                                          className="text-deepoe_default-black hover:text-red-800"
                                          onClick={() => {
                                            removeCartItem(product.id);
                                          }}
                                        >
                                          <TrashIcon
                                            className="h-6 w-6 text-deepoe_default-black"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm font-light ">
                                    <div className="flex space-x-2">
                                      <button
                                        disabled={isButtonDisabled}
                                        onClick={() => {
                                          subtractCartItem(product);
                                          setButtonDisabled(true);
                                          setTimeout(() => {
                                            setButtonDisabled(false);
                                          }, 800);
                                        }}
                                      >
                                        {/* <MinusIcon className="h-2.5 w-2.5 text-deepoe_default-black" /> */}
                                        <p
                                          className={` -mt-2.7 pr-0.1 ${
                                            product.variantQuantity === 1
                                              ? 'text-gray-400'
                                              : ''
                                          }`}
                                        >
                                          _
                                        </p>
                                      </button>
                                      <p className=" text-xl font-mono">
                                        {product.variantQuantity}
                                      </p>

                                      <button
                                        disabled={isButtonDisabled}
                                        onClick={() => {
                                          addItemToCart(product);
                                          setButtonDisabled(true);
                                          setTimeout(() => {
                                            setButtonDisabled(false);
                                          }, 800);
                                        }}
                                      >
                                        <p className="-mt-0.1"> + </p>
                                      </button>
                                    </div>
                                    <div className="flex text-sm font-mono mb-1 font-normal">
                                      {formatter.format(product.variantPrice)}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="font-mono">
                            <p>Nothing in your cart!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {cart.length > 0 ? (
                    <div className="px-4 sm:px-6 font-mono ">
                      <div className="pt-4 border-t border-gray-900 space-y-1.5 flex-col  text-gray-900">
                        <div className="flex justify-between">
                          <p>Subtotal</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Shipping</p>
                          <p>Free</p>
                        </div>
                        <div className="flex justify-between underline">
                          <p>Add Promo Code</p>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <p>Subtotal</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
                      <div className="mt-5 mb-32">
                        <a
                          href={checkoutUrl}
                          className="flex justify-center items-center px-6 py-1.5 border border-transparent shadow-sm text-2xl font-base text-white bg-deepoe-chocolate hover:bg-gray-800 font-sans"
                        >
                          Checkout
                        </a>
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
