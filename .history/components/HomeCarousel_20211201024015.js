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

  return (
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
        centerSlidePercentage={40}
        thumbWidth
        centerMode={true}
        onChange={(selectedItem) => setIndex(selectedItem)}
        showArrows={false}
      >
        {carouselProducts.map((i) => (
          <div
            className="w-full h-64   from-gray-100  bottom-0 relative"
            key={i.number}
          >
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              src={i.product}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
