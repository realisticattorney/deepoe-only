const imageSrc = imageOptions.product.options.map(option => option.values.map(value => imageOptions.product.variants.edges.find(variant => variant.node.selectedOptions.find(selectedOption => selectedOption.value === value)).node.image.originalSrc))