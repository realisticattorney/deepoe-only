const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  if (selectedOptions.title === 'Default Title' || name === 'Title') {
    return <div className="-mb-3"></div>;
  }

  return (
    <fieldset>
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
                  className={`border p-0.5 mx-0.5  rounded-full ${
                    checked ? 'border-deepoe-chocolate' : 'border-transparent'
                  }
                  ${name === 'Size' ? null : "}`}
                >
                  <div
                    className={`p-3.5  text-lg rounded-full block cursor-pointer
                  
                  ${
                    value == 'Black' || value == 'Forest'
                      ? 'bg-deepoe_default-black'
                      : ''
                  }
                  ${value == 'Grey' || value == 'Gray' ? 'bg-gray-600' : ''}
                  ${value == 'White' ? 'bg-white' : ''}
                  ${value == 'Tangerine' ? 'bg-yellow-500' : ''}
                  ${value == 'Yellow' ? 'bg-yellow-300' : ''}
                  ${value == 'Teal' ? 'bg-green-300' : ''}
                  ${value == 'Magenta' ? 'bg-pink-700' : ''}
                  ${value == 'Olive' || value == 'Moss' ? 'bg-green-600' : ''}`}
                  ></div>
                </div>
              ) : null}
              {name === 'Size' ? (
                <div
                  className={`p-1 my-2 text-sm rounded-full block cursor-pointer mr-2 ${
                    checked
                      ? 'text-deepoe-cream bg-deepoe_default-black'
                      : 'bg-deepoe-cream border border-deepoe_default-black'
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