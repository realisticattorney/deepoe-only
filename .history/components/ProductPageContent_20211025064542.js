import Image from 'next/image';
import ProductForm from './ProductForm';

const ProductPageContent = ({ product }) => {
  return (
    <div className="flex flex-col justify-between items-center space-y-8 max-w-6xl w-11/12 mx-auto">
      <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="relative h-96 w-full">
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm
    </div>
  );
};

export default ProductPageContent;
