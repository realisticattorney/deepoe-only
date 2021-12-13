import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';

const FaqQuestion = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
   <div className=" w-full px-2.5 font-mono">
   <div className="w-full max-w-md  mx-auto bg-deepoe-cream rounded-2xl space-y-5">
    <div className="flex flex-col w-full">
      <h4 className="px-3 text-2xl font-light text-gray-800">{props.title}</h4>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between pb-1 pt-2 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            {props.firstQuestion}
          </span>

          <p className="font-thin text-3xl  group-focus:hidden">+</p>

          <p className="font-thin text-3xl -mt-5 hidden group-focus:flex">_</p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          {props.firstAnswer}
        </div>
      </button>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between py-1 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            {props.secondQuestion}
          </span>
          <p className="font-thin text-3xl group-focus:hidden">+</p>

          <p className="font-thin text-3xl  -mt-5  hidden group-focus:flex">
            _
          </p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          {props.secondAnswer}
        </div>
      </button>
      <button className="group focus:outline-none px-3">
        <div className="flex justify-between py-1 tracking-tight text-sm  items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
          <span className="truncate text-lg font-extralight group-focus:font-light">
            {props.thirdQuestion}
          </span>
          <p className="font-thin text-3xl group-focus:hidden">+</p>

          <p className="font-thin text-3xl  -mt-5  hidden group-focus:flex">
            _
          </p>
        </div>
        <div className="max-h-0 overflow-hidden duration-300 group-focus:py-2  group-focus:max-h-40  text-sm text-left font-extralight  border-b">
          {props.thirdAnswer}
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
      defaultValue: 'Orders/Products/Miscellaneous',
    },
    {
      name: 'firstQuestion',
      type: 'string',
      defaultValue: "Where's my order, dude?",
    },
    {
      name: 'firstAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
    {
      name: 'secondQuestion',
      type: 'string',
      defaultValue: 'How can I change or cancel my order?',
    },
    {
      name: 'secondAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
    {
      name: 'thirdQuestion',
      type: 'string',
      defaultValue: 'Does your items have a warranty?',
    },
    {
      name: 'thirdAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
  ],
});

export default FaqQuestion;
