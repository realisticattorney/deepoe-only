const ProductOptions = ({ name, values, selectedOptions}) => {
   return (
      <fieldset>
         <legend className="text-xl font-semibold">{name}</legend>
         <div className="inline-flex items-center flex-wrap">
            {values.map(value => {
               const id = `option-${name}-${value}`;
               const checked = selectedOptions[name] = value;

               return (
                  <label key={id} className="inline-flex items-center mr-4" >
                     <input 
                       type="radio"
                       className="" 
                  </label>
               
            })}
         </div>
      </fieldset>
   )
}

export default ProductOptions
