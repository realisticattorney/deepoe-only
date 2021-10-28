import React from 'react'
import { getCollections } from '../lib/shopify';

const AllCollections = () => {
   return (
      <div>
         
      </div>
   )
}

export default AllCollections


export async function getStaticProps() {
   const products = await getCollections('frontpage');
 
   return {
     props: { products },
   };
 }
 