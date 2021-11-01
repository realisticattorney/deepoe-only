import ProductCard from './ProductCard';
import Link from 'next/link';
import Image from 'next/image';
const ProductList = ({ collection, products }) => {
  
  return (
    <div className="bg-deepoe-cream">
        <div className="w-full  overflow-hidden">
          <div className="relative h-72">
            <Image
              src={products.image.originalSrc}
              // alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      <div className="max-w-2xl mx-auto py-2 px-4">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">{collection}</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
          {products.products.edges.map((product) => (
            <ProductCard key={product.node.id} product={product} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
