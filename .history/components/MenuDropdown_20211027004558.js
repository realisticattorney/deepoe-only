import { Fragment, useContext, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
// import { CartContext } from '../context/shopContext';
import { formatter } from '../utils/helpers';

export default function MenuDropdown({ parentState, wrapperSetParentState
   // , cancelButtonRef 
}) {
//   const cancelButtonRef = useRef();

  return (
    <Transition.Root show={parentState} as={Fragment}>
      <Dialog
      //   initialFocus={cancelButtonRef}
        as="div"
        className="fixed  inset-0 overflow-hidden"
        onClose={() => {
          wrapperSetParentState(!parentState);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 top-20 left-0 pr-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-deepoe-cream shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto space-y-6 mt-7 px-6 sm:px-6">
                     <div className="flex justify-between"><p className="font-extralight text-3xl">Products</p> <span className="mr-7">^</span></div>
                     <Disclosure>
      <Disclosure.Button className="py-2">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
                     <p className="font-extralight text-3xl">Sustainability</p>
                     <p className="font-extralight text-3xl">About</p>
                     <p className="font-extralight text-3xl">Contact</p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
