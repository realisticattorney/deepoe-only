import { useState, useContext } from "react"

const ProductForm = ({product}) => {
   console.log(product)
   
   const allVariantOptions = product.variants.edges?.map(variant => {
      const allOptions = {}
      variant.node.selectedOptions.map(option => {
         allOptions[option.name] = option.value
      }
   )
   return allOptions
})
   
   return (
      <div>
         
      </div>
   )
}

export default ProductForm

