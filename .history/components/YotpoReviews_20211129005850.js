import React from 'react';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CartContext } from '../context/shopContext';
import Router from 'next/router';
import { useRouter } from 'next/router';
const YotpoReviews = ({ atobId, product }) => {
  const router = useRouter();
   // let reloadCount = 1
  useEffect(() => {
   if(reloadCount < 2) {
     sessionStorage.setItem('reloadCount', String(reloadCount + 1));
     window.location.reload();
   } else {
     sessionStorage.removeItem('reloadCount');
   }
 }, []);

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
