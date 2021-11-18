import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';

import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

const ProductPageContent = ({ collection, product }) => {
  // console.log('product_id', product);

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetchReviews()
  // }, [])

  // const fetchReviews = () => {
  //   fetch(
  //     `https://api.yotpo.com/v1/widget/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/products/${product.id}/reviews.json`
  //   )
  //     .then((response) => response.json())
  //     .then(({ response }) => {
  //       console.log('responseeeee', response);
  //     });
  // }

  // onMount(() => {
  //   if (!state.productId) {
  //     const shopifyProduct = window?.ShopifyAnalytics?.meta?.product;

  //     if (shopifyProduct) {
  //       state.productId = shopifyProduct.id;
  //       state.productUrl = `https://${window.Shopify.shop}/products/${shopifyProduct.id}`; // the first part of the variant name is the product title

  //       state.productTitle = shopifyProduct.variants[0].name;
  //     }
  //   }

  //   if (state.productId) {
  //     state.fetchReviews();
  //   } else {
  //     // add blank state
  //   }
  // });

  // console.log(product.images.edges);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div>
      <div className="px-5 pb-3.5 pt-1 z-0">
        <Link href={`/collections/${collection}/`}>
          <a className="text-left pl-1 font-medium font-mono font-public-sans-normal text-gray-800">
            {'<'} back to {collection}
          </a>
        </Link>
      </div>
      {/* <div
        className="yotpo yotpo-main-widget "
        data-product-id={`Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzczMzUzNTYyMzU5OTM`}
        data-currency="USD"
        data-price={`${product.variants.edges[0].node.priceV2.amount}`}
        data-name={`${product.handle}`}
        data-url={`/collections/${collection}/${product.handle}`}
        data-image-url={`${product.images.edges[0].node.originalSrc}`}
      ></div>
      <div
        className="yotpo bottomLine"
        data-yotpo-product-id={`Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzczMzUzNTYyMzU5OTM`}
      ></div> */}


      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="w-full max-w-md border overflow-hidden shadow-sm">
    
        </div>
        <ProductForm product={product} />

        <div className="flex flex-col w-full border-t pt-2 border-deepoe-chocolate">
          <button className="group focus:outline-none" onClick={handleShow}>
            <div className="flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate font-mono font-light">Details</span>

              <PlusIcon className="text-gray-900 h-4 w-4 group-focus:hidden" />

              <MinusIcon className="text-gray-900 h-4 w-4 hidden group-focus:flex" />
            </div>
            <div className="max-h-0 overflow-hidden duration-300   group-focus:py-2 font-public-sans-normal  group-focus:max-h-56  text-xs text-left font-extralight  border-b border-gray-700">
              Enjoy your next meal with a stylish and conscious choice. Whether
              its indoors or outdoors, our bamboo plates are perfect for
              entertaining, simple meals with the family, or quick snacks with
              the little ones.
              <br></br>
              <br></br>
              Our plates are completely free of plastics and made from bamboo,
              cornstarch, and use food-grade inks. They are bio-degradable,
              dishwasher safe, lightweight, and durablly built for seasons of
              use. These plates don’t just replace your outdoor styrofoam and
              plastic options, they’re sturdy and stylish enough to belong on
              your dinner table.
            </div>
          </button>
          <button className="group focus:outline-none">
            <div className="flex justify-between py-2 text-lg font-extralight text-left items-center text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="font-mono font-light">
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
              <span className="font-mono font-light">
                Reviews (432)
              </span>
              
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
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-normal">
            Sustainable Style
          </h2>
          <p className="text-left text-xs font-light pt-1 px-6">
            Sustainability should not be dull, muted, or monotone. We believe
            sustainabile choices should be designed for impact and bring joy and
            smiles. Our bamboo plate avoid plastics and melamines and are
            crafted from renewable bamboo and cornstarch.
          </p>
        </div>
        <div className="py-3.5 bg-deepoe-chocolate">
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-normal text-deepoe-cream">
            Function First
          </h2>
          <p className="text-left text-xs font-light pt-1 px-6 text-deepoe-cream">
            We aim to provide products that actually work, and ideally across
            settings. These sturdy plates are perfect for outdoor BBQs, picnics
            or an evening on the porch but perform just as well when
            entertaining a dinner party or snack time with the kids.
          </p>
        </div>
        <div className="py-3.5">
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-normal">
            Conscious Commerce
          </h2>
          <p className="text-left text-xs font-light pt-1 px-6">
            Deepoe aims to consider each step of the product’s journey and
            ensure conscious decisions fuel our business success. We have
            removed plastics from packaing and are on the path to carbon
            neutrality.
          </p>
        </div>
        <div className="pt-2.5 self-center">
          <Link href={`/deepoe/sustainability`}>
            <button
              type="submit"
              className="inline-flex justify-center py-1 px-10 mt-2 border border-transparent font-sans shadow text-xl font-light text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPageContent;
