import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Link from 'next/link';
import { ArrowSmUpIcon, ChevronUpIcon, PlusIcon } from '@heroicons/react/outline';

const Faq = () => {
  return (
    <div className=" w-full px-4">
      <div className="w-full max-w-md p-2 mx-auto bg-deepoe-cream rounded-2xl">
        <h3 className="text-lg font-light">Frequently Asked Questions</h3>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                  open ? 'border-none' : ''
                }`}
              >
                <span>What is your refund policy?</span>
            { open ?  <PlusIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-900`}
            /> :   <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-900`}
            />
              
            }
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2 text-xs font-extralight text-gray-500 border-b border-gray-700">
                Please contact us as soon as possible with your order number and
                email and we will try our best to accomodate your request.
                Please note that some orders may not be cancellable after
                leaving our warehouse.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                  open ? 'border-none' : ''
                }`}
              >
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2 text-xs font-extralight text-gray-500 border-b border-gray-700">
                Please contact us as soon as possible with your order number and
                email and we will try our best to accomodate your request.
                Please note that some orders may not be cancellable after
                leaving our warehouse.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 border-b border-gray-700 ${
                  open ? 'border-none' : ''
                }`}
              >
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2 text-xs font-extralight text-gray-500 border-b border-gray-700">
                Please contact us as soon as possible with your order number and
                email and we will try our best to accomodate your request.
                Please note that some orders may not be cancellable after
                leaving our warehouse.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Faq;
