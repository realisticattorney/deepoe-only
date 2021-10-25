import { useState, useContext } from "react"

const ProductForm = ({product}) => {
   const allVariantOptions = product.variants.edges?.map(variant => variant.node.options)
   console.log(product)
   
   return (
      <div>
         
      </div>
   )
}

export default ProductForm

