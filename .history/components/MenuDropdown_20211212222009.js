import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function MenuDropdown({ parentState, wrapperSetParentState }) {
  const [open, setOpen] = useState(false);

  return (
    <Transition.Root show={parentState} as={Fragment}>
      <Dialog
        //   initialFocus={cancelButtonRef}
        as="div"
        className="fixed  inset-0 overflow-hidden"
        onClose={() => {
          wrapperSetParentState(!parentState);
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

          <div className="fixed inset-y-0 top-16 left-0 pr-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-screen max-w-xs font-mono md:max-w-xs2 lg:max-w-md xl:max-w-lg">
                <div className="h-full min-h-screen flex flex-col bg-deepoe-cream shadow-xl overflow-y-hidden">
                  <Disclosure>
                    <Disclosure.Button className=" focus:outline-none active:outline-none active:no-underline">
                      <div
                        className="py-6 overflow-y-auto mt-7 px-6 sm:px-6 flex justify-between items-center"
                        onClick={() => setOpen(!open)}
                      >
                        <p className="font-extralight text-2xl">Products</p>
                        <span className="mr-7 justify-self-end">
                          <ChevronUpIcon
                            className={`w-5 h-5 ${
                              open ? 'transform rotate-180' : ''
                            } text-gray-600 `}
                          />
                          {/* {open ? (
                              <ChevronUpIcon className="w-5 h-5" />
                            ) : (
                              <ChevronDownIcon className="w-5 h-5" />
                            )} */}
                        </span>
                      </div>
                    </Disclosure.Button>
                    <Transition
                      //  show={open}
                      appear={true}
                      enter="transform transition ease-in duration-250"
                      enterFrom="-translate-y-1/4 opacity-0"
                      enterTo="translate-y-0 opacity-100"
                      leave="transform transition ease-out duration-200"
                      leaveFrom="translate-y-0 opacity-100"
                      leaveTo="-translate-y-4  opacity-0"
                    >
                      <Disclosure.Panel className="font-extralight font-mono">
                        <ul className="space-y-3 pl-11 mb-6">
                          <a
                            href={`https://deepoe.com/collections/frontpage`}
                            rel="noreferrer"
                          >
                            {/* <Link href={`/collections/frontpage`}> */}
                            <button
                              className="block text-lg my-2 font-extralight"
                              onClick={() => wrapperSetParentState(false)}
                            >
                              Shop All
                            </button>
                          </a>
                          <a
                            href={`https://deepoe.com/collections/dinnerware`}
                            rel="noreferrer"
                          >
                            <button
                              className="block text-lg my-2 font-extralight"
                              onClick={() => wrapperSetParentState(false)}
                            >
                              Dinnerware
                            </button>
                          </a>
                          <a
                            href={`https://deepoe.com/collections/drinkware`}
                            rel="noreferrer"
                          >
                            <button
                              className="block text-lg my-2 font-extralight"
                              onClick={() => wrapperSetParentState(false)}
                            >
                              Drinkware
                            </button>
                          </a>
                          <a
                            href={`https://deepoe.com/collections/accessories`}
                            rel="noreferrer"
                          >
                            <button
                              className="block text-lg my-2 font-extralight"
                              onClick={() => wrapperSetParentState(false)}
                            >
                              Accessories
                            </button>
                          </a>
                        </ul>
                      </Disclosure.Panel>{' '}
                    </Transition>
                    <div className="flex-1 overflow-y-auto space-y-6 px-6 sm:px-6">
                      <Link href={`/deepoe/sustainability`}>
                        <a
                          className="font-extralight text-2xl block"
                          onClick={() => wrapperSetParentState(false)}
                        >
                          Sustainability
                        </a>
                      </Link>

                      <Link href={`/faq`}>
                        <a
                          className="font-extralight text-2xl block"
                          onClick={() => wrapperSetParentState(false)}
                        >
                          FAQ
                        </a>
                      </Link>

                      <Link href={`/contact`}>
                        <a
                          className="font-extralight text-2xl block"
                          onClick={() => wrapperSetParentState(false)}
                        >
                          Contact
                        </a>
                      </Link>
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
