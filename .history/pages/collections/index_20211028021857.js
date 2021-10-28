import React from 'react'
import { getCollections } from '../../lib/shopify';
import ProductList from '../components/ProductList';

const AllCollections = ({allCollections}) => {
   console.log(allCollections)
   return (
      <div>
        <CollectionList products={products} />
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
 