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
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className=" w-full px-2.5 font-mono">
      <div className="w-full max-w-md  mx-auto bg-deepoe-cream rounded-2xl space-y-5">
        <h3 className="text-xl pt-3.5 font-ligh px-3">Frequently Asked Questions</h3>

        <div className="flex flex-col w-full">
          <h4 className="px-3 font-medium">Orders</h4>
          <button
            className="group focus:outline-none px-3"
            onClick={handleShow}
          >
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Where's my order?</span>

              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">
                How can I change or cancel my order?
              </span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Do your items have a warranty?</span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
        </div>

        <div className="flex flex-col w-full pt-5">
          <h4 className="px-3 font-medium">Products</h4>
          <button
            className="group focus:outline-none px-3"
            onClick={handleShow}
          >
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Where's my order?</span>

              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">
                How can I change or cancel my order?
              </span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Do your items have a warranty?</span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
        </div>
        <div className="flex flex-col w-full py-5">
          <h4 className="px-3 font-medium">Miscellaneous</h4>
          <button
            className="group focus:outline-none px-3"
            onClick={handleShow}
          >
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Where's my order?</span>

              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">
                How can I change or cancel my order?
              </span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none px-3">
            <div className="flex justify-between py-2 text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate">Do your items have a warranty?</span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-xs text-left font-light  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
