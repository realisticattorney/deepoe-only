import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';

const Sustainability = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className=" w-full px-2.5 font-mono">
      <div className="w-full max-w-md  mx-auto bg-deepoe-cream rounded-2xl space-y-5">
        <h3 className="text-3xl pt-5 py-2 font-thin px-3 tracking-tighter">
          Sustainability
        </h3>
         <div>
            <p className="text-lg font-thin px-3">
               We are committed to making our products and services as sustainable
               as possible.
            </p>
         </div>
      </div>
    </div>
  );
};

Builder.registerComponent(Sustainability, {
  name: 'Sustainability',
});

export default Sustainability;
