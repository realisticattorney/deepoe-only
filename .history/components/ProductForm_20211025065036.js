import { useState, useContext } from "react"

const ProductForm = ({product}) => {
   console.log(product)
   
   const allVariantOptions = product.variants.edges?.map(variant => variant.node.Selectoptions)
   
   return (
      <div>
         
      </div>
   )
}

export default ProductForm
