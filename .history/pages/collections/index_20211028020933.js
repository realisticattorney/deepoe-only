import React from 'react'

const AllCollections = () => {
   return (
      <div>
         
      </div>
   )
}

export default AllCollections


export async function getStaticProps() {
   const products = await getProductsInCollection('frontpage');
 
   return {
     props: { products },
   };
 }
 