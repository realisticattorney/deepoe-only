import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ carouselProducts, selectedItem }) => {
  //change carousel index to 0
  const [index, setIndex] = useState(0);
  console.log('index', index);
  console.log('selectedItem', selectedItem);
  useEffect(() => {
    setIndex(selectedItem);
  }, [selectedItem]);

  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  console.log('windowSize', windowSize);
  const [slidePercentage, setSlidePercentage] = useState(
    (226 / windowSize.width) * 100
  );
  console.log('slidePercentage', slidePercentage);

  useEffect(() => {
    if (windowSize.width) {
      let newSlidePercentage = (226 / windowSize.width) * 100;
      setSlidePercentage(newSlidePercentage);
      console.log('slidePercentage', slidePercentage);
      return slidePercentage;
    }
  }, [windowSize]);

  return (
    <div className="relative z-0 mt-4  mb-10 classes.my__carousel_main">
      <Carousel
        infiniteLoop
        // autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={50}
        autoFocus={false}
        selectedItem={index}
        centerSlidePercentage={slidePercentage}
        centerMode={true}
        onChange={(selectedItem) => setIndex(selectedItem)}
        showArrows={false}
      >
        {carouselProducts.map((i) => (
          
            <div className="w-53 h-66 from-gray-100  ml-2 bottom-0 relative" key={i.number}>
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
            <h2 className="absolute w-6 h-6 z-50 top-1 left-4 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200">
              {i.number}
            </h2>

            <a
              className="absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0"
              href={`https://deepoe-only.vercel.app/collections/frontpage/${i.handle}`}
            >
              <p>Details</p>
            </a>
          </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;