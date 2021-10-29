import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/outline';

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
                  open ? 'border-b-' : ''
                }`}
              >
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b border-gray-700">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Faq;
