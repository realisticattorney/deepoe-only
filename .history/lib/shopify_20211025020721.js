const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
   const URL = `https://${domain}/api/2021-10/graphql.json`;

   const options = {
      endpoint : URL,
      method : 'post',
      headers : { // gotten from 
         'X-Shopify-Storefront-Access-Token' : storefrontAccessToken,
}