import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price  = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <a className="group px-2">
        <div className="w-full  overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-3 text-2xl  text-gray-900">{title}</h3>
        <p className="mt-1 text- text-gray-700">{formatter.format(price)}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
