const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: 'post',
    headers: {
      // gotten from https://shopify.dev/api/storefront/getting-started
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error('Product not fetched' + error);
  }
}

export async function getProductsInCollection() {
  const query = `
   {
      collectionByHandle(handle: "frontpage"){
        title
        products(first: 25) {
          edges{
            node{
                   id
              title
              handle
              priceRange{
               minVariantPrice {
                 amount
               }
             }
              images(first: 5){
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);
  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `
   {
      products(first: 25) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
    `;

  const response = await ShopifyData(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = `
   {
      product(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 5) {
          edges{
            node{
              originalSrc	
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 24) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);
  const product = response.data.product ? response.data.product : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query = `
  mutation {
    checkoutCreate(input: {
      lineItems: [{variantId: "${id}"
  , quantity: ${quantity}}]
    }) {
      checkout {
        id
        webUrl
      }
    }
  }`;

  const response = await ShopifyData(query);
  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];
  return checkout;
}


export async function updateCheckout(id, lineItemId) {
  const lineItemsObject = lineItems.map(item => {
    return `{
      variantId: "${item.variantId}"
      quantity: ${item.quantity}
    
    }`
}