import { Fragment, useContext, useRef, useState, useEffect } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
// import { CartContext } from '../context/shopContext';
import { formatter } from '../utils/helpers';

export default function MenuDropdown({
  parentState,
  wrapperSetParentState,
  cancelButtonRef,
}) {
  //   const cancelButtonRef = useRef();
  const { open, setOpen } = useState(false);
  const { closed, setClosed } = useState(false);

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
                  <Disclosure>
                    <Disclosure.Button
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <div className="flex-1 py-6 overflow-y-auto space-y-6 mt-7 px-6 sm:px-6">
                        <div className="flex justify-between min- ">
                          <p className="font-extralight text-3xl">Products</p>{' '}
                          <span className="mr-7 justify-self-end">^</span>
                        </div>{' '}
                      </div>
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transform transition ease-in-out duration-200"
                      enterFrom="-translate-y-2/4 opacity-0"
                      enterTo="translate-y-0 opacity-100"
                      leave="transform transition ease-out  duration-300 opa"
                      leaveFrom="translate-y-0 opacity-100"
                      leaveTo="-translate-y-3/4  opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 font-light pl-7">
                        <ul className="space-y-2">
                          <li>Shop All</li>
                          <li>Dishware</li>
                          <li>Linens & Towels</li>
                          <li>Rugs</li>
                          <li>Furniture</li>
                          <li>Miscellaneous</li>
                        </ul>
                      </Disclosure.Panel>{' '}
                    </Transition>
                  </Disclosure>
           
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
