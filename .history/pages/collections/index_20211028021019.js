import React from 'react'
import { getCollections } from '../lib/shopify';

const AllCollections = ({collections}) => {
   return (
      <div>
         
      </div>
   )
}

export default AllCollections


export async function getStaticProps() {
   const products = await getCollections();
 
   return {
     props: { products },
   };
 }
 