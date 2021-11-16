import ProductPageContent from '../../../components/ProductPageContent';
import { getProduct, getProductFromCollections } from '../../../lib/shopify';

const Product = ({ collection, product }) => {
  console.log('proooooodcut', product);
  return (
    <div className={`min-h-screen py-2`}>
      {/* <div
        className={`yotpo yotpo-main-widget`}
        data-product-id={`SKU/${product.id}`}
        data-price={`${product.id}`}
        data-currency={`${product.variants.edges[0].node.priceV2.amount}`}
        data-name={`${product.handle}`}
        data-url={`/collections/frontpage/${product.handle}`}
        data-image-url={`${product.variants.edges[0].node.image}`}
      ></div> */}
      <div
        id="stamped-main-widget"
        data-product-id={`${product.id}`}
        data-name={`${product.title}`}
        data-url={`https://deepoedevstore.myshopify.com/${collection}/products/${product.handle}`}
        data-description={`${product.description}`}
        data-product-sku={`SKU/${product.handle}`}
        data-product-title={`${product.id}`}
        data-product-type="{{product.type}}"
      >
        {product.metafields?.stamped?.reviews}
      </div>
      <ProductPageContent product={product} collection={collection} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const products = await getProductFromCollections();
  const getAllCombinations = (collections) => {
    const combinations = [];
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const products = collection.node.products.edges;
      for (let j = 0; j < products.length; j++) {
        const product = products[j];
        combinations.push({
          params: {
            collection: collection.node.handle,
            product: product.node.handle,
          },
        });
      }
    }
    return combinations;
  };
  const paths = getAllCombinations(products);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);
  console.log(params);
  return {
    props: {
      collection: params.collection,
      product,
    },
  };
}
