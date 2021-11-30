import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import atob from 'atob';

const ProductCard = ({ collection, product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;
  const atobURL = atob(product.node.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);

  return (
    // <a
    //   href={`https://deepoe-only.vercel.app/collections/${collection}/${handle}`}
    //   rel="noreferrer"
    // >
    <Link href={`/collections/${collection}/${handle}`}>
      <p className="group px-2">
        <div className="w-full  overflow-hidden">
          <div className="relative h-110">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-2 text-xl font-mono font-light text-deepoe_default-black">
          {title}
        </h3>
        <p className="mt-1 text-md font-mono font-extralight">
          {formatter.format(price)}{' '}
          <div
            className="yotpo bottomLine inline-flex -mt"
            data-yotpo-product-id={`${atobId}`}
          ></div>
        </p>
      </p>
    </Link>
    // </a>
  );
};

export default ProductCard;
