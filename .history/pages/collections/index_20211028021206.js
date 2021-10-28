import React from 'react'
import { getCollections } from '../../lib/shopify';

const AllCollections = ({allCollections}) => {
   console.log(allCollections)
   return (
      <div>
         {allCollections.map({node} => 
         )}
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
 