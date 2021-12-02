import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ carouselProducts, selectedItem }) => {
  //   const imageSrc = [selectedItem.image];
  //   const imageColorSrc = product.images.edges
  //     .filter(
  //       (node) =>
  //         node.node.altText === selectedItem.options.Color ||
  //         node.node.altText === 'All'
  //     )
  //     .sort((a, b) => (a.node.altText > b.node.altText ? -1 : 1))
  //     .map((node) => node.node.originalSrc);

  //   imageSrc.push(...imageColorSrc);

  //change carousel index to 0
  const [index, setIndex] = useState(1);
  console.log('index', index);
  console.log('selectedItem', selectedItem);
  useEffect(() => {
    setIndex(selectedItem);
  }, [selectedItem]);

  // Initialize state with undefined width/height so server and client renders match
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

  const size = useWindowSize;

  console.log('windowSize', size.width);

  return (
    <div className="relative z-0 mt-4  mb-10 classes.my__carousel_main">
      <Carousel
        infiniteLoop
        //   autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={5000}
        swipeScrollTolerance={50}
        autoFocus={false}
        selectedItem={index}
        centerSlidePercentage={85}
        centerMode={true}
        onChange={(selectedItem) => setIndex(selectedItem)}
        showArrows={false}
      >
        {carouselProducts.map((i) => (
          <div className="w-11/12">
            <div
              className="w-full h-64 from-gray-100  bottom-0 relative"
              key={i.number}
            >
              <Image
                quality={100}
                loading="lazy"
                objectFit="cover"
                layout="fill"
                // height={268}
                sizes="47vw"
                // width="47vw"
                // srcSet={}
                objectPosition="center"
                src={i.product}
                alt=""
                className="px-4"
              />
            </div>
            <h2 className="absolute w-6 h-6 z-50 top-1 left-4 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200">
              {i.number}
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
