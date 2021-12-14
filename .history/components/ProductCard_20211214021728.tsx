import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import atob from 'atob';

export interface ProductProps {
  node: {
    handle: string;
    title: string;
    id: string;
    images: {
      edges: ImagesEdges[];
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
      };
    };
  };
}
export interface ImagesEdges {
  node: {
    originalSrc: string;
    altText: string | null;
  };
}

export interface ProductCardProps {
  collection: string;
  product: ProductProps;
}

const ProductCard = ({ collection, product }: ProductCardProps) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = parseInt(product.node.priceRange.minVariantPrice.amount);
  const atobURL = atob(product.node.id);
  const atobId = atobURL.split('Product/')[1];
  console.log('atobId', atobId);

  return (
    <a
      href={`https://deepoe.com/collections/${collection}/${handle}`}
      rel="noreferrer"
    >
      <div className="group px-2 max-w-md mx-auto">
        <div className=" overflow-hidden">
          <div className="relative h-110">
            <Image
              src={originalSrc}
              alt={altText || title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-2 text-xl font-mono font-light text-deepoe_default-black">
          {title}
        </h3>
        <div className="inline-flex items-baseline justify-between w-full reviews-for-collections">
          <p className="mt-1 text-md font-mono font-extralight">
            {formatter.format(price)}
          </p>
          <div
            className="yotpo bottomLine inline-flex"
            data-yotpo-product-id={`${atobId}`}
          ></div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
