import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import Layout from '../components/Layout';
import HomeMain from '../components/HomeMain';

export default function Home({ products, carouselProducts }) {
  return (
    <div>
      <Head>
        <title>Enjoying home, yours and ours | Deepoe</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="0F31tahZUvZJcqhtJJ59K15BctCPq6-MDVyEiWu53ok"
        />
        <meta property="og:image" content="/images/ogg.png" />
        <meta
          name="description"
          content="Conscious, colorful, and sustainable home goods. Considered materials. Lively design."
        />
      </Head>
      <HomeMain products={products} carouselProducts={carouselProducts} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  let carouselProducts = [];

  products.products.edges.map((product) => {
    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY='
    ) {
      carouselProducts[2] = {
        number: 2,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }

    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExMzY1NTA5NzI='
    ) {
      carouselProducts[0] = {
        number: 3,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }
    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MDgxMjg3NDM0ODQ='
    ) {
      carouselProducts[1] = {
        number: 1,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }
  });

  return {
    props: { products, carouselProducts },
  };
}

Home.Layout = Layout;
