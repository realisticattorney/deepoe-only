import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Script from 'next/script';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="text/javascript"
        src="//staticw2.yotpo.com/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/widget.js"
      >
        {/* {(function e() {
          if (process.browser) {
          var e = document.createElement('script');
          (e.type = 'text/javascript'),
            (e.async = true),
            (e.src =
              '//staticw2.yotpo.com/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/widget.js');
          var t = document.getElementsByTagName('script')[0];
          t.parentNode.insertBefore(e, t);
          }
        })()} */}
      </Script>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  return {
    props: { products },
  };
}
