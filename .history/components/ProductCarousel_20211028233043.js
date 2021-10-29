import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = ({ product }) => {
  
   const imageSrc = product.options.map(option => option.values.map(value => product.variants.edges.find(variant => variant.node.selectedOptions.find(selectedOption => selectedOption.value === value)).node.image.originalSrc)).flat()
   console.log(imageSrc)
   
  return (
    <div className="relative mb-10">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        <div className="w-full h-72  from-gray-100 bottom-0 z-20">
        {}
        
          {/* <Image
            quality={100}
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-5.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            quality={100}
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-2.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            quality={100}
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-3.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            quality={100}
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-4.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            quality={100}
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-1.jpg"
            alt=""
          />*/}
        </div> 
      </Carousel>
    </div>
  );
};

export default Banner;
