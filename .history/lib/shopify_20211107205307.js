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

export async function getCollections() {
  const query = `
  { 
    collections(first:25) {
      edges {
        node {
           id,
           handle,
           title,
           description,
           image {
             id
             originalSrc
           }
        	products(first: 1){
            edges{
              node{
                images(first:1){
                  edges{
                    node {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    }  
  }`;

  const response = await ShopifyData(query);
  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return allCollections;
}

export async function getProductsInCollection(handle) {
  const query = `
   {
      collectionByHandle(handle: "${handle}"){
        title
        image {
          id
          originalSrc
        }
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
  const allProducts = response.data.collectionByHandle
    ? response.data.collectionByHandle
    : [];

  return allProducts;
}

export async function getProductFromCollections() {
  const query = `
  { 
    collections(first:25) {
      edges {
        node {
           id,
           handle,
           title,
           description,
           image {
             id
             originalSrc
           }
        	products(first: 25){
            edges{
              node{
                handle
                id
              }
            }
          }
        }
      }
    }  
  }`;

  const response = await ShopifyData(query);
  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return allCollections;
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
              currentlyNotInStock
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
      lineItems: [{variantId: "${id}", quantity: ${quantity} }]
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

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    
    }`;
  });

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId:"${id}"){
      checkout {
        id
        webUrl
        lineItems(first:25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  console.log('response', response);
  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}

export async function customerCreate(input) {
  const query = `
  mutation customerCreate({email: "${input.email}", password: "${input.password}"}\!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }`;
  console.log('query', query);
  const response = await ShopifyData(query);
  console.log('response', response);
  const user = response.data ? response.data : [];

  return user;
}
export async function customerAccessTokenCreate(customerInput) {
  const query = `
  mutation customerAccessTokenCreate($input: ${customerInput}) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }`;

  const response = await ShopifyData(query);
  console.log('response', response);
  const user = response.data ? response.data : [];

  return user;
}
