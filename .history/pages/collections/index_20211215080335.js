import React from 'react';
import { getCollections } from '../../lib/shopify';
import CollectionList from '../../components/CollectionList';
import type { InferGetStaticPropsType } from 'next';

const AllCollections = ({
  allCollections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
