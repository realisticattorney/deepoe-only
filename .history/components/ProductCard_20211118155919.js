import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

const ProductCard = ({ collection, product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/collections/${collection}/${handle}`}>
      <a className="group px-2">
        <div className="w-full  overflow-hidden">
          <div className="relative h-96">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-2 text-2xl font-mono font-extralight text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-lg font-mono font-extralight">
          {formatter.format(price)}
        </p>
      </a>
    </Link>
  );
};

export default ProductCard;
