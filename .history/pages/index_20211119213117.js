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
        <div className="absolute w-full h-full top-0 left-0 z">
          <Link href="/collections/frontpage" passHref>
            <a href="">
              <Image
                src="/deepoeHome2.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
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
