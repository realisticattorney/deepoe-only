import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-deepoe-cream">
        <div className="absolute w-full h-96 top-0 left-0">
          <Link href="/collections/all-products" passHref>
            <a href="">
              <Image
                src="/deepoeHome.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition=""
                className=""
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductsInCollection('frontpage');

//   return {
//     props: { products },
//   };
// }
