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
            <div className="relative h-96">
              <Image
                src="/deepoeHome.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition=""
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
