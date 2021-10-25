import { useState, useContext } from "react"

const ProductForm = ({product}) => {
   console.log(product)
   
   const allVariantOptions = product.variants.edges?.map(variant => {
      const allOptions = {}
      variant.node.selectedOptions.map(option => {
         all
      }
   )})
   
   return (
      <div>
         
      </div>
   )
}

export default ProductForm

