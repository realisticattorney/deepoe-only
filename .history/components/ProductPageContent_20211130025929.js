import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
import atob from 'atob';
import { useEffect, useRef, useState } from 'react';
import YotpoReviews from './YotpoReviews';
const ProductPageContent = ({ collection, product }) => {
  const atobURL = atob(product.id);
  const atobId = atobURL.split('Product/')[1];

  const stageCanvasRef = useRef(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      let inner = stageCanvasRef.current.innerText
        ? stageCanvasRef.current.innerText
        : 'empty';
      let lalala = inner.indexOf('Currently, there');
      if (lalala > -1) {
        setDisable(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  let itemsSpecs;
  const { description } = product;
  let [intro, details] = description.split('^^^DETAILS');
  [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
  const itemsSpecs2 = itemsSpecs.split('**');
  console.log('intro', intro);
  console.log('details', details);
  console.log('itemsSpecs', itemsSpecs);
  console.log('itemsSpecs2', itemsSpecs2);
  return (
    <div>
      <div className="px-3.5 pb-0  z-0">
        <Link href={`/collections/${collection}/`}>
          <a className="text-left pl-3 text-lg font-extralight font-mono">
            {'<'} back to{' '}
            {collection === 'frontpage' ? 'all products' : collection}
          </a>
        </Link>
      </div>

      <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
        <div className="w-full max-w-md  overflow-hidden"></div>
        <ProductForm product={product} collection={collection} />

        <div className="font-mono text-sm">
          <p>{intro}</p>
        </div>
        <div className="flex flex-col w-full border-t pt-2 border-deepoe-chocolate">
          <button className="group focus:outline-none" onClick={handleShow}>
            <div className="flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate font-mono font-extralight text-lg2">
                Details
              </span>

              <p className="font-mono font-thin text-3xl group-focus:hidden">
                +
              </p>

              <p className="font-mono font-thin text-3xl  -mt-5  hidden group-focus:flex">
                _
              </p>
            </div>
            <div className="max-h-0 overflow-hidden duration-300   group-focus:py-2 font-public-sans-normal  group-focus:max-h-56  text-sm text-left font-extralight  border-b border-gray-700">
              {details}
            </div>
          </button>
          <button className="group focus:outline-none">
            <div className="flex justify-between py-2 text-lg font-extralight text-left items-center text-gray-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="truncate font-mono font-extralight text-lg2">
                Item Specifications
              </span>
              <p className="font-mono font-thin text-3xl group-focus:hidden">
                +
              </p>

              <p className="font-mono font-thin text-3xl  -mt-5  hidden group-focus:flex">
                _
              </p>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 text-sm  group-focus:pb-2 font-public-sans-normal group-focus:max-h-56  text-left font-extralight border-b border-gray-700">
              <ul className="list-disc font-mono font-extralight ">
                {itemsSpecs2.map((item, index) => (
                   <li key={index}>{item}</li>;
                ))}
              </ul>
            </div>
          </button>
          <div className="max-h-111">
            {/* <Link href={`/reviews/${product.handle}`}> */}
            {/* <a> */}
            <div className="flex justify-between pt-2 -mb-2 font-extralight text-left text-lg text-gray-900 items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-gray-700 group-focus:font-medium">
              <span className="font-mono font-extralight text-lg2">
                Reviews
              </span>
            </div>

            <div
              id="reviews-productpage "
              className=" overflow-hidden focus:outline-none active:outline-none text-center"
            >
              <div
                ref={stageCanvasRef}
                className="yotpo yotpo-main-widget "
                data-product-id={`${atobId}`}
                data-currency="USD"
                data-price={`${product.variants.edges[0].node.priceV2.amount}`}
                data-name={`${product.handle}`}
                data-url={`https://deepoe.com/products/${product.handle}`}
                // data-url={`${atobURL}`}
                data-image-url={`${product.images.edges[0].node.originalSrc}`}
              ></div>

              {/* </a> */}
              {/* </Link> */}
              <div
                className={`pt-2.5 self-center ${
                  disable ? 'hidden' : 'inline-block'
                }`}
              >
                <Link href={`/reviews/${product.handle}`}>
                  <button
                    type="submit"
                    disabled={disable ? true : false}
                    className="inline-flex justify-center py-1 px-10 mt-2 border border-transparent font-sans shadow text-xl font-light text-white bg-deepoe-chocolate focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    More Reviews
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-5 font-public-sans-normal">
        <div className="relative h-96">
          <Image src="/brunch.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="font-sans italic font-medium text-xl2 tracking-tighter mt-8 mb-3 px-6">
          At deepoe, we believe in
        </div>
        <div className="py-3.5">
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-light">
            Sustainable Style
          </h2>
          <p className="text-left text-sm font-extralight pt-1 px-6">
            Sustainability should not be dull, muted, or monotone. We believe
            sustainabile choices should be designed for impact and bring joy and
            smiles. Our bamboo plate avoid plastics and melamines and are
            crafted from renewable bamboo and cornstarch.
          </p>
        </div>
        <div className="py-3.5 bg-deepoe-chocolate">
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-light text-deepoe-cream">
            Function First
          </h2>
          <p className="text-left text-sm font-extralight pt-1 px-6 text-deepoe-cream">
            We aim to provide products that actually work, and ideally across
            settings. These sturdy plates are perfect for outdoor BBQs, picnics
            or an evening on the porch but perform just as well when
            entertaining a dinner party or snack time with the kids.
          </p>
        </div>
        <div className="py-3.5">
          <h2 className="text-left text-2xl pb-2 px-6 font-mono font-light">
            Conscious Commerce
          </h2>
          <p className="text-left text-sm font-extralight pt-1 px-6">
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
