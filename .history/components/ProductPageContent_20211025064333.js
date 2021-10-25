import Image from 'next/image';

const ProductPageContent = ({ product }) => {
  return (
    <div className="flex flex-col justify-between items-center space-y-8">
      <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg">
         <div className="relative h-96 w-full">
            <Image src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText} layout="fill" />
         </div>
      </div>
    </div>
  );
};

export default ProductPageContent;
