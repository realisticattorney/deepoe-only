import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product, selectedVariant }) => {
  // console.log('product', product);
  // console.log('selectedVariant', selectedVariant);
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

  //change carousel index to 0
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [selectedVariant]);

  return (
    <div className="relative z-0  mb-10">
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        emulateTouch
        autoFocus
        selectedItem={index}
        onChange={(index) => setIndex(index)}
        showArrows={true}
        on
      >
        {imageSrc.map((i) => (
          <div className="w-full h-72  from-gray-100  bottom-0 relative" key={i}>
            <Image
              quality={100}
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
};

export default Banner;
