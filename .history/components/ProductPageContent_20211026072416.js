import Image from 'next/image';
import ProductForm from './ProductForm';

const ProductPageContent = ({ product }) => {
  return (
    <div className="flex flex-col justify-between items-center pb-2 max-w-6xl w-11/12 px-1 mx-auto">
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
