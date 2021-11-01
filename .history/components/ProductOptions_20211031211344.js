const ProductOptions = ({
  name,
  values,
  selectedOptions,
  setOptions,
  // quantityAvailable,
  // currentlyNotInStock,
}) => {

  // console.log(quantityAvailable)
  // console.log(setOptions)
  
  
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
                  className={`p-3.5 border-1.5 text-lg rounded-full block cursor-pointer mr-3 ${
                    checked ? 'border-gray-800' : 'border-gray-300'
                  }
                  ${value == 'Black' ? 'bg-gray-900 border-yellow-200' : ''}
                  ${
                    value == 'Grey' || value == 'Gray'
                      ? 'bg-gray-600 border-black'
                      : ''
                  }
                  ${
                    value == 'White'
                      ? 'bg-white border-black'
                      : ''
                  }
                  ${value == 'Olive' ? 'bg-green-600 border-black' : ''}`}
                ></div>
              ) : null}
              {name === 'Size' ? (
                <div
                  className={`p-1 my-2 text-xs rounded-full block cursor-pointer mr-2 ${
                    checked
                      ? 'text-white bg-gray-900 '
                      : 'text-gray-900 bg-gray-200'
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
