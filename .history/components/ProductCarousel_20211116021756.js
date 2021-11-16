import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product , selectedVariant}) => {
  console.log('product', product);

//get from product.images.edges.node.altText the items that match the selectedVariant.options.Color, then the items that match 'All', then flatten the array



  // const imageSrc = product.options
  //   .map((option) =>
  //     option.values.map(
  //       (value) =>
  //         product.variants.edges.find((variant) =>
  //           variant.node.selectedOptions.find(
  //             (selectedOption) => selectedOption.value === value
  //           )
  //         ).node.image.originalSrc
  //     )
  //   )
  //   .flat()
  //   .filter((value, index, self) => self.indexOf(value) === index)
    
  //   // imageSrc.push(selectedVariant.image)

  // console.log('imageSrc', imageSrc);
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