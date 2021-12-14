import ProductCard from './ProductCard';
import Image from 'next/image';

export interface ProductListProps {
  products: ProductList;
  collection: string;
}

export interface ProductList {
  title: string;
  image: {
    id: string;
    originalSrc: string;
  };
  products: {
    edges: Product[];
  };
}
export interface Product {
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

const ProductList = ({ collection, products }: ProductListProps) => {
  return (
    <div className=" w-full   overflow-hidden ">
      <div className="relative h-60">
        <Image
          src={products.image.originalSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <h2
          className={`text-5xl text-white absolute left-0 right-0 ml-auto mr-auto top-24 italic font-medium w-80 mb-6 text-center 
              `}
        >
          {collection === 'frontpage' ? 'all products' : collection}
        </h2>
      </div>

      <div className="px-4 md:px-8 pt-6 xl:px-4 ">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xxl:grid-cols-3 ">
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
