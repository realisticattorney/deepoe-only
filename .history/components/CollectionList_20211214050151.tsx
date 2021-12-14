import { FC } from 'react';
import CollectionCard from './CollectionCard';
import { AllCollections } from '../lib/types/all';

const ProductList = ({ allCollections }: AllCollections) => {
  console.log('BIIIIITCH', allCollections);
  return (
    <div className="bg-deepoe-cream">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
          Collections
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
          {allCollections.map((collection) => (
            <CollectionCard key={collection.node.id} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
