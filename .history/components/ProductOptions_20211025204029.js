const ProductOptions = ({ name, values, selectedOptions}) => {
   return (
      <fieldset>
         <legend className="text-xl font-semibold">{name}</legend>
         <div className="inline-flex items-center "></div>
      </fieldset>
   )
}

export default ProductOptions
