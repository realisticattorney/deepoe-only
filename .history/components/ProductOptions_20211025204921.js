const ProductOptions = ({ name, values, selectedOptions }) => {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = (selectedOptions[name] = value);

          return (
            <label key={id} htmlFor={id}>
              <input
                type="radio"
                className="sr-only"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
              />
              <div className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 `}></div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
