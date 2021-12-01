import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
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
            </div>
          </div>
        </div>

        <h2 className="text-center font-mono text-lg">Shop this table</h2>

          <div className="relative z-0  mb-10 classes.my__carousel_main">
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={50}
        autoFocus={false}
        selectedItem={index}
        onChange={(index) => setIndex(index)}
        showArrows={false}
      >
        {imageSrc.map((i) => (
          <div
            className="w-full h-110  from-gray-100  bottom-0 relative"
            key={i}
          >
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              src={i}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
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
