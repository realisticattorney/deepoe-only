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
const [show, setShow] = useState(false)

const handleShow = () => {
    (show ? setShow(false) : setShow(true))
}


  return (
    <div className=" w-full px-4">
      <div className="w-full max-w-md p-2 mx-auto bg-deepoe-cream rounded-2xl">
        <h3 className="text-lg font-light">Frequently Asked Questions</h3>
   
      </div>
      
      <div className="flex flex-col w-full">
        <h4 className="px-3">Orders</h4>
        <button className="group focus:outline-none px-3" onClick={handleShow} >
          <div className="flex justify-between py-2 text-sm font-light text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Heading One</span>
      {}
            <PlusIcon 
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            />
            
      
          </div>
          <div className="max-h-0 overflow-hidden duration-300 px-4  group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none px-3">
          <div className="flex justify-between py-2 text-sm font-light text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Heading Two</span>
            <svg
              className="h-4 w-4"
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
          <div className="max-h-0 overflow-hidden duration-300 px-4  group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none px-3">
          <div className="flex justify-between py-2 text-sm font-light text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Heading Three</span>
            <svg
              className="h-4 w-4"
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
          <div className="max-h-0 overflow-hidden duration-300 px-4  group-focus:max-h-40  text-xs text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
      </div>
    </div>
  );
};

export default Faq;
