import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';

const FaqQuestion = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="flex flex-col w-full">
      <h4 className="px-3 text-2xl font-light text-gray-800">Orders</h4>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between pb-1 pt-2 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            {props.title}
          </span>

          <p className="font-thin text-3xl  group-focus:hidden">+</p>

          <p className="font-thin text-3xl -mt-5 hidden group-focus:flex">_</p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          Please contact us as soon as possible with your order number and email
          and we will try our best to accomodate your request. Please note that
          some orders may not be cancellable after leaving our warehouse.
        </div>
      </button>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between py-1 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            How can I change or cancel my order?
          </span>
          <p className="font-thin text-3xl group-focus:hidden">+</p>

          <p className="font-thin text-3xl  -mt-5  hidden group-focus:flex">
            _
          </p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          Please contact us as soon as possible with your order number and email
          and we will try our best to accomodate your request. Please note that
          some orders may not be cancellable after leaving our warehouse.
        </div>
      </button>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between py-1 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            Do your items have a warranty?
          </span>
          <p className="font-thin text-3xl group-focus:hidden">+</p>

          <p className="font-thin text-3xl  -mt-5  hidden group-focus:flex">
            _
          </p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          Please contact us as soon as possible with your order number and email
          and we will try our best to accomodate your request. Please note that
          some orders may not be cancellable after leaving our warehouse.
        </div>
      </button>
    </div>
  );
};

Builder.registerComponent(FaqQuestion, {
  name: 'FaqQuestion',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: "Orders/Products/Miscellaneous",
    },
    {
      name: 'firstQuestion',
      type: 'string',
      defaultValue: "Where's my order, dude?",
    },
    {
      name: 'firstAnswer',
      type: 'string',
      defaultValue: "Where's my order, dude?",
    },
    {
      name: 'secondQuestion',
      type: 'string',
      defaultValue: "How can I change or cancel my order?",
    },
    {
      name: 'thirdQuestion',
      type: 'string',
      defaultValue: "Does your items have a warranty?",
    },
  ],
});

export default FaqQuestion;
