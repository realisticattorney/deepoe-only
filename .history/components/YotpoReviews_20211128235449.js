import React from 'react';

const YotpoReviews = ({ atobId, product }) => {
  
   function useForceUpdate(){
      const [value, setValue] = useState(0); // integer state
      return () => setValue(value => value + 1); // update the state to force render
  }

  return (
    <div
      className="yotpo yotpo-main-widget "
      data-product-id={`${atobId}`}
      data-currency="USD"
      data-price={`${product.variants.edges[0].node.priceV2.amount}`}
      data-name={`${product.handle}`}
      data-url={`https://deepoe.com/products/${product.handle}`}
      // data-url={`${atobURL}`}
      data-image-url={`${product.images.edges[0].node.originalSrc}`}
    ></div>
  );
};

export default YotpoReviews;
