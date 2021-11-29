import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

const ProductCard = ({ collection, product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href="/products/[handle]" as={`/products/${handle}`}>
    // <a
    //   href={`https://deepoe-only.vercel.app/collections/${collection}/${handle}`}
    //   rel="noreferrer"
    // >
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
        <h3 className="mt-2 text-2xl font-public-sans-normal font-extralight text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-lg font-public-sans-normal font-extralight">
          {formatter.format(price)}
        </p>
      </p>
    // </a>
  );
};

export default ProductCard;
