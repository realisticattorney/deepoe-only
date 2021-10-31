import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
import ProductCarousel from './ProductCarousel';
import { PlusIcon } from '@heroicons/react/outline';

const ProductPageContent = ({ collection, product }) => {
  console.log(product.images.edges);

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




        <div className="flex flex-col w-full">
        <h4 className="px-3">Orders</h4>
        <button className="group focus:outline-none px-3" onClick={handleShow}>
          <div className="flex justify-between py-2 text-sm font-light text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
            <span className="truncate">Where's my order?</span>
            
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            
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
            <span className="truncate">How can I change or cancel my order?</span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
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
            <span className="truncate">Do your items have a warranty?</span>
            <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />
            
            <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
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
    </div>
  );
};

export default ProductPageContent;
