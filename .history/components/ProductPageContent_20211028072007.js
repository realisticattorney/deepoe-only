import Image from 'next/image';
import ProductForm from './ProductForm';
import Link from 'next/link';
const ProductPageContent = ({ collection, product }) => {
  return (
    <div className="flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mx-auto">
    <Link href={`/collections/${collection}/`}></Link>
      <div className="w-full max-w-md border overflow-hidden shadow-sm">
        <div className="relative h-80 w-full">
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  );
};

export default ProductPageContent;
