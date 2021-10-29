import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { Fragment, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowSmUpIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/outline';

const Faq = () => {
  const [isClosed, setIsClosed] = useState(false);

  const modalRef = useRef(null);
  const hideModalHandler = (e) => {
    e.preventDefault();
    modalRef.current?.click();
    setIsClosed(true);
  };

  return (
    <div className=" w-full px-4">
      <div className="w-full max-w-md p-2 mx-auto bg-deepoe-cream rounded-2xl">
        <h3 className="text-lg font-light">Frequently Asked Questions</h3>
        <div class="flex flex-col w-full">
          <button class="group focus:outline-none">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                      open ? 'border-none' : ''
                    }`}
                  >
                    <span>What is your refund policy?</span>
                    {open ? (
                      <MinusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    ) : (
                      <PlusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 text-xs font-extralight text-gray-500 border-b border-gray-700 max-h-0 overflow-hidden duration-300 group-focus:max-h-36 group-focus:pb-20">
                    Please contact us as soon as possible with your order number
                    and email and we will try our best to accomodate your
                    request. Please note that some orders may not be cancellable
                    after leaving our warehouse.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </button>
        </div>
        <div class="flex flex-col w-full">
          <button class="group focus:outline-none">
            <Disclosure className">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                      open ? 'border-none' : ''
                    }`}
                  >
                    <span>What is your refund policy?</span>
                    {open ? (
                      <MinusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    ) : (
                      <PlusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 text-xs font-extralight text-gray-500 border-b border-gray-700 max-h-0 overflow-hidden duration-300 group-focus:max-h-36 group-focus:pb-20">
                    Please contact us as soon as possible with your order number
                    and email and we will try our best to accomodate your
                    request. Please note that some orders may not be cancellable
                    after leaving our warehouse.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </button>
        </div>
        <div class="flex flex-col w-full">
          <button class="group focus:outline-none">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                      open ? 'border-none' : ''
                    }`}
                  >
                    <span>What is your refund policy?</span>
                    {open ? (
                      <MinusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    ) : (
                      <PlusIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-900`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4  text-xs font-extralight text-gray-500 border-b border-gray-700 max-h-0 overflow-hidden duration-300 group-focus:max-h-36 group-focus:pb-20">
                    Please contact us as soon as possible with your order number
                    and email and we will try our best to accomodate your
                    request. Please note that some orders may not be cancellable
                    after leaving our warehouse.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </button>
        </div>
      </div>

      <div class="flex flex-col w-56">
        <button class="group border-t border-r border-l border-black focus:outline-none">
          <div class="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span class="truncate">Heading One</span>
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40"></div>
        </button>

        <button class="group border-t border-r border-l  border-black focus:outline-none">
          <div class="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span class="truncate">Heading Two</span>
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item A
            </a>
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item B
            </a>
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item C
            </a>
          </div>
        </button>
        <button class="group border border-black focus:outline-none">
          <div class="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span class="truncate">Heading Three</span>
            <svg
              class="h-4 w-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item A
            </a>
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item B
            </a>
            <a
              class="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item C
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Faq;
