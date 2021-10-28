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
//   cancelButtonRef,
}) {
  //   const cancelButtonRef = useRef();
  const { open, setOpen } = useState(true);
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
                     //  ref={cancelButtonRef}
                    >
                      <div className="py-6 overflow-y-auto space-y-6 mt-7 px-6 sm:px-6">
                        <div className="flex justify-between">
                          <p className="font-extralight text-3xl">Products</p>{' '}
                          <span className="mr-7 justify-self-end">^</span>
                        </div>{' '}
                      </div>
                    </Disclosure.Button>
                    <Transition
                      //  show={open}
                      appear={true}
                      enter="transform transition ease-in duration-250"
                      enterFrom="-translate-y-1/4 opacity-0"
                      enterTo="translate-y-0 opacity-100"
                      leave="transform transition ease-out duration-200"
                      leaveFrom="translate-y-0 opacity-100"
                      leaveTo="-translate-y-4  opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 font-light">
                        <ul className="space-y-2 pl-11 mb-6">
                          <Link href={`/collections/frontpage`}><li>Shop All</li></Link>
                          <Link href={`/collections/dishware`}><li>Dishware</li></Link>
                          <Link href={`/collections/towels`}><li>Linens & Towels</li></Link>
                          <Link href={`/collections/rugs`}><li>Rugs</li></Link>
                          <Link href={`/collections/furniture`}><li>Furniture</li></Link>
                          <Link href={`/collections/`}><li>Miscellaneous</li></Link>
                        </ul>
                      </Disclosure.Panel>{' '}
                      {/* <Transition
                      enter="transform transition ease-in-out duration-200"
                      enterFrom="-translate-y-2/4"
                      enterTo="translate-y-0"
                      leave="transform transition ease-out duration-300"
                      leaveFrom="translate-y-0"
                      leaveTo="-translate-y-3/4 "
                    >
         
                    </Transition> */}
                    </Transition>
                    <div className="flex-1 overflow-y-auto space-y-6 px-6 sm:px-6">
                      <p className="font-extralight text-3xl">Sustainability</p>
                      <p className="font-extralight text-3xl">About</p>
                      <p className="font-extralight text-3xl">Contact</p>
                    </div>
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
