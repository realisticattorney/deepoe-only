import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-deepoe-cream">
        <div className="max-w-2xl mx-auto ">
          <div className="w-full  overflow-hidden ">
            <div className="relative h-96 -mt-0.7">
              <Image
                src="/deepoeHome.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition=""
                className="mt-1"
              />
            </div>
          </div>
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
