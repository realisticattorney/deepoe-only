import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import HomeCarousel from '../components/HomeCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full  overflow-hidden">
        <div className="relative h-64">
          <Image
            src={products.image.originalSrc}
            layout="fill"
            objectFit="cover"
          />
          <h2
            className={`text-3xl text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 mb-6 text-center 
              `}
          >
            Considered materials, lively design.
          </h2>
          <a
            href={`https://deepoe-only.vercel.app/collections/frontpage`}
            rel="noreferrer"
          >
            <p className="text-white text-sm absolute  font-light text-center right-0 mr-auto mb-4 bottom-0 left-0 ml-auto w-40 underline font-mono">
              Shop All Products
            </p>
          </a>
        </div>
        <div className="px-6 my-6">
          <div className="w-full  overflow-hidden">
            <div className="relative h-110">
              <Image
                src="/newHome.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
              <div class="py-24 flex items-center justify-center bg-gray-200 space-x-8">
                <div class="relative w-12 h-12 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center font-mono text-lg">Shop this table</h2>
        {/* <HomeCarousel products={products}  /> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  return {
    props: { products },
  };
}
