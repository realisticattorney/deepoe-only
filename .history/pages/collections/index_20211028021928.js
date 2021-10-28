import React from 'react'
import { getCollections } from '../../lib/shopify';
import CollectionList from '../../components/CollectionList';

const AllCollections = ({allCollections}) => {
   console.log(allCollections)
   return (
      <div>
        <CollectionList allCollections={allCollections} />
      </div>
   )
}

export default AllCollections


export async function getStaticProps() {
   const allCollections = await getCollections();
 
   return {
     props: { allCollections },
   };
 }
 