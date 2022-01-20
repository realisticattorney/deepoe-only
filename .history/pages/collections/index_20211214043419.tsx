import React from 'react';
import { getCollections } from '../../lib/shopify';
import CollectionList from '../../components/CollectionList';

interface AllCollections {
  allCollections: Collection[];
}

export interface Collection {
  node: {
    description: string;
    handle: string;
    id: string;
    title: string;
    image: {
      id: string;
      originalSrc: string;
    };
    products: {
      edges: [
        {
          node: {
            images: {
              edges: [
                {
                  node: {
                    originalSrc: string;
                  };
                }
              ];
            };
          };
        }
      ];
    };
  };
}

const AllCollections = ({ allCollections }: AllCollections) => {
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
