import ProductCard from './ProductCard';
import Image from 'next/image';
const ProductList = ({ collection, products }) => {
  return (
    <div className="w-full  overflow-hidden">
    <div className="relative h-65">
        <Image
          src={products.image.originalSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          
        />
       <h2
          className={`text-3xl md:text-4xl text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 md:w-96 mb-6 text-center 
            `}
        >
          Considered materials, lively design.
        </h2>
        <a
          href={`https://deepoe-only.vercel.app/collections/frontpage`}
          rel="noreferrer"
        >
          <p className="text-white text-sm absolute  font-light text-center right-0 mr-auto mb-6 bottom-0 left-0 ml-auto w-40 underline font-mono">
            Shop All Products
          </p>
        </a>
      </div>

      <div className="px-4 pt-6 ">
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
  );
};

export default ProductList;

// ${
//   collection.length === 10 ||
//   (collection.length === 11 && 'left-18')
// } ${collection.length === 9 && 'left-16'}
//  ${collection.length === 4 && 'left-40'} ${
//   collection.length === 8 && 'left-24'
// }
// ${
//   collection === 'dinnerware' && 'left-24'
// }
//  ${collection.length === 7 && 'left-24'}`
