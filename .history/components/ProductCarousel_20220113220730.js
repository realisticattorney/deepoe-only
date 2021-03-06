import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product, selectedVariant }) => {
  const imageSrc = [selectedVariant.image];
  const imageColorSrc = product.images.edges
    .filter(
      (node) =>
        node.node.altText === selectedVariant.options.Color ||
        node.node.altText === 'All'
    )
    .sort((a, b) => (a.node.altText > b.node.altText ? -1 : 1))
    .map((node) => node.node.originalSrc);

  imageSrc.push(...imageColorSrc);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  //change carousel index to 0
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, [selectedVariant]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  if (windowSize.width < 768) {
    return (
      <div className="relative z-0  mb-10 classes.my__carousel_main md:hidden">
        <Carousel
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          preventMovementUntilSwipeScrollTolerance={true}
          interval={5000}
          swipeable={true}
          swipeScrollTolerance={50}
          autoFocus={false}
          selectedItem={index}
          onChange={(index) => setIndex(index)}
          showArrows={false}
        >
          {imageSrc.map((i) => (
            <div
              className="w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative"
              key={i}
            >
              <Image
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
    );
  } else if (windowSize.width > 768) {
    return (
      <div className="relative z-0  mb-10 classes.my__carousel_main hidden md:block">
        <Carousel
          // infiniteLoop
          // autoPlay={true}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          preventMovementUntilSwipeScrollTolerance={true}
          interval={5000}
          // swipeable={true}
          // swipeScrollTolerance={50}
          autoFocus={false}
          selectedItem={index}
          onChange={(index) => setIndex(index)}
        >
          {imageSrc.map((i) => (
            <div
              className="w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative"
              key={i}
            >
              <Image
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
    );
  } else {
    return (
      <div>
        <div className="relative z-0  mb-10 classes.my__carousel_main md:hidden">
          <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={5000}
            swipeable={true}
            swipeScrollTolerance={50}
            autoFocus={false}
            selectedItem={index}
            onChange={(index) => setIndex(index)}
            showArrows={false}
          >
            {imageSrc.map((i) => (
              <div
                className="w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative"
                key={i}
              >
                <Image
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
        <div className="relative z-0  mb-10 classes.my__carousel_main hidden md:block">
          <Carousel
            infiniteLoop
            autoPlay={true}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={5000}
            swipeable={true}
            swipeScrollTolerance={50}
            autoFocus={false}
            selectedItem={index}
            onChange={(index) => setIndex(index)}
          >
            {imageSrc.map((i) => (
              <div
                className="w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative"
                key={i}
              >
                <Image
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
    );
  }
};

export default Banner;
