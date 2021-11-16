import { useEffect, useState } from 'react';

const Reviews = () => {
   use
   
   
  useState({
    email: '',
    author: '',
    title: '',
    message: '',
    reviewRating: 0,
    reviews: [],
    showReviewForm: false,
    submitReview() {
      const appKey = props.appKey;
      const productId = state.productId;
      const productTitle = state.productTitle;
      const productUrl = state.productUrl;
      fetch('https://api.yotpo.com/v1/widget/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appkey: appKey,
          sku: productId,
          product_title: productTitle,
          product_url: productUrl,
          display_name: state.author,
          email: state.email,
          review_content: state.message,
          review_title: state.title,
          review_score: state.reviewRating,
        }),
      })
        .then((response) => {
          if (response.status > 199 && response.status < 300) {
            return response;
          }

          const error = new Error('Error submitting review');
          Object.assign({
            response,
          });
          console.error('Error submitting review:', error);
          return error;
        })
        .then(() => {
          state.showReviewForm = false;
          state.fetchReviews();
        });
    },
    fetchReviews() {
      const appKey = props.appKey;
      const productId = props.productId;
      fetch(
        `https://api.yotpo.com/v1/widget/${appKey}/products/${productId}/reviews.json`
      )
        .then((response) => response.json())
        .then(({ response }) => {
          state.reviews = response.reviews;
        });
    },
  });

  useEffect(() => {
    if (!state.productId) {
      const shopifyProduct = window?.ShopifyAnalytics?.meta?.product;

      if (shopifyProduct) {
        state.productId = shopifyProduct.id;
        state.productUrl = `https://${window.Shopify.shop}/products/${shopifyProduct.id}`; // the first part of the variant name is the product title

        state.productTitle = shopifyProduct.variants[0].name;
      }
    }
  }, []);

  if (state.productId) {
    state.fetchReviews();
  } else {
    // add blank state
  }

  return <div></div>;
};

export default Reviews;
