import React from 'react'
import { getCollections } from '../lib/shopify';

const AllCollections = ({allCollections}) => {
   console.log
   return (
      <div>
         {}
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
 