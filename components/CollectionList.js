import CollectionCard from './CollectionCard';

const ProductList = ({ allCollections }) => {
  return (
    <div className="bg-deepoe-cream">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Collections</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
          {allCollections.map((collection) => (
            <CollectionCard key={collection.node.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
