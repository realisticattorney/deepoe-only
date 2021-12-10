import React from 'react';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CartContext } from '../context/shopContext';
import Router from 'next/router';
import { useRouter } from 'next/router';
const YotpoReviews = ({ atobId, product }) => {
  const { reload, setReload } = useContext(CartContext);
  const router = useRouter();

//   useEffect(() => {
  if (reload === false && router.pathname === '/products/[product]') {
     console.log("its trueeee", reload);
   //   Router.reload()
     setReload(true);
  }
}, [reload]);
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
