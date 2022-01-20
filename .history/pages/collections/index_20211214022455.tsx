import React from 'react';
import { getCollections } from '../../lib/shopify';
import CollectionList from '../../components/CollectionList';
import { AllCollections } from './[collection]';

interface AllCollections {
  allCollections: any;
}

export interface Collection {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    image: {
      id: string;
      originalSrc: string;
    };
    products: {
      edges: {
        node: {
          images: {
            edges: {
              node: {
                originalSrc: string;
              };
            };
          };
        };
      };
    };
  };
}

const AllCollections = ({ allCollections }: AllCollections) => {
  console.log(allCollections);
  return (
    <div>
      <CollectionList allCollections={allCollections} />
    </div>
  );
};

export default AllCollections;

export async function getStaticProps() {
  const allCollections = await getCollections();

  return {
    props: { allCollections },
  };
}
