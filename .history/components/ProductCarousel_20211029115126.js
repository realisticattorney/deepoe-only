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

  function renderIndicator(event) {
    console.log('lalala', event);
  }
  const indicatorStyles = {
    display: 'inline-block',
    marginRight: '10px',
    color: '#fff',
    cursor: 'pointer',
  };
  
  return (
    <div className="relative  mb-10">
      <Carousel
        renderIndicator={(
          // it will render inside an ul element
          <li
            style={{ ...indicatorStyles, opacity: isSelected ? '1' : '0.7' }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {/* render the number instead of a box*/}
            {index + 1}
          </li>
        )}
        showThumbs={false}
  showStatus={false}
  infiniteLoop
  // gives it a component
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
