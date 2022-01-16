const ProductOptions = ({
  name,
  values,
  selectedOptions,
  setOptions,
  variantsHexArray2,
}) => {
  if (selectedOptions.title === 'Default Title' || name === 'Title') {
    return <div className="-mb-3"></div>;
  }
  console.log('lalalalalala', values);
  console.log('name', name);
  console.log('selectedOptions', selectedOptions);
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
                  ${name === 'Size' ? null : '-mt-2'}`}
                >
                  <div
                    className={`p-3.5  text-lg rounded-full block cursor-pointer`}
                    {...(value == variantsHexArray2[0]?.variantColor ? { style: { backgroundColor: `#${variantsHexArray2[0]?.hex}` } } : null)}
                    {...(value == variantsHexArray2[1]?.variantColor ? { style: { backgroundColor: `#${variantsHexArray2[1]?.hex}` } } : null)}
                    {...(value == variantsHexArray2[2]?.variantColor ? { style: { backgroundColor: `#${variantsHexArray2[1]?.hex}` } } : null)}
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
// ${
//   value == 'Black' || value == 'Forest'
//     ? 'bg-deepoe_default-black'
//     : ''
// }
// ${value == 'Grey' || value == 'Gray' ? 'bg-gray-600' : ''}
// ${value == 'White' ? 'bg-white' : ''}
// ${value == 'Tangerine' ? 'bg-deepoe-tangerine' : ''}
// ${value == 'Yellow' ? 'bg-deepoe-mustard' : ''}
// ${value == 'Teal' ? 'bg-deepoe-teal' : ''}
// ${value == 'Magenta' ? 'bg-pink-700' : ''}
// ${
//   value == 'Olive' || value == 'Moss' ? 'bg-deepoe-moss' : ''
// }