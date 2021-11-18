const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  // console.log(quantityAvailable)
  // console.log(setOptions)
  // console.log("kakakakaka",selectedOptions)

  return (
    <fieldset>
      {/* <legend className="text-xl font-semibold">{name}</legend> */}
      <div className="inline-flex items-center flex-wrap">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                type="radio"
                className="sr-only"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              {name === 'Color' ? (
                <div
                  className={`border p-0.5 mx-0.5 border-deepoe-chocolate rounded-full ${
                    checked ? 'border-deepoe-chocolate' : 'border-none'
                  }`}
                >
                  <div
                    className={`p-3.5  text-lg rounded-full block cursor-pointer
                  
                  ${value == 'Black' ? 'bg-gray-900' : ''}
                  ${value == 'Grey' || value == 'Gray' ? 'bg-gray-600' : ''}
                  ${value == 'White' ? 'bg-white' : ''}
                  ${value == 'Olive' ? 'bg-green-600' : ''}`}
                  ></div>
                </div>
              ) : null}
              {name === 'Size' ? (
                <div
                  className={`p-1 my-2 text-xs rounded-full block cursor-pointer mr-2 ${
                    checked
                      ? 'text-white bg-gray-900 '
                      : 'text-gray-900 bg-deepoe-cream'
                  }`}
                >
                  <span className="px-2">{value}</span>
                </div>
              ) : null}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
