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
          <p className="text-base font-thin px-3 leading-8">{props.copy}</p>
        </div>
      </div>
    </div>
  );
};

Builder.registerComponent(Sustainability, {
  name: 'Sustainability',
  inputs: [
    {
      name: 'copy',
      type: 'string',
      defaultValue:
        'What`s a sustainable good? At deepoe, we see sustainability as an ongoing process and a daily challenge. We’re on a journey as we try, with each product and package, to reduce our footprint, increase our knowledge, and head towards a better future. At Deepoe, are committed to making our products and services as sustainable as possible.',
    },
  ],
});

export default Sustainability;
