import ProductCard from './ProductCard';
import Link from 'next/link';
import Image from 'next/image';
const ProductList = ({ collection, products }) => {
  // console.log("proudctssd",products);
  return (
    <div className="bg-deepoe-cream">
      <div className="max-w-2xl mx-auto pb-2 ">
        <div className="w-full  overflow-hidden">
          <div className="relative h-60">
            <Image
              src={products.image.originalSrc}
              layout="fill"
              objectFit="cover"
            />
            <h2
              className={`text-5xl text-white absolute top-24 italic font-medium mb-6 ${
                collection === 'frontpage' ? 'left-16' : ''
              } ${collection === 'dinnerware' ? 'left-18' : ''} ${
                collection === 'drinkware' ? 'left-28' : ''
              } ${collection === 'accessories' ? 'left-16' : ''}
               ${collection === 'rugs' ? 'left-40' : ''} ${
                collection === 'furniture' ? 'left-24' : ''
              }`}
            >
              {collection === 'frontpage' ? 'all products' : collection}
            </h2>
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
          <div className="py-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;