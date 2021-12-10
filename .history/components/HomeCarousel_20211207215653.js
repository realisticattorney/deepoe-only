import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeCarousel = ({ carouselProducts, selectedItem, setSelectedItem }) => {
  // const [selectedItem, setSelectedItem] = useState(9);
  // console.log('selectedItem', selectedItem);
  // setSelectedItem(9);
  useEffect(() => {
    setSelectedItem(10);
  }, []);
  useEffect(() => {
    setSelectedItem(selectedItem);
  }, [selectedItem]);

  const carouselLong = carouselProducts.concat(
    carouselProducts,
    carouselProducts,
    carouselProducts,
    carouselProducts,
    carouselProducts,
    carouselProducts,
    carouselProducts
  );

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const [slidePercentage, setSlidePercentage] = useState(
    (226 / windowSize.width) * 100
  );
  const [slidePercentageLg, setSlidePercentageLg] = useState(
    (226 / windowSize.width) * 100
  );

  useEffect(() => {
    if (selectedItem === 9) {
      setSelectedItem(10);
    }
    if (windowSize.width) {
      let newSlidePercentage = (226 / windowSize.width) * 100;
      setSlidePercentage(newSlidePercentage);
      return slidePercentage;
    }
  }, [windowSize]);

  return (
    <div>
    <div className="relative z-0 mt-4  mb-10 classes.my__carousel_main lg:max-w-screen-lg xxl:max-w-screen-xxl lg:hidden">
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={15}
        autoFocus={false}
        selectedItem={selectedItem}
        centerSlidePercentage={slidePercentage}
        centerMode={true}
        transitionTime={680}
        onChange={(selectedItem) => setSelectedItem(selectedItem)}
        showArrows={false}
      >
        {carouselLong.map((i) => (
          <div
            className="w-53 h-66 from-gray-100  ml-2 bottom-0 relative"
            key={i.number}
          >
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              sizes="47vw"
              objectPosition="center"
              src={i.product}
              alt=""
              className="px-4"
            />
            <h2 className="absolute w-6 h-6 z-50 top-1.5 left-1.5 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200">
              {i.number}
            </h2>

            <a
              className="absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0"
              href={`https://deepoe-only.vercel.app/collections/frontpage/${i.handle}`}
            >
              <p>Details</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
    <div className="relative z-0 mt-4  mb-10 classes.my__carousel_main lg:max-w-screen-lg  hidden lg:block xxl:hidden">
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={15}
        autoFocus={false}
        selectedItem={selectedItem}
        centerSlidePercentage={24.4}
        centerMode={true}
        transitionTime={680}
        onChange={(selectedItem) => setSelectedItem(selectedItem)}
        showArrows={false}
      >
        {carouselLong.map((i) => (
          <div
            className="w-53 h-66 from-gray-100  ml-6 bottom-0 relative"
            key={i.number}
          >
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              sizes="47vw"
              objectPosition="center"
              src={i.product}
              alt=""
              className="px-4"
            />
            <h2 className="absolute w-6 h-6 z-50 top-1.5 left-1.5 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200">
              {i.number}
            </h2>

            <a
              className="absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0"
              href={`https://deepoe-only.vercel.app/collections/frontpage/${i.handle}`}
            >
              <p>Details</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
    <div className="relative z-0 mt-4  mb-10 classes.my__carousel_main xxl:max-w-screen-xxl  hidden xxl:block">
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={15}
        autoFocus={false}
        selectedItem={selectedItem}
        centerSlidePercentage={17.5}
        centerMode={true}
        transitionTime={680}
        onChange={(selectedItem) => setSelectedItem(selectedItem)}
        showArrows={false}
      >
        {carouselLong.map((i) => (
          <div
            className="w-53 h-66 from-gray-100  ml-1 bottom-0 relative"
            key={i.number}
          >
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              sizes="47vw"
              objectPosition="center"
              src={i.product}
              alt=""
              className="px-4"
            />
            <h2 className="absolute w-6 h-6 z-50 top-1.5 left-1.5 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200">
              {i.number}
            </h2>

            <a
              className="absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0"
              href={`https://deepoe-only.vercel.app/collections/frontpage/${i.handle}`}
            >
              <p>Details</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default HomeCarousel;
