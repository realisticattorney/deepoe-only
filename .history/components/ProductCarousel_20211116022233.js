import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product , selectedVariant}) => {
  console.log('product', product);
  //get from product.images.edges.node.altText the items that match the selectedVariant.options.Color, then the items that match 'All', then flatten the array
  const imageSrc = product.images.edges.filter(image => image.node.altText.includes(selectedVariant.options.Color) || image.node.altText.includes('All')).map(image => {
    return image.node.originalSrc;
  });
  // console.log('images', images);
  


  
    // const imageSrc = [selectedVariant.image]
  // const selectedColor = selectedVariant.options.Color
  // console.log("selectedColor",selectedColor)
  // const imageColorSrc = product.images.edges.filter(node => node.node.altText === selectedColor || node.node.altText === 'All').map(node => node.node.originalSrc)
  // console.log("imageColorSrc",imageColorSrc)
  // //flat imageColorSrc to an array of onthe originalSrc
  // // console.log("imageColorSrcArray",imageColorSrcArray)
  // //merge imageSrc and imageColorSrcArray
  // const imageSrcArray = imageSrc.concat(imageColorSrc)
  // console.log("imageSrcArray",imageSrcArray)
    
  
  
  



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
        {imageSrc.map((index) => (
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
