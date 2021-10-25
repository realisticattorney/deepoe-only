const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
   const URL = `https://${domain}/api/2021-10/graphql.json`;

   const options = {
      endpoint : URL,
      method : 'post',
      headers : { // gotten from https://shopify.dev/api/storefront/getting-started
         'X-Shopify-Storefront-Access-Token' : storefrontAccessToken,
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body : JSON.stringify({ query })
   }

   try {
      const data = await fetch(URL, options).then(response => response.json());
      return data;
   } catch (error) {
      console.log(error);
      
   }
}