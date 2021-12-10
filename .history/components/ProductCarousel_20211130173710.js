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

  //change carousel index to 0
  const [index, setIndex] = useState(0);
  // const [swipeEnabled, setSwipeEnabled] = useState(false);
  // const [touchEventsSet, setTouchEventsSet] = useState(false);
  useEffect(() => {
    setIndex(0);
  }, [selectedVariant]);

  // useEffect(() => {
  //   if (imageSrc.length) {
  //     const disableScroll = () => {
  //       let carousel = document.querySelector('.carousel');

  //       let startPos;
  //       let endPos;
  //       let isScrolling;
  //       let passedSwipeScrollTolerance = false;

  //       function touchMove(e) {
  //         if (
  //           e.targetTouches.length > 1 ||
  //           (e.scale && e.scale !== 1) ||
  //           !startPos
  //         ) {
  //           return;
  //         }

  //         if (!passedSwipeScrollTolerance && swipeEnabled) {
  //           const touch = e.targetTouches[0];
  //           endPos = {
  //             x: Math.abs(touch.pageX - startPos.x),
  //             y: Math.abs(touch.pageY - startPos.y),
  //           };
  //           passedSwipeScrollTolerance = endPos.x > swipeScrollTolerance;

  //           isScrolling = endPos.x < endPos.y; //When isScrolling it means vertical sliding
  //           if (isScrolling) {
  //             setSwipeEnabled(false);
  //           }
  //         }
  //       }

  //       function touchEnd() {
  //         setSwipeEnabled(true);
  //         passedSwipeScrollTolerance = false;
  //         carousel.removeEventListener('touchmove', touchMove);
  //       }

  //       function touchStart(e) {
  //         const touch = e.targetTouches[0]; //The touches array object gets all the touches on the screen, taking the first touch
  //         startPos = {
  //           x: touch.pageX,
  //           y: touch.pageY,
  //         };

  //         carousel.addEventListener('touchmove', touchMove);
  //       }

  //       if (!touchEventsSet) {
  //         carousel.addEventListener('touchstart', touchStart);
  //         carousel.addEventListener('touchend', touchEnd);
  //         setTouchEventsSet(true);
  //       }

  //       if (!swipeEnabled) {
  //         setSwipeEnabled(true);
  //         passedSwipeScrollTolerance = false;
  //       }
  //     };

  //     disableScroll();
  //   }
  // }, [imageSrc, swipeEnabled]);

  return (
    <div className="relative z-0  mb-10 classes.my__carousel_main">
      <Carousel
        // infiniteLoop
        showStatus={false}
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
        // swipeable={swipeEnabled}
        interval={5000}
        swipeScrollTolerance={100}
        // swipeable={false}
        autoFocus={false}
        selectedItem={index}
        onChange={(index) => setIndex(index)}
        showArrows={false}
      >
        {imageSrc.map((i) => (
          <div
            className="w-full h-110  from-gray-100  bottom-0 relative"
            key={i}
          >
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
