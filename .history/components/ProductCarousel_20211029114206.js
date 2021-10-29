import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product }) => {
  console.log('product', product);

  const imageSrc = product.options
    .map((option) =>
      option.values.map(
        (value) =>
          product.variants.edges.find((variant) =>
            variant.node.selectedOptions.find(
              (selectedOption) => selectedOption.value === value
            )
          ).node.image.originalSrc
      )
    )
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  console.log('imageSrc', imageSrc);

  function handleChange(event) {console.log("lalala", renderIndicator(event))}

  return (
    <div className="relative  mb-10">
      <Carousel
      className="z-0"
        onChange={handleChange}
        //   autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators
        showThumbs={false}
        interval={5000}
        emulateTouch
        selectedItem={1}
        showArrows={false}
      >
        {imageSrc.map((index) => (
          <div className="w-full h-72  from-gray-100 bottom-0 z-auto">
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
