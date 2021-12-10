import React from 'react';
import ProductList from './ProductList';
import HomeCarousel from './HomeCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const HomeMain = ({ products, carouselProducts }) => {
  const [selectedItem, setSelectedItem] = useState(9);

  return (
    <div className="w-full  overflow-hidden">
      <div className="relative h-65">
        <Image
          src="/homepageBanner2.png"
          layout="fill"
          objectFit="cover"
          quality={85}
        />
        <h2
          className={`text-3xl md:text-4xl  text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 mb-6 md:w-145 text-center 
            `}
        >
          Considered materials, lively design.
        </h2>
        <a href={`https://deepoe.com/collections/frontpage`} rel="noreferrer">
          <p className="text-white text-sm absolute  font-light text-center right-0 mr-auto mb-6 bottom-0 left-0 ml-auto w-40 underline font-mono">
            Shop All Products
          </p>
        </a>
      </div>
      <div className="px-6 my-6 md:my-9 w-full relative md:w-145 md:mx-auto">
        <Image
          src="/deepoeHome3.jpg"
          layout="responsive"
          width={378}
          height={284}
          quality={70}
          objectFit="contain"
        />

        <button
          className="absolute top-2/5 lg:top-3/7 left-1/13 "
          onClick={() => {
            if (selectedItem % 3 === 0 || selectedItem === 0) {
              setSelectedItem(selectedItem + 1);
            } else if (selectedItem % 3 === 2 || selectedItem === 2) {
              setSelectedItem(selectedItem - 1);
            } else {
              setSelectedItem(selectedItem);
            }
          }}
        >
          <div className="w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white">
            1
          </div>
        </button>
        <button
          className="absolute top-1/9 md:top-1/11 left-3/7 "
          onClick={() => {
            if (selectedItem % 3 === 0 || selectedItem === 0) {
              setSelectedItem(selectedItem - 1);
            } else if (selectedItem % 3 === 1 || selectedItem === 1) {
              setSelectedItem(selectedItem + 1);
            } else {
              setSelectedItem(selectedItem);
            }
          }}
        >
          <div className="w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white">
            2
          </div>
        </button>
        <button
          className="absolute top-2/3 left-2/3 "
          onClick={() => {
            if (selectedItem % 3 === 1 || selectedItem === 1) {
              setSelectedItem(selectedItem - 1);
            } else if (selectedItem % 3 === 2 || selectedItem === 2) {
              setSelectedItem(selectedItem + 1);
            } else {
              setSelectedItem(selectedItem);
            }
          }}
        >
          <div className="w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white">
            3
          </div>
        </button>
      </div>
      <div className="w-screen"></div>
      <h2 className="text-center font-mono text-xl -mt-1.5 md:text-2xl md:my-2 md:-mt-2 md:font-light text-deepoe_default-black">
        Shop this table
      </h2>
      <HomeCarousel
        carouselProducts={carouselProducts}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="lg:w-screen xl:hidden"></div>
      <h2 className="text-center w-64 lg:w-130 lg:text-3xl lg:font-extralight mx-auto font-light font-mono text-xl lg:px-20">
        We create and curate designs for your home and our shared one
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:max-w-screen-lg  mx-6 lg:mb-4 lg:w-145 lg:px-4 lg:mx-auto">
        <div className="my-6 mt-10 lg:pr-0">
          <div className="lg:w-96 w-full overflow-hidden">
            <div className="relative zero:h-80 fourxs:h-96 xxxs:h-102  xxs:h-105 xxs2:h-107">
              <Image
                src="/people.png"
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto">
          <h2 className="text-center w-full font-light zero:h-80 fourxs:h-96 xxxs:h-102  xxs:h-105 xxs2:h-107 xs:mx-auto leading-6 lg:text-left lg:mt-14  font-mono text-lg lg:pl-10 lg:pr-7">
          What’s a sustainable good? At deepoe, we see sustainability as an ongoing process and a daily challenge. We’re on a journey as we try, with each product and package, to reduce our footprint, increase our knowledge, and head towards a better future.
          </h2>
          <div className="w-full text-center my-6 ">
            <Link href="/deepoe/about">
              <a className="text-deepoe_default-black font-mono underline w-full">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
