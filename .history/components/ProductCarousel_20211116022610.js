import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product, selectedVariant }) => {
  console.log('product', product);
  const imageSrc = [selectedVariant.image];
  const imageColorSrc = product.images.edges
    .filter(
      (node) =>
        node.node.altText === selectedVariant.options.Color ||
        node.node.altText === 'All'
    )
    .map((node) => node.node.originalSrc);
    
  const lalala = imageColorSrc.sort((a, b) => a.node.altText.length - b.length);
  const imageSrcArray = imageSrc.concat(imageColorSrc);

  console.log('selectedVariant', selectedVariant);

  // function handleChange(event) {}

  return (
    <div className="relative z-0  mb-10">
      <Carousel
        // onChange={handleChange}
        //   autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        showThumbs={false}
        interval={5000}
        emulateTouch
        selectedItem={0}
        showArrows={false}
      >
        {imageSrcArray.map((index) => (
          <div className="w-full h-72  from-gray-100 bottom-0">
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              key={index}
              src={index}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;