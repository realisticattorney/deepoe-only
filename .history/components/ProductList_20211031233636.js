import ProductCard from './ProductCard';
import Link from 'next/link';
import Image from 'next/image';
const ProductList = ({ collection, products }) => {
  return (
    <div className="bg-deepoe-cream">
      <div className="max-w-2xl mx-auto py-2 ">
        <div className="w-full  overflow-hidden">
          <div className="relative h-80">
            <h2 className="text-4xl text-white absolute top-32 left-20  z-50 italic font-semibold mb-6">
              {collection}
            </h2>
            <Image
              src={products.image.originalSrc}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="px-4 pt-6">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6">
            {products.products.edges.map((product) => (
              <ProductCard
                key={product.node.id}
                product={product}
                collection={collection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
