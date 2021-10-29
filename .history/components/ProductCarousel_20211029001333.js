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
    .flat();
  console.log('imageSrc', imageSrc);

  function handleChange(event) {
   
  }
  

  return (
    <div className="relative mb-10">
      <Carousel onChange={handleChange}
        //   autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
selectedItem(event);
        
      >
        {imageSrc.map((index) => (
          <div className="w-full h-72  from-gray-100 bottom-0 z-20">
            <Image
              quality={100}
              loading="lazy"
              objectFit="cover"
              layout="fill"
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
