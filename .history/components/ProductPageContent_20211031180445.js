import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
import ProductCarousel from './ProductCarousel';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const ProductPageContent = ({ collection, product }) => {
  console.log(product.images.edges);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };


  return (
    <div>
      <div className="px-5 py-5 z-0">
        <Link href={`/collections/${collection}/`}>
          <a className="text-left text-sm font-medium">
            collections {'>'} {collection}
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="w-full max-w-md border overflow-hidden shadow-sm">
          <div className="relative h-80 w-full">
            <ProductCarousel product={product} />
          </div>
        </div>
        <ProductForm product={product} />




        <div className="flex flex-col w-full border-t pt-2 border-deepoe-chocolate">
        <button className="group focus:outline-none" onClick={handleShow}>
          <div className="flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate fam">Details</span>
            
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            
          </div>
          <div className="max-h-0 overflow-hidden duration-300   group-focus:max-h-40  text-sm text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none">
          <div className="flex justify-between py-2 text-lg font-extralight text-left items-center text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Item Specifications</span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
          </div>
          <div className="max-h-0 overflow-hidden duration-300 text-sm  group-focus:max-h-40  text-left font-extralight text-gray-500 border-b border-gray-700">
            Please contact us as soon as possible with your order number and
            email and we will try our best to accomodate your request. Please
            note that some orders may not be cancellable after leaving our
            warehouse.
          </div>
        </button>
        <button className="group focus:outline-none">
          <div className="flex justify-between py-2 font-extralight text-left text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Reviews (432)</span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
          </div>
          <div className="max-h-0 overflow-hidden duration-300   group-focus:max-h-40  text-sm text-left font-extralight text-gray-500 border-b border-gray-700">
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

export default ProductPageContent;
