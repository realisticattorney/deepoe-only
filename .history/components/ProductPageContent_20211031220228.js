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
      <div className="px-5 pb-3.5 pt-1 z-0">
        <Link href={`/collections/${collection}/`}>
          <a className="text-left pl-1 font-medium font-public-sans-normal">
            {'<'} back to {collection}
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
              <span className="truncate font-public-sans-normal">Details</span>

              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300   group-focus:py-2 font-public-sans-normal  group-focus:max-h-40  text-xs text-left font-extralight  border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
          <button className="group focus:outline-none">
            <div className="flex justify-between py-2 text-lg font-extralight text-left items-center text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate font-public-sans-normal">
                Item Specifications
              </span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300 text-xs  group-focus:pb-2 font-public-sans-normal group-focus:max-h-56  text-left font-extralight border-b border-gray-700">
              9.85” in diameter (25cm)
              <li>Non-toxic and compostable </li>
              <li>
                Composed of bamboo fiber and corn starch and printed with food
                grade ink
              </li>
              <li>BPA, PVC and Phthalates free</li>
              <li>General Care</li>
              <li>Do not microwave</li>
              <li>Handwash before use </li>
              <li>Dishwasher safe</li>
              <li>Avoid soaking in water for prolonged times </li>
              <li>Suitable for hot foods </li>
              <li>Store in cool and dry place</li>
              <p className="group-focus:pt-1"> Set of 4</p>
            </div>
          </button>
          <button className="group focus:outline-none">
            <div className="flex justify-between py-2 font-extralight text-left text-lg text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate font-public-sans-normal">
                Reviews (432)
              </span>
              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300   group-focus:py-2 font-public-sans-normal  group-focus:max-h-40  text-xs text-left font-extralight border-b border-gray-700">
              Please contact us as soon as possible with your order number and
              email and we will try our best to accomodate your request. Please
              note that some orders may not be cancellable after leaving our
              warehouse.
            </div>
          </button>
        </div>

      </div>
        <div className="flex flex-col w-full py-5 font-public-sans-normal">
        <div className="py-3.5">
          <h2 className="text-left text-xl px-4">Sustainable Style</h2>
          <p className="text-left text-xs font-light pt-1 px-4">Sustainability should not be dull, muted, or monotone. We believe sustainabile choices should be designed for impact and bring joy and smiles. Our bamboo plate avoid plastics and melamines and are crafted from renewable bamboo and cornstarch</p>
          </div>
        <div className="py-3.5 bg-deepoe-chocolate">
          <h2 className="text-left text-xl px-4 font text-white">Function First</h2>
          <p className="text-left text-xs font-light pt-1 px-4 text-white">Sustainability should not be dull, muted, or monotone. We believe sustainabile choices should be designed for impact and bring joy and smiles. Our bamboo plate avoid plastics and melamines and are crafted from renewable bamboo and cornstarch</p>
          </div>
        <div className="py-3.5">
          <h2 className="text-left text-xl px-4">Sustainable Style</h2>
          <p className="text-left text-xs font-light pt-1 px-4">Sustainability should not be dull, muted, or monotone. We believe sustainabile choices should be designed for impact and bring joy and smiles. Our bamboo plate avoid plastics and melamines and are crafted from renewable bamboo and cornstarch</p>
          </div>
        </div>
    </div>
  );
};

export default ProductPageContent;
