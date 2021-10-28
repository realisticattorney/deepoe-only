import Head from 'next/head';
import { getProductsInCollection } from '../../lib/shopify';
import ProductList from '../../components/ProductList';
import { useRouter } from 'next/router';

export default function Collection({
   //  products
    }) {
//   console.log(products);
  return (
    <div className="">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {products.map(({ node }) => (
        
      ))} */}
      {/* <ProductList products={products} /> */}
    </div>
  );
}

export async function getStaticPaths() {
   const products = await getAllProducts();
   const paths = products.map((product) => ({
     params: { product: String(product.node.handle) },
   }));
 
   return {
     paths,
     fallback: false,
   };
 }


export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);
  return {
    props: {
      product,
    },
  };
}
