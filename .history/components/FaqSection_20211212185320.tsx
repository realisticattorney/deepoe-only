import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';

const FaqSection = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className=" w-full px-2.5 font-mono">
      <div className="w-full max-w-md  mx-auto bg-deepoe-cream rounded-2xl space-y-5">
        <h3 className="text-3xl pt-5 py-2 font-thin px-3 tracking-tighter">
          Frequently Asked Questions
        </h3>

    

       
      </div>
    </div>
  );
};

Builder.registerComponent(FaqSection, {
  name: 'FaqSection',
  inputs: [
    { name: 'firtTitle', type: 'string', defaultValue: "Where's my order, dude?" },
    { name: 'firstFirst', type: 'string', defaultValue: "Where's my order, dude?" },
    { name: 'ordersSecond', type: 'string', defaultValue: "Where's my order, dude?" },
      { name: 'ordersThird', type: 'string', defaultValue: "Where's my order, dude?" },   
  ],
});

export default FaqSection;
