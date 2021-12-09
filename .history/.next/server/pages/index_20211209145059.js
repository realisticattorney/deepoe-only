(() => {
  var exports = {};
  exports.id = 'pages/index';
  exports.ids = ['pages/index'];
  exports.modules = {
    /***/ './components/HomeCarousel.js':
      /*!************************************!*\
  !*** ./components/HomeCarousel.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! next/image */ './node_modules/next/image.js');
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_image__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react-responsive-carousel */ 'react-responsive-carousel'
          );
        /* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-responsive-carousel/lib/styles/carousel.min.css */ './node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
          );
        /* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\HomeCarousel.js';

        const HomeCarousel = ({
          carouselProducts,
          selectedItem,
          setSelectedItem,
        }) => {
          // const [selectedItem, setSelectedItem] = useState(9);
          // console.log('selectedItem', selectedItem);
          // setSelectedItem(9);
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            setSelectedItem(10);
          }, []);
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            setSelectedItem(selectedItem);
          }, [selectedItem]);
          const carouselLong = carouselProducts.concat(
            carouselProducts,
            carouselProducts,
            carouselProducts,
            carouselProducts,
            carouselProducts,
            carouselProducts,
            carouselProducts
          );
          const { 0: windowSize, 1: setWindowSize } = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)({
            width: undefined,
            height: undefined,
          });
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            if (false) {
            }
          }, []);
          const { 0: slidePercentage, 1: setSlidePercentage } = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(
            (226 / windowSize.width) * 100
          );
          const { 0: slidePercentageLg, 1: setSlidePercentageLg } = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(
            (226 / windowSize.width) * 100
          );
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            if (selectedItem === 9) {
              setSelectedItem(10);
            }

            if (windowSize.width) {
              let newSlidePercentage = (226 / windowSize.width) * 100;
              setSlidePercentage(newSlidePercentage);
              return slidePercentage;
            }
          }, [windowSize]);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            'div',
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  'div',
                  {
                    className:
                      'relative z-0 mt-4  mb-10 classes.my__carousel_main  md:hidden',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
                      {
                        infiniteLoop: true,
                        showStatus: false,
                        showThumbs: false,
                        showIndicators: false,
                        preventMovementUntilSwipeScrollTolerance: true,
                        interval: 5000,
                        swipeScrollTolerance: 15,
                        autoFocus: false,
                        selectedItem: selectedItem,
                        centerSlidePercentage: slidePercentage,
                        centerMode: true,
                        transitionTime: 680,
                        onChange: (selectedItem) =>
                          setSelectedItem(selectedItem),
                        showArrows: false,
                        children: carouselLong.map((i) =>
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-53 h-66 from-gray-100  ml-2 bottom-0 relative',
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                  {
                                    quality: 100,
                                    loading: 'lazy',
                                    objectFit: 'cover',
                                    layout: 'fill',
                                    sizes: '47vw',
                                    objectPosition: 'center',
                                    src: i.product,
                                    alt: '',
                                    className: 'px-4',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 90,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  'h2',
                                  {
                                    className:
                                      'absolute w-6 h-6 z-50 top-1.5 left-1.5 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200',
                                    children: i.number,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 101,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  'a',
                                  {
                                    className:
                                      'absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0',
                                    href: `https://deepoe.com/collections/frontpage/${i.handle}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      'p',
                                      {
                                        children: 'Details',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 109,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 105,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            i.number,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 86,
                              columnNumber: 13,
                            },
                            undefined
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  'div',
                  {
                    className:
                      'relative z-0 mt-4  mb-10 classes.my__carousel_main md:w-145  hidden md:block md:mx-auto',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
                      {
                        infiniteLoop: true,
                        showStatus: false,
                        showThumbs: false,
                        showIndicators: false,
                        preventMovementUntilSwipeScrollTolerance: true,
                        interval: 5000,
                        swipeScrollTolerance: 15,
                        autoFocus: false,
                        selectedItem: selectedItem,
                        centerSlidePercentage: 33.5,
                        centerMode: true,
                        transitionTime: 680,
                        onChange: (selectedItem) =>
                          setSelectedItem(selectedItem),
                        showArrows: false,
                        children: carouselLong.map((i) =>
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-53 h-66 from-gray-100  ml-6  bottom-0 relative',
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                  {
                                    quality: 100,
                                    loading: 'lazy',
                                    objectFit: 'cover',
                                    layout: 'fill',
                                    sizes: '47vw',
                                    objectPosition: 'center',
                                    src: i.product,
                                    alt: '',
                                    className: 'px-4',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 184,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  'h2',
                                  {
                                    className:
                                      'absolute w-6 h-6 z-50 top-1.5 left-1.5 text-md  font-extralight font-mono rounded-full flex justify-center items-center text-center p-3.5 bg-gray-200',
                                    children: i.number,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 195,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  'a',
                                  {
                                    className:
                                      'absolute w-full pr-1 z-50 bottom-3 font-mono font-extralight underline text-deepoe_default-black left-0',
                                    href: `https://deepoe.com/collections/frontpage/${i.handle}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      'p',
                                      {
                                        children: 'Details',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 203,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 199,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            i.number,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 180,
                              columnNumber: 13,
                            },
                            undefined
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HomeCarousel;

        /***/
      },

    /***/ './components/HomeMain.js':
      /*!********************************!*\
  !*** ./components/HomeMain.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./ProductList */ './components/ProductList.js'
          );
        /* harmony import */ var _HomeCarousel__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./HomeCarousel */ './components/HomeCarousel.js'
          );
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/image */ './node_modules/next/image.js');
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_image__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! next/link */ './node_modules/next/link.js');
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\HomeMain.js';

        const HomeMain = ({ products, carouselProducts }) => {
          const { 0: selectedItem, 1: setSelectedItem } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(9);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            'div',
            {
              className: 'w-full  overflow-hidden',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'div',
                  {
                    className: 'relative h-65',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        next_image__WEBPACK_IMPORTED_MODULE_3___default(),
                        {
                          src: '/homepageBanner2.png',
                          layout: 'fill',
                          objectFit: 'cover',
                          quality: 100,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 13,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'h2',
                        {
                          className: `text-3xl md:text-4xl  text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 mb-6 md:w-145 text-center 
            `,
                          children: 'Considered materials, lively design.',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'a',
                        {
                          href: `https://deepoe.com/collections/frontpage`,
                          rel: 'noreferrer',
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'p',
                            {
                              className:
                                'text-white text-sm absolute  font-light text-center right-0 mr-auto mb-6 bottom-0 left-0 ml-auto w-40 underline font-mono',
                              children: 'Shop All Products',
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 29,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'div',
                  {
                    className:
                      'px-6 my-6 md:my-9 w-full relative md:w-145 md:mx-auto',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        next_image__WEBPACK_IMPORTED_MODULE_3___default(),
                        {
                          src: '/deepoeHome3.jpg',
                          layout: 'responsive',
                          width: 378,
                          height: 284,
                          quality: 100,
                          objectFit: 'contain',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'button',
                        {
                          className: 'absolute top-2/5 lg:top-3/7 left-1/13 ',
                          onClick: () => {
                            if (selectedItem % 3 === 0 || selectedItem === 0) {
                              setSelectedItem(selectedItem + 1);
                            } else if (
                              selectedItem % 3 === 2 ||
                              selectedItem === 2
                            ) {
                              setSelectedItem(selectedItem - 1);
                            } else {
                              setSelectedItem(selectedItem);
                            }
                          },
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white',
                              children: '1',
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 56,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'button',
                        {
                          className: 'absolute top-1/9 md:top-1/11 left-3/7 ',
                          onClick: () => {
                            if (selectedItem % 3 === 0 || selectedItem === 0) {
                              setSelectedItem(selectedItem - 1);
                            } else if (
                              selectedItem % 3 === 1 ||
                              selectedItem === 1
                            ) {
                              setSelectedItem(selectedItem + 1);
                            } else {
                              setSelectedItem(selectedItem);
                            }
                          },
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white',
                              children: '2',
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 72,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'button',
                        {
                          className: 'absolute top-2/3 left-2/3 ',
                          onClick: () => {
                            if (selectedItem % 3 === 1 || selectedItem === 1) {
                              setSelectedItem(selectedItem - 1);
                            } else if (
                              selectedItem % 3 === 2 ||
                              selectedItem === 2
                            ) {
                              setSelectedItem(selectedItem + 1);
                            } else {
                              setSelectedItem(selectedItem);
                            }
                          },
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-6 h-6 font-thin p-4 bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center  shadow-xl text-white',
                              children: '3',
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 88,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'div',
                  {
                    className: 'w-screen',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'h2',
                  {
                    className:
                      'text-center font-mono text-xl -mt-1.5 md:text-2xl md:my-2 md:-mt-2 md:font-light text-deepoe_default-black',
                    children: 'Shop this table',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  _HomeCarousel__WEBPACK_IMPORTED_MODULE_2__.default,
                  {
                    carouselProducts: carouselProducts,
                    selectedItem: selectedItem,
                    setSelectedItem: setSelectedItem,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'div',
                  {
                    className: 'lg:w-screen xl:hidden',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'h2',
                  {
                    className:
                      'text-center w-64 lg:w-130 lg:text-3xl lg:font-extralight mx-auto font-light font-mono text-xl lg:px-20',
                    children:
                      'We create and curate designs for your home and our shared one',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  'div',
                  {
                    className:
                      'lg:grid lg:grid-cols-2 lg:max-w-screen-lg  mx-6 lg:mb-4 lg:w-145 lg:px-4 lg:mx-auto',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'div',
                        {
                          className: 'my-6 mt-10 lg:pr-0',
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'div',
                            {
                              className: 'lg:w-96 w-full overflow-hidden',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                'div',
                                {
                                  className:
                                    'relative zero:h-80 fourxs:h-96   xxs:h-105',
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                    next_image__WEBPACK_IMPORTED_MODULE_3___default(),
                                    {
                                      src: '/people.png',
                                      layout: 'fill',
                                      objectFit: 'contain',
                                      objectPosition: 'top',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 110,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 109,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 108,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'div',
                        {
                          className: 'w-full mx-auto',
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              'h2',
                              {
                                className:
                                  'text-center w-full font-light xs:w-96 xs:mx-auto leading-6 lg:text-left lg:mt-14  font-mono text-lg lg:pl-10 lg:pr-7',
                                children:
                                  'At deepoe, we strive to create an open and honest experience for our customers. We recognize the challenges surrounding sustainability and are working daily to reduce our footprint.',
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 120,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              'div',
                              {
                                className: 'w-full text-center my-6 ',
                                children: /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                  next_link__WEBPACK_IMPORTED_MODULE_4___default(),
                                  {
                                    href: '/deepoe/about',
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      'a',
                                      {
                                        className:
                                          'text-deepoe_default-black font-mono underline w-full',
                                        children: 'About',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 127,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 126,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 125,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HomeMain;

        /***/
      },

    /***/ './components/ProductCard.js':
      /*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! next/link */ './node_modules/next/link.js');
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/image */ './node_modules/next/image.js');
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_image__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../utils/helpers */ './utils/helpers.js');
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! atob */ 'atob');
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            atob__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductCard.js';

        const ProductCard = ({ collection, product }) => {
          const { handle, title } = product.node;
          const { altText, originalSrc } = product.node.images.edges[0].node;
          const price = product.node.priceRange.minVariantPrice.amount;
          const atobURL = atob__WEBPACK_IMPORTED_MODULE_3___default()(
            product.node.id
          );
          const atobId = atobURL.split('Product/')[1];
          console.log('atobId', atobId);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            'a',
            {
              href: `https://deepoe.com/collections/${collection}/${handle}`,
              rel: 'noreferrer',
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                'div',
                {
                  className: 'group px-2 max-w-md mx-auto',
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      'div',
                      {
                        className: ' overflow-hidden',
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          'div',
                          {
                            className: 'relative h-110',
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              next_image__WEBPACK_IMPORTED_MODULE_1___default(),
                              {
                                src: originalSrc,
                                alt: altText,
                                layout: 'fill',
                                objectFit: 'cover',
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 23,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 22,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 21,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      'h3',
                      {
                        className:
                          'mt-2 text-xl font-mono font-light text-deepoe_default-black',
                        children: title,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      'div',
                      {
                        className:
                          'inline-flex items-baseline justify-between w-full reviews-for-collections',
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'p',
                            {
                              className:
                                'mt-1 text-md font-mono font-extralight',
                              children: [
                                _utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatter.format(
                                  price
                                ),
                                ' ',
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 35,
                              columnNumber: 9,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'div',
                            {
                              className: 'yotpo bottomLine inline-flex',
                              'data-yotpo-product-id': `${atobId}`,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 38,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProductCard;

        /***/
      },

    /***/ './components/ProductList.js':
      /*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./ProductCard */ './components/ProductCard.js'
          );
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/image */ './node_modules/next/image.js');
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_image__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductList.js';

        const ProductList = ({ collection, products }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            'div',
            {
              className: ' w-full   overflow-hidden ',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                  'div',
                  {
                    className: 'relative h-60',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                        next_image__WEBPACK_IMPORTED_MODULE_1___default(),
                        {
                          src: products.image.originalSrc,
                          layout: 'fill',
                          objectFit: 'cover',
                          quality: 100,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 7,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                        'h2',
                        {
                          className: `text-5xl text-white absolute left-0 right-0 ml-auto mr-auto top-24 italic font-medium w-80 mb-6 text-center 
              `,
                          children:
                            collection === 'frontpage'
                              ? 'all products'
                              : collection,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 13,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 6,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                  'div',
                  {
                    className: 'px-4 md:px-8 pt-6 xl:px-4 ',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                        'div',
                        {
                          className:
                            'grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xxl:grid-cols-3 ',
                          children: products.products.edges.map((product) =>
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                              _ProductCard__WEBPACK_IMPORTED_MODULE_0__.default,
                              {
                                product: product,
                                collection: collection,
                              },
                              product.node.id,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 24,
                                columnNumber: 13,
                              },
                              undefined
                            )
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 22,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                        'div',
                        {
                          className: 'py-6',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 31,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 5,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProductList; // ${
        //   collection.length === 10 ||
        //   (collection.length === 11 && 'left-18')
        // } ${collection.length === 9 && 'left-16'}
        //  ${collection.length === 4 && 'left-40'} ${
        //   collection.length === 8 && 'left-24'
        // }
        // ${
        //   collection === 'dinnerware' && 'left-24'
        // }
        //  ${collection.length === 7 && 'left-24'}`

        /***/
      },

    /***/ './lib/shopify.js':
      /*!************************!*\
  !*** ./lib/shopify.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCollections: () =>
            /* binding */ getCollections,
          /* harmony export */ getProductsInCollection: () =>
            /* binding */ getProductsInCollection,
          /* harmony export */ getProductFromCollections: () =>
            /* binding */ getProductFromCollections,
          /* harmony export */ getAllProducts: () =>
            /* binding */ getAllProducts,
          /* harmony export */ getProduct: () => /* binding */ getProduct,
          /* harmony export */ createCheckout: () =>
            /* binding */ createCheckout,
          /* harmony export */ updateCheckout: () =>
            /* binding */ updateCheckout,
          /* harmony export */ customerCreate: () =>
            /* binding */ customerCreate,
          /* harmony export */ customerAccessTokenCreate: () =>
            /* binding */ customerAccessTokenCreate,
          /* harmony export */
        });
        /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! graphql-tag */ 'graphql-tag');
        /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            graphql_tag__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @apollo/react-hooks */ '@apollo/react-hooks');
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__
          );
        const domain = 'deepoe.myshopify.com';
        const storefrontAccessToken = '649bd5bb2c898a133db5f3ea6d133941';

        async function ShopifyData(query) {
          const URL = `https://${domain}/api/2021-10/graphql.json`;
          const options = {
            endpoint: URL,
            method: 'post',
            headers: {
              // gotten from https://shopify.dev/api/storefront/getting-started
              'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query,
            }),
          };

          try {
            const data = await fetch(URL, options).then((response) =>
              response.json()
            );
            return data;
          } catch (error) {
            throw new Error('Product not fetched' + error);
          }
        }

        async function getCollections() {
          const query = `
  { 
    collections(first:25) {
      edges {
        node {
           id,
           handle,
           title,
           description,
           image {
             id
             originalSrc
           }
        	products(first: 1){
            edges{
              node{
                images(first:1){
                  edges{
                    node {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    }  
  }`;
          const response = await ShopifyData(query);
          const allCollections = response.data.collections.edges
            ? response.data.collections.edges
            : [];
          return allCollections;
        }
        async function getProductsInCollection(handle) {
          const query = `
   {
      collectionByHandle(handle: "${handle}"){
        title
        image {
          id
          originalSrc
        }
        products(first: 25) {
          edges{
            node{
                   id
              title
              handle
              priceRange{
               minVariantPrice {
                 amount
               } 
             }
              images(first: 5){
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;
          const response = await ShopifyData(query);
          const allProducts = response.data.collectionByHandle
            ? response.data.collectionByHandle
            : [];
          return allProducts;
        }
        async function getProductFromCollections() {
          const query = `
  { 
    collections(first:25) {
      edges {
        node {
           id,
           handle,
           title,
           description,
           image {
             id
             originalSrc
           }
        	products(first: 25){
            edges{
              node{
                handle
                id
              }
            }
          }
        }
      }
    }  
  }`;
          const response = await ShopifyData(query);
          const allCollections = response.data.collections.edges
            ? response.data.collections.edges
            : [];
          return allCollections;
        }
        async function getAllProducts() {
          const query = `
   {
      products(first: 25) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
    `;
          const response = await ShopifyData(query);
          const slugs = response.data.products.edges
            ? response.data.products.edges
            : [];
          return slugs;
        }
        async function getProduct(handle) {
          const query = `
   {
      product(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 30) {
          edges{
            node{
              originalSrc	
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 24) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              currentlyNotInStock
              availableForSale
              compareAtPriceV2{
                amount
              }
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }`;
          const response = await ShopifyData(query);
          const product = response.data.product ? response.data.product : [];
          return product;
        }
        async function createCheckout(id, quantity) {
          const query = `
  mutation {
    checkoutCreate(input: {
      lineItems: [{variantId: "${id}", quantity: ${quantity} }]
    }) {
      checkout {
        id
        webUrl
      }
    }
  }`;
          const response = await ShopifyData(query);
          const checkout = response.data.checkoutCreate.checkout
            ? response.data.checkoutCreate.checkout
            : [];
          return checkout;
        }
        async function updateCheckout(id, lineItems) {
          const lineItemsObject = lineItems.map((item) => {
            return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    
    }`;
          });
          const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId:"${id}"){
      checkout {
        id
        webUrl
        lineItems(first:25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`;
          const response = await ShopifyData(query);
          const checkout = response.data.checkoutLineItemsReplace.checkout
            ? response.data.checkoutLineItemsReplace.checkout
            : [];
          console.log('updateCHeckout', checkout);
          return checkout;
        }
        async function customerCreate(data) {
          console.log('data', data);
          console.log('error', error);
          return data; // console.log('query', query);
          // const response = await ShopifyData(query);
          // console.log('response', response);
          // const user = response.data ? response.data : [];
          // return user;
        }
        async function customerAccessTokenCreate(customerInput) {
          const query = `
  mutation customerAccessTokenCreate($input: ${customerInput}) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }`;
          const response = await ShopifyData(query);
          console.log('response', response);
          const user = response.data ? response.data : [];
          return user;
        }

        /***/
      },

    /***/ './node_modules/next/dist/client/image.js':
      /*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = Image1;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _head = _interopRequireDefault(
          __webpack_require__(/*! ../shared/lib/head */ '../shared/lib/head')
        );

        var _toBase64 = __webpack_require__(
          /*! ../shared/lib/to-base-64 */ '../shared/lib/to-base-64'
        );

        var _imageConfig = __webpack_require__(
          /*! ../server/image-config */ '../server/image-config'
        );

        var _useIntersection = __webpack_require__(
          /*! ./use-intersection */ './node_modules/next/dist/client/use-intersection.js'
        );

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(
                    source,
                    sym
                  ).enumerable;
                })
              );
            }

            ownKeys.forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          }

          return target;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        const loadedImageURLs = new Set();

        if (true) {
          global.__NEXT_IMAGE_IMPORTED = true;
        }

        const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
        const loaders = new Map([
          ['default', defaultLoader],
          ['imgix', imgixLoader],
          ['cloudinary', cloudinaryLoader],
          ['akamai', akamaiLoader],
          ['custom', customLoader],
        ]);
        const VALID_LAYOUT_VALUES = [
          'fill',
          'fixed',
          'intrinsic',
          'responsive',
          undefined,
        ];

        function isStaticRequire(src) {
          return src.default !== undefined;
        }

        function isStaticImageData(src) {
          return src.src !== undefined;
        }

        function isStaticImport(src) {
          return (
            typeof src === 'object' &&
            (isStaticRequire(src) || isStaticImageData(src))
          );
        }

        const {
          deviceSizes: configDeviceSizes,
          imageSizes: configImageSizes,
          loader: configLoader,
          path: configPath,
          domains: configDomains,
        } = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          domains: ['cdn.shopify.com'],
        } || _imageConfig.imageConfigDefault; // sort smallest to largest

        const allSizes = [...configDeviceSizes, ...configImageSizes];
        configDeviceSizes.sort((a, b) => a - b);
        allSizes.sort((a, b) => a - b);

        function getWidths(width, layout, sizes) {
          if (sizes && (layout === 'fill' || layout === 'responsive')) {
            // Find all the "vw" percent sizes used in the sizes prop
            const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
            const percentSizes = [];

            for (let match; (match = viewportWidthRe.exec(sizes)); match) {
              percentSizes.push(parseInt(match[2]));
            }

            if (percentSizes.length) {
              const smallestRatio = Math.min(...percentSizes) * 0.01;
              return {
                widths: allSizes.filter(
                  (s) => s >= configDeviceSizes[0] * smallestRatio
                ),
                kind: 'w',
              };
            }

            return {
              widths: allSizes,
              kind: 'w',
            };
          }

          if (
            typeof width !== 'number' ||
            layout === 'fill' ||
            layout === 'responsive'
          ) {
            return {
              widths: configDeviceSizes,
              kind: 'w',
            };
          }

          const widths = [
            ...new Set( // > This means that most OLED screens that say they are 3x resolution,
              // > are actually 3x in the green color, but only 1.5x in the red and
              // > blue colors. Showing a 3x resolution image in the app vs a 2x
              // > resolution image will be visually the same, though the 3x image
              // > takes significantly more data. Even true 3x resolution screens are
              // > wasteful as the human eye cannot see that level of detail without
              // > something like a magnifying glass.
              // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
              [
                width,
                width * 2,
                /*, width * 3*/
              ].map(
                (w) =>
                  allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1]
              )
            ),
          ];
          return {
            widths,
            kind: 'x',
          };
        }

        function generateImgAttrs({
          src,
          unoptimized,
          layout,
          width,
          quality,
          sizes,
          loader,
        }) {
          if (unoptimized) {
            return {
              src,
              srcSet: undefined,
              sizes: undefined,
            };
          }

          const { widths, kind } = getWidths(width, layout, sizes);
          const last = widths.length - 1;
          return {
            sizes: !sizes && kind === 'w' ? '100vw' : sizes,
            srcSet: widths
              .map(
                (w, i) =>
                  `${loader({
                    src,
                    quality,
                    width: w,
                  })} ${kind === 'w' ? w : i + 1}${kind}`
              )
              .join(', '),
            // It's intended to keep `src` the last attribute because React updates
            // attributes in order. If we keep `src` the first one, Safari will
            // immediately start to fetch `src`, before `sizes` and `srcSet` are even
            // updated by React. That causes multiple unnecessary requests if `srcSet`
            // and `sizes` are defined.
            // This bug cannot be reproduced in Chrome or Firefox.
            src: loader({
              src,
              quality,
              width: widths[last],
            }),
          };
        }

        function getInt(x) {
          if (typeof x === 'number') {
            return x;
          }

          if (typeof x === 'string') {
            return parseInt(x, 10);
          }

          return undefined;
        }

        function defaultImageLoader(loaderProps) {
          const load = loaders.get(configLoader);

          if (load) {
            return load(
              _objectSpread(
                {
                  root: configPath,
                },
                loaderProps
              )
            );
          }

          throw new Error(
            `Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(
              ', '
            )}. Received: ${configLoader}`
          );
        } // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
        // handler instead of the img's onLoad attribute.

        function handleLoading(
          img,
          src,
          layout,
          placeholder,
          onLoadingComplete
        ) {
          if (!img) {
            return;
          }

          const handleLoad = () => {
            if (!img.src.startsWith('data:')) {
              const p = 'decode' in img ? img.decode() : Promise.resolve();
              p.catch(() => {}).then(() => {
                if (placeholder === 'blur') {
                  img.style.filter = 'none';
                  img.style.backgroundSize = 'none';
                  img.style.backgroundImage = 'none';
                }

                loadedImageURLs.add(src);

                if (onLoadingComplete) {
                  const { naturalWidth, naturalHeight } = img; // Pass back read-only primitive values but not the
                  // underlying DOM element because it could be misused.

                  onLoadingComplete({
                    naturalWidth,
                    naturalHeight,
                  });
                }

                if (true) {
                  var ref;

                  if (
                    (ref = img.parentElement) === null || ref === void 0
                      ? void 0
                      : ref.parentElement
                  ) {
                    const parent = getComputedStyle(
                      img.parentElement.parentElement
                    );

                    if (layout === 'responsive' && parent.display === 'flex') {
                      console.warn(
                        `Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`
                      );
                    } else if (
                      layout === 'fill' &&
                      parent.position !== 'relative'
                    ) {
                      console.warn(
                        `Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`
                      );
                    }
                  }
                }
              });
            }
          };

          if (img.complete) {
            // If the real image fails to load, this will still remove the placeholder.
            // This is the desired behavior for now, and will be revisited when error
            // handling is worked on for the image component itself.
            handleLoad();
          } else {
            img.onload = handleLoad;
          }
        }

        function Image1(_param) {
          var {
              src,
              sizes,
              unoptimized = false,
              priority = false,
              loading,
              lazyBoundary = '200px',
              className,
              quality,
              width,
              height,
              objectFit,
              objectPosition,
              onLoadingComplete,
              loader = defaultImageLoader,
              placeholder = 'empty',
              blurDataURL,
            } = _param,
            all = _objectWithoutProperties(_param, [
              'src',
              'sizes',
              'unoptimized',
              'priority',
              'loading',
              'lazyBoundary',
              'className',
              'quality',
              'width',
              'height',
              'objectFit',
              'objectPosition',
              'onLoadingComplete',
              'loader',
              'placeholder',
              'blurDataURL',
            ]);

          let rest = all;
          let layout = sizes ? 'responsive' : 'intrinsic';

          if ('layout' in rest) {
            // Override default layout if the user specified one:
            if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

            delete rest['layout'];
          }

          let staticSrc = '';

          if (isStaticImport(src)) {
            const staticImageData = isStaticRequire(src) ? src.default : src;

            if (!staticImageData.src) {
              throw new Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                  staticImageData
                )}`
              );
            }

            blurDataURL = blurDataURL || staticImageData.blurDataURL;
            staticSrc = staticImageData.src;

            if (!layout || layout !== 'fill') {
              height = height || staticImageData.height;
              width = width || staticImageData.width;

              if (!staticImageData.height || !staticImageData.width) {
                throw new Error(
                  `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                    staticImageData
                  )}`
                );
              }
            }
          }

          src = typeof src === 'string' ? src : staticSrc;
          const widthInt = getInt(width);
          const heightInt = getInt(height);
          const qualityInt = getInt(quality);
          let isLazy =
            !priority && (loading === 'lazy' || typeof loading === 'undefined');

          if (src.startsWith('data:') || src.startsWith('blob:')) {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
            unoptimized = true;
            isLazy = false;
          }

          if (false) {
          }

          if (true) {
            if (!src) {
              throw new Error(
                `Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify(
                  {
                    width,
                    height,
                    quality,
                  }
                )}`
              );
            }

            if (!VALID_LAYOUT_VALUES.includes(layout)) {
              throw new Error(
                `Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(
                  String
                ).join(',')}.`
              );
            }

            if (
              (typeof widthInt !== 'undefined' && isNaN(widthInt)) ||
              (typeof heightInt !== 'undefined' && isNaN(heightInt))
            ) {
              throw new Error(
                `Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`
              );
            }

            if (layout === 'fill' && (width || height)) {
              console.warn(
                `Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`
              );
            }

            if (!VALID_LOADING_VALUES.includes(loading)) {
              throw new Error(
                `Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(
                  String
                ).join(',')}.`
              );
            }

            if (priority && loading === 'lazy') {
              throw new Error(
                `Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`
              );
            }

            if (placeholder === 'blur') {
              if (
                layout !== 'fill' &&
                (widthInt || 0) * (heightInt || 0) < 1600
              ) {
                console.warn(
                  `Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`
                );
              }

              if (!blurDataURL) {
                const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader
                throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(
              ','
            )}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
              }
            }

            if ('ref' in rest) {
              console.warn(
                `Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`
              );
            }

            if ('style' in rest) {
              console.warn(
                `Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`
              );
            }

            const rand = Math.floor(Math.random() * 1000) + 100;

            if (
              !unoptimized &&
              !loader({
                src,
                width: rand,
                quality: 75,
              }).includes(rand.toString())
            ) {
              console.warn(
                `Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` +
                  `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`
              );
            }
          }

          const [setRef, isIntersected] = (0, _useIntersection).useIntersection(
            {
              rootMargin: lazyBoundary,
              disabled: !isLazy,
            }
          );
          const isVisible = !isLazy || isIntersected;
          let wrapperStyle;
          let sizerStyle;
          let sizerSvg;
          let imgStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit,
            objectPosition,
          };
          const blurStyle =
            placeholder === 'blur'
              ? {
                  filter: 'blur(20px)',
                  backgroundSize: objectFit || 'cover',
                  backgroundImage: `url("${blurDataURL}")`,
                  backgroundPosition: objectPosition || '0% 0%',
                }
              : {};

          if (layout === 'fill') {
            // <Image src="i.png" layout="fill" />
            wrapperStyle = {
              display: 'block',
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: 'border-box',
              margin: 0,
            };
          } else if (
            typeof widthInt !== 'undefined' &&
            typeof heightInt !== 'undefined'
          ) {
            // <Image src="i.png" width="100" height="100" />
            const quotient = heightInt / widthInt;
            const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

            if (layout === 'responsive') {
              // <Image src="i.png" width="100" height="100" layout="responsive" />
              wrapperStyle = {
                display: 'block',
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                margin: 0,
              };
              sizerStyle = {
                display: 'block',
                boxSizing: 'border-box',
                paddingTop,
              };
            } else if (layout === 'intrinsic') {
              // <Image src="i.png" width="100" height="100" layout="intrinsic" />
              wrapperStyle = {
                display: 'inline-block',
                maxWidth: '100%',
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                margin: 0,
              };
              sizerStyle = {
                boxSizing: 'border-box',
                display: 'block',
                maxWidth: '100%',
              };
              sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
            } else if (layout === 'fixed') {
              // <Image src="i.png" width="100" height="100" layout="fixed" />
              wrapperStyle = {
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'inline-block',
                position: 'relative',
                width: widthInt,
                height: heightInt,
              };
            }
          } else {
            // <Image src="i.png" />
            if (true) {
              throw new Error(
                `Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`
              );
            }
          }

          let imgAttributes = {
            src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            srcSet: undefined,
            sizes: undefined,
          };

          if (isVisible) {
            imgAttributes = generateImgAttrs({
              src,
              unoptimized,
              layout,
              width: widthInt,
              quality: qualityInt,
              sizes,
              loader,
            });
          }

          let srcString = src;
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              style: wrapperStyle,
            },
            sizerStyle
              ? /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    style: sizerStyle,
                  },
                  sizerSvg
                    ? /*#__PURE__*/ _react.default.createElement('img', {
                        style: {
                          maxWidth: '100%',
                          display: 'block',
                          margin: 0,
                          border: 'none',
                          padding: 0,
                        },
                        alt: '',
                        'aria-hidden': true,
                        src: `data:image/svg+xml;base64,${(0,
                        _toBase64).toBase64(sizerSvg)}`,
                      })
                    : null
                )
              : null,
            /*#__PURE__*/ _react.default.createElement(
              'img',
              Object.assign({}, rest, imgAttributes, {
                decoding: 'async',
                'data-nimg': layout,
                className: className,
                ref: (img) => {
                  setRef(img);
                  handleLoading(
                    img,
                    srcString,
                    layout,
                    placeholder,
                    onLoadingComplete
                  );
                },
                style: _objectSpread({}, imgStyle, blurStyle),
              })
            ),
            /*#__PURE__*/ _react.default.createElement(
              'noscript',
              null,
              /*#__PURE__*/ _react.default.createElement(
                'img',
                Object.assign(
                  {},
                  rest,
                  generateImgAttrs({
                    src,
                    unoptimized,
                    layout,
                    width: widthInt,
                    quality: qualityInt,
                    sizes,
                    loader,
                  }),
                  {
                    decoding: 'async',
                    'data-nimg': layout,
                    style: imgStyle,
                    className: className,
                    loading: loading || 'lazy',
                  }
                )
              )
            ),
            priority // Note how we omit the `href` attribute, as it would only be relevant
              ? // for browsers that do not support `imagesrcset`, and in those cases
                // it would likely cause the incorrect image to be preloaded.
                //
                // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

                /*#__PURE__*/
                _react.default.createElement(
                  _head.default,
                  null,
                  /*#__PURE__*/ _react.default.createElement('link', {
                    key:
                      '__nimg-' +
                      imgAttributes.src +
                      imgAttributes.srcSet +
                      imgAttributes.sizes,
                    rel: 'preload',
                    as: 'image',
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    // @ts-ignore: imagesrcset is not yet in the link element type.
                    imagesrcset: imgAttributes.srcSet,
                    // @ts-ignore: imagesizes is not yet in the link element type.
                    imagesizes: imgAttributes.sizes,
                  })
                )
              : null
          );
        }

        function normalizeSrc(src) {
          return src[0] === '/' ? src.slice(1) : src;
        }

        function imgixLoader({ root, src, width, quality }) {
          // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
          const url = new URL(`${root}${normalizeSrc(src)}`);
          const params = url.searchParams;
          params.set('auto', params.get('auto') || 'format');
          params.set('fit', params.get('fit') || 'max');
          params.set('w', params.get('w') || width.toString());

          if (quality) {
            params.set('q', quality.toString());
          }

          return url.href;
        }

        function akamaiLoader({ root, src, width }) {
          return `${root}${normalizeSrc(src)}?imwidth=${width}`;
        }

        function cloudinaryLoader({ root, src, width, quality }) {
          // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
          const params = [
            'f_auto',
            'c_limit',
            'w_' + width,
            'q_' + (quality || 'auto'),
          ];
          let paramsString = params.join(',') + '/';
          return `${root}${paramsString}${normalizeSrc(src)}`;
        }

        function customLoader({ src }) {
          throw new Error(
            `Image with src "${src}" is missing "loader" prop.` +
              `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`
          );
        }

        function defaultLoader({ root, src, width, quality }) {
          if (true) {
            const missingValues = []; // these should always be provided but make sure they are

            if (!src) missingValues.push('src');
            if (!width) missingValues.push('width');

            if (missingValues.length > 0) {
              throw new Error(
                `Next Image Optimization requires ${missingValues.join(
                  ', '
                )} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify(
                  {
                    src,
                    width,
                    quality,
                  }
                )}`
              );
            }

            if (src.startsWith('//')) {
              throw new Error(
                `Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`
              );
            }

            if (!src.startsWith('/') && configDomains) {
              let parsedSrc;

              try {
                parsedSrc = new URL(src);
              } catch (err) {
                console.error(err);
                throw new Error(
                  `Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`
                );
              }

              if (true && !configDomains.includes(parsedSrc.hostname)) {
                throw new Error(
                  `Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` +
                    `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`
                );
              }
            }
          }

          return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${
            quality || 75
          }`;
        }

        /***/
      },

    /***/ './node_modules/next/dist/client/link.js':
      /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _router = __webpack_require__(
          /*! ../shared/lib/router/router */ './node_modules/next/dist/shared/lib/router/router.js'
        );

        var _router1 = __webpack_require__(
          /*! ./router */ './node_modules/next/dist/client/router.js'
        );

        var _useIntersection = __webpack_require__(
          /*! ./use-intersection */ './node_modules/next/dist/client/use-intersection.js'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        const prefetched = {};

        function prefetch(router, href, as, options) {
          if (true) return;
          if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
          // We need to handle a prefetch error here since we may be
          // loading with priority which can reject but we don't
          // want to force navigation since this is only a prefetch

          router.prefetch(href, as, options).catch((err) => {
            if (true) {
              // rethrow to show invalid URL errors
              throw err;
            }
          });
          const curLocale =
            options && typeof options.locale !== 'undefined'
              ? options.locale
              : router && router.locale; // Join on an invalid URI character

          prefetched[
            href + '%' + as + (curLocale ? '%' + curLocale : '')
          ] = true;
        }

        function isModifiedEvent(event) {
          const { target } = event.currentTarget;
          return (
            (target && target !== '_self') ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            (event.nativeEvent && event.nativeEvent.which === 2)
          );
        }

        function linkClicked(
          e,
          router,
          href,
          as,
          replace,
          shallow,
          scroll,
          locale
        ) {
          const { nodeName } = e.currentTarget;

          if (
            nodeName === 'A' &&
            (isModifiedEvent(e) || !(0, _router).isLocalURL(href))
          ) {
            // ignore click for browser’s default behavior
            return;
          }

          e.preventDefault(); //  avoid scroll for urls with anchor refs

          if (scroll == null && as.indexOf('#') >= 0) {
            scroll = false;
          } // replace state instead of push if prop is present

          router[replace ? 'replace' : 'push'](href, as, {
            shallow,
            locale,
            scroll,
          });
        }

        function Link(props) {
          if (true) {
            function createPropError(args) {
              return new Error(
                `Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` +
                  (false ? 0 : '')
              );
            } // TypeScript trick for type-guarding:

            const requiredPropsGuard = {
              href: true,
            };
            const requiredProps = Object.keys(requiredPropsGuard);
            requiredProps.forEach((key) => {
              if (key === 'href') {
                if (
                  props[key] == null ||
                  (typeof props[key] !== 'string' &&
                    typeof props[key] !== 'object')
                ) {
                  throw createPropError({
                    key,
                    expected: '`string` or `object`',
                    actual: props[key] === null ? 'null' : typeof props[key],
                  });
                }
              } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
              }
            }); // TypeScript trick for type-guarding:

            const optionalPropsGuard = {
              as: true,
              replace: true,
              scroll: true,
              shallow: true,
              passHref: true,
              prefetch: true,
              locale: true,
            };
            const optionalProps = Object.keys(optionalPropsGuard);
            optionalProps.forEach((key) => {
              const valType = typeof props[key];

              if (key === 'as') {
                if (
                  props[key] &&
                  valType !== 'string' &&
                  valType !== 'object'
                ) {
                  throw createPropError({
                    key,
                    expected: '`string` or `object`',
                    actual: valType,
                  });
                }
              } else if (key === 'locale') {
                if (props[key] && valType !== 'string') {
                  throw createPropError({
                    key,
                    expected: '`string`',
                    actual: valType,
                  });
                }
              } else if (
                key === 'replace' ||
                key === 'scroll' ||
                key === 'shallow' ||
                key === 'passHref' ||
                key === 'prefetch'
              ) {
                if (props[key] != null && valType !== 'boolean') {
                  throw createPropError({
                    key,
                    expected: '`boolean`',
                    actual: valType,
                  });
                }
              } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
              }
            }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
            // eslint-disable-next-line react-hooks/rules-of-hooks

            const hasWarned = _react.default.useRef(false);

            if (props.prefetch && !hasWarned.current) {
              hasWarned.current = true;
              console.warn(
                'Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated'
              );
            }
          }

          const p = props.prefetch !== false;
          const router = (0, _router1).useRouter();

          const { href, as } = _react.default.useMemo(() => {
            const [resolvedHref, resolvedAs] = (0, _router).resolveHref(
              router,
              props.href,
              true
            );
            return {
              href: resolvedHref,
              as: props.as
                ? (0, _router).resolveHref(router, props.as)
                : resolvedAs || resolvedHref,
            };
          }, [router, props.href, props.as]);

          let { children, replace, shallow, scroll, locale } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

          if (typeof children === 'string') {
            children = /*#__PURE__*/ _react.default.createElement(
              'a',
              null,
              children
            );
          } // This will return the first child, if multiple are provided it will throw an error

          let child;

          if (true) {
            try {
              child = _react.default.Children.only(children);
            } catch (err) {
              throw new Error(
                `Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` +
                  (false ? 0 : '')
              );
            }
          } else {
          }

          const childRef = child && typeof child === 'object' && child.ref;
          const [setIntersectionRef, isVisible] = (0,
          _useIntersection).useIntersection({
            rootMargin: '200px',
          });

          const setRef = _react.default.useCallback(
            (el) => {
              setIntersectionRef(el);

              if (childRef) {
                if (typeof childRef === 'function') childRef(el);
                else if (typeof childRef === 'object') {
                  childRef.current = el;
                }
              }
            },
            [childRef, setIntersectionRef]
          );

          _react.default.useEffect(() => {
            const shouldPrefetch =
              isVisible && p && (0, _router).isLocalURL(href);
            const curLocale =
              typeof locale !== 'undefined' ? locale : router && router.locale;
            const isPrefetched =
              prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

            if (shouldPrefetch && !isPrefetched) {
              prefetch(router, href, as, {
                locale: curLocale,
              });
            }
          }, [as, href, isVisible, locale, p, router]);

          const childProps = {
            ref: setRef,
            onClick: (e) => {
              if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
              }

              if (!e.defaultPrevented) {
                linkClicked(
                  e,
                  router,
                  href,
                  as,
                  replace,
                  shallow,
                  scroll,
                  locale
                );
              }
            },
          };

          childProps.onMouseEnter = (e) => {
            if (!(0, _router).isLocalURL(href)) return;

            if (child.props && typeof child.props.onMouseEnter === 'function') {
              child.props.onMouseEnter(e);
            }

            prefetch(router, href, as, {
              priority: true,
            });
          }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
          // defined, we specify the current 'href', so that repetition is not needed by the user

          if (
            props.passHref ||
            (child.type === 'a' && !('href' in child.props))
          ) {
            const curLocale =
              typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
            // so that locale links are still visitable in development/preview envs

            const localeDomain =
              router &&
              router.isLocaleDomain &&
              (0, _router).getDomainLocale(
                as,
                curLocale,
                router && router.locales,
                router && router.domainLocales
              );
            childProps.href =
              localeDomain ||
              (0, _router).addBasePath(
                (0, _router).addLocale(
                  as,
                  curLocale,
                  router && router.defaultLocale
                )
              );
          }

          return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/next/dist/client/normalize-trailing-slash.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.removePathTrailingSlash = removePathTrailingSlash;
        exports.normalizePathTrailingSlash = void 0;

        function removePathTrailingSlash(path) {
          return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
        }

        const normalizePathTrailingSlash = false ? 0 : removePathTrailingSlash;
        exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

        /***/
      },

    /***/ './node_modules/next/dist/client/request-idle-callback.js':
      /*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

        const requestIdleCallback =
          (typeof self !== 'undefined' &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (cb) {
            let start = Date.now();
            return setTimeout(function () {
              cb({
                didTimeout: false,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - start));
                },
              });
            }, 1);
          };

        exports.requestIdleCallback = requestIdleCallback;

        const cancelIdleCallback =
          (typeof self !== 'undefined' &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (id) {
            return clearTimeout(id);
          };

        exports.cancelIdleCallback = cancelIdleCallback;

        /***/
      },

    /***/ './node_modules/next/dist/client/route-loader.js':
      /*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.markAssetError = markAssetError;
        exports.isAssetError = isAssetError;
        exports.getClientBuildManifest = getClientBuildManifest;
        exports.createRouteLoader = createRouteLoader;

        var _getAssetPathFromRoute = _interopRequireDefault(
          __webpack_require__(
            /*! ../shared/lib/router/utils/get-asset-path-from-route */ '../shared/lib/router/utils/get-asset-path-from-route'
          )
        );

        var _requestIdleCallback = __webpack_require__(
          /*! ./request-idle-callback */ './node_modules/next/dist/client/request-idle-callback.js'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        } // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
        // considers as "Good" time-to-interactive. We must assume something went
        // wrong beyond this point, and then fall-back to a full page transition to
        // show the user something of value.

        const MS_MAX_IDLE_DELAY = 3800;

        function withFuture(key, map, generator) {
          let entry = map.get(key);

          if (entry) {
            if ('future' in entry) {
              return entry.future;
            }

            return Promise.resolve(entry);
          }

          let resolver;
          const prom = new Promise((resolve) => {
            resolver = resolve;
          });
          map.set(
            key,
            (entry = {
              resolve: resolver,
              future: prom,
            })
          );
          return generator
            ? generator().then((value) => (resolver(value), value))
            : prom;
        }

        function hasPrefetch(link) {
          try {
            link = document.createElement('link');
            return (
              // detect IE11 since it supports prefetch but isn't detected
              // with relList.support
              (!!window.MSInputMethodContext && !!document.documentMode) ||
              link.relList.supports('prefetch')
            );
          } catch (e) {
            return false;
          }
        }

        const canPrefetch = hasPrefetch();

        function prefetchViaDom(href, as, link) {
          return new Promise((res, rej) => {
            if (
              document.querySelector(`link[rel="prefetch"][href^="${href}"]`)
            ) {
              return res();
            }

            link = document.createElement('link'); // The order of property assignment here is intentional:

            if (as) link.as = as;
            link.rel = `prefetch`;
            link.crossOrigin = undefined;
            link.onload = res;
            link.onerror = rej; // `href` should always be last:

            link.href = href;
            document.head.appendChild(link);
          });
        }

        const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

        function markAssetError(err) {
          return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
        }

        function isAssetError(err) {
          return err && ASSET_LOAD_ERROR in err;
        }

        function appendScript(src, script) {
          return new Promise((resolve, reject) => {
            script = document.createElement('script'); // The order of property assignment here is intentional.
            // 1. Setup success/failure hooks in case the browser synchronously
            //    executes when `src` is set.

            script.onload = resolve;

            script.onerror = () =>
              reject(
                markAssetError(new Error(`Failed to load script: ${src}`))
              ); // 2. Configure the cross-origin attribute before setting `src` in case the
            //    browser begins to fetch.

            script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
            //    must be appended for fetching to start.

            script.src = src;
            document.body.appendChild(script);
          });
        } // We wait for pages to be built in dev before we start the route transition
        // timeout to prevent an un-necessary hard navigation in development.

        let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

        function resolvePromiseWithTimeout(p, ms, err) {
          return new Promise((resolve, reject) => {
            let cancelled = false;
            p.then((r) => {
              // Resolved, cancel the timeout
              cancelled = true;
              resolve(r);
            }).catch(reject); // We wrap these checks separately for better dead-code elimination in
            // production bundles.

            if (true) {
              (devBuildPromise || Promise.resolve()).then(() => {
                (0, _requestIdleCallback).requestIdleCallback(() =>
                  setTimeout(() => {
                    if (!cancelled) {
                      reject(err);
                    }
                  }, ms)
                );
              });
            }

            if (false) {
            }
          });
        }

        function getClientBuildManifest() {
          if (self.__BUILD_MANIFEST) {
            return Promise.resolve(self.__BUILD_MANIFEST);
          }

          const onBuildManifest = new Promise((resolve) => {
            // Mandatory because this is not concurrent safe:
            const cb = self.__BUILD_MANIFEST_CB;

            self.__BUILD_MANIFEST_CB = () => {
              resolve(self.__BUILD_MANIFEST);
              cb && cb();
            };
          });
          return resolvePromiseWithTimeout(
            onBuildManifest,
            MS_MAX_IDLE_DELAY,
            markAssetError(new Error('Failed to load client build manifest'))
          );
        }

        function getFilesForRoute(assetPrefix, route) {
          if (true) {
            return Promise.resolve({
              scripts: [
                assetPrefix +
                  '/_next/static/chunks/pages' +
                  encodeURI((0, _getAssetPathFromRoute).default(route, '.js')),
              ],
              // Styles are handled by `style-loader` in development:
              css: [],
            });
          }

          return getClientBuildManifest().then((manifest) => {
            if (!(route in manifest)) {
              throw markAssetError(
                new Error(`Failed to lookup route: ${route}`)
              );
            }

            const allFiles = manifest[route].map(
              (entry) => assetPrefix + '/_next/' + encodeURI(entry)
            );
            return {
              scripts: allFiles.filter((v) => v.endsWith('.js')),
              css: allFiles.filter((v) => v.endsWith('.css')),
            };
          });
        }

        function createRouteLoader(assetPrefix) {
          const entrypoints = new Map();
          const loadedScripts = new Map();
          const styleSheets = new Map();
          const routes = new Map();

          function maybeExecuteScript(src) {
            let prom = loadedScripts.get(src);

            if (prom) {
              return prom;
            } // Skip executing script if it's already in the DOM:

            if (document.querySelector(`script[src^="${src}"]`)) {
              return Promise.resolve();
            }

            loadedScripts.set(src, (prom = appendScript(src)));
            return prom;
          }

          function fetchStyleSheet(href) {
            let prom = styleSheets.get(href);

            if (prom) {
              return prom;
            }

            styleSheets.set(
              href,
              (prom = fetch(href)
                .then((res) => {
                  if (!res.ok) {
                    throw new Error(`Failed to load stylesheet: ${href}`);
                  }

                  return res.text().then((text) => ({
                    href: href,
                    content: text,
                  }));
                })
                .catch((err) => {
                  throw markAssetError(err);
                }))
            );
            return prom;
          }

          return {
            whenEntrypoint(route) {
              return withFuture(route, entrypoints);
            },

            onEntrypoint(route, execute) {
              Promise.resolve(execute)
                .then((fn) => fn())
                .then(
                  (exports) => ({
                    component: (exports && exports.default) || exports,
                    exports: exports,
                  }),
                  (err) => ({
                    error: err,
                  })
                )
                .then((input) => {
                  const old = entrypoints.get(route);
                  entrypoints.set(route, input);
                  if (old && 'resolve' in old) old.resolve(input);
                });
            },

            loadRoute(route, prefetch) {
              return withFuture(route, routes, () => {
                const routeFilesPromise = getFilesForRoute(assetPrefix, route)
                  .then(({ scripts, css }) => {
                    return Promise.all([
                      entrypoints.has(route)
                        ? []
                        : Promise.all(scripts.map(maybeExecuteScript)),
                      Promise.all(css.map(fetchStyleSheet)),
                    ]);
                  })
                  .then((res) => {
                    return this.whenEntrypoint(route).then((entrypoint) => ({
                      entrypoint,
                      styles: res[1],
                    }));
                  });

                if (true) {
                  devBuildPromise = new Promise((resolve) => {
                    if (routeFilesPromise) {
                      return routeFilesPromise.finally(() => {
                        resolve();
                      });
                    }
                  });
                }

                return resolvePromiseWithTimeout(
                  routeFilesPromise,
                  MS_MAX_IDLE_DELAY,
                  markAssetError(
                    new Error(`Route did not complete loading: ${route}`)
                  )
                )
                  .then(({ entrypoint, styles }) => {
                    const res = Object.assign(
                      {
                        styles: styles,
                      },
                      entrypoint
                    );
                    return 'error' in entrypoint ? entrypoint : res;
                  })
                  .catch((err) => {
                    if (prefetch) {
                      // we don't want to cache errors during prefetch
                      throw err;
                    }

                    return {
                      error: err,
                    };
                  });
              });
            },

            prefetch(route) {
              // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
              // License: Apache 2.0
              let cn;

              if ((cn = navigator.connection)) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType))
                  return Promise.resolve();
              }

              return getFilesForRoute(assetPrefix, route)
                .then((output) =>
                  Promise.all(
                    canPrefetch
                      ? output.scripts.map((script) =>
                          prefetchViaDom(script, 'script')
                        )
                      : []
                  )
                )
                .then(() => {
                  (0, _requestIdleCallback).requestIdleCallback(() =>
                    this.loadRoute(route, true).catch(() => {})
                  );
                })
                .catch(
                  // swallow prefetch errors
                  () => {}
                );
            },
          };
        }

        /***/
      },

    /***/ './node_modules/next/dist/client/router.js':
      /*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'Router', {
          enumerable: true,
          get: function () {
            return _router.default;
          },
        });
        Object.defineProperty(exports, 'withRouter', {
          enumerable: true,
          get: function () {
            return _withRouter.default;
          },
        });
        exports.useRouter = useRouter;
        exports.createRouter = createRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _router = _interopRequireDefault(
          __webpack_require__(
            /*! ../shared/lib/router/router */ './node_modules/next/dist/shared/lib/router/router.js'
          )
        );

        var _routerContext = __webpack_require__(
          /*! ../shared/lib/router-context */ '../shared/lib/router-context'
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ './node_modules/next/dist/client/with-router.js'
          )
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        const singletonRouter = {
          router: null,
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          },
        }; // Create public properties and methods of the router in the singletonRouter

        const urlPropertyFields = [
          'pathname',
          'route',
          'query',
          'asPath',
          'components',
          'isFallback',
          'basePath',
          'locale',
          'locales',
          'defaultLocale',
          'isReady',
          'isPreview',
          'isLocaleDomain',
          'domainLocales',
        ];
        const routerEvents = [
          'routeChangeStart',
          'beforeHistoryChange',
          'routeChangeComplete',
          'routeChangeError',
          'hashChangeStart',
          'hashChangeComplete',
        ];
        const coreMethodFields = [
          'push',
          'replace',
          'reload',
          'back',
          'prefetch',
          'beforePopState',
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        Object.defineProperty(singletonRouter, 'events', {
          get() {
            return _router.default.events;
          },
        });
        urlPropertyFields.forEach((field) => {
          // Here we need to use Object.defineProperty because we need to return
          // the property assigned to the actual router
          // The value might get changed as we change routes and this is the
          // proper way to access it
          Object.defineProperty(singletonRouter, field, {
            get() {
              const router = getRouter();
              return router[field];
            },
          });
        });
        coreMethodFields.forEach((field) => {
          singletonRouter[field] = (...args) => {
            const router = getRouter();
            return router[field](...args);
          };
        });
        routerEvents.forEach((event) => {
          singletonRouter.ready(() => {
            _router.default.events.on(event, (...args) => {
              const eventField = `on${event
                .charAt(0)
                .toUpperCase()}${event.substring(1)}`;
              const _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...args);
                } catch (err) {
                  console.error(
                    `Error when running the Router event: ${eventField}`
                  );
                  console.error(`${err.message}\n${err.stack}`);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            const message =
              'No router instance found.\n' +
              'You should only use "next/router" on the client side of your app.\n';
            throw new Error(message);
          }

          return singletonRouter.router;
        }

        var _default = singletonRouter;
        exports.default = _default;

        function useRouter() {
          return _react.default.useContext(_routerContext.RouterContext);
        }

        function createRouter(...args) {
          singletonRouter.router = new _router.default(...args);
          singletonRouter.readyCallbacks.forEach((cb) => cb());
          singletonRouter.readyCallbacks = [];
          return singletonRouter.router;
        }

        function makePublicRouterInstance(router) {
          const _router1 = router;
          const instance = {};

          for (const property of urlPropertyFields) {
            if (typeof _router1[property] === 'object') {
              instance[property] = Object.assign(
                Array.isArray(_router1[property]) ? [] : {},
                _router1[property]
              ); // makes sure query is not stateful
              continue;
            }

            instance[property] = _router1[property];
          } // Events is a static property on the router, the router doesn't have to be initialized to use it

          instance.events = _router.default.events;
          coreMethodFields.forEach((field) => {
            instance[field] = (...args) => {
              return _router1[field](...args);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ './node_modules/next/dist/client/use-intersection.js':
      /*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.useIntersection = useIntersection;

        var _react = __webpack_require__(/*! react */ 'react');

        var _requestIdleCallback = __webpack_require__(
          /*! ./request-idle-callback */ './node_modules/next/dist/client/request-idle-callback.js'
        );

        const hasIntersectionObserver =
          typeof IntersectionObserver !== 'undefined';

        function useIntersection({ rootMargin, disabled }) {
          const isDisabled = disabled || !hasIntersectionObserver;
          const unobserve = (0, _react).useRef();
          const [visible, setVisible] = (0, _react).useState(false);
          const setRef = (0, _react).useCallback(
            (el) => {
              if (unobserve.current) {
                unobserve.current();
                unobserve.current = undefined;
              }

              if (isDisabled || visible) return;

              if (el && el.tagName) {
                unobserve.current = observe(
                  el,
                  (isVisible) => isVisible && setVisible(isVisible),
                  {
                    rootMargin,
                  }
                );
              }
            },
            [isDisabled, rootMargin, visible]
          );
          (0, _react).useEffect(() => {
            if (!hasIntersectionObserver) {
              if (!visible) {
                const idleCallback = (0,
                _requestIdleCallback).requestIdleCallback(() =>
                  setVisible(true)
                );
                return () =>
                  (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
              }
            }
          }, [visible]);
          return [setRef, visible];
        }

        function observe(element, callback, options) {
          const { id, observer, elements } = createObserver(options);
          elements.set(element, callback);
          observer.observe(element);
          return function unobserve() {
            elements.delete(element);
            observer.unobserve(element); // Destroy observer when there's nothing left to watch:

            if (elements.size === 0) {
              observer.disconnect();
              observers.delete(id);
            }
          };
        }

        const observers = new Map();

        function createObserver(options) {
          const id = options.rootMargin || '';
          let instance = observers.get(id);

          if (instance) {
            return instance;
          }

          const elements = new Map();
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              const callback = elements.get(entry.target);
              const isVisible =
                entry.isIntersecting || entry.intersectionRatio > 0;

              if (callback && isVisible) {
                callback(isVisible);
              }
            });
          }, options);
          observers.set(
            id,
            (instance = {
              id,
              observer,
              elements,
            })
          );
          return instance;
        }

        /***/
      },

    /***/ './node_modules/next/dist/client/with-router.js':
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = withRouter;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _router = __webpack_require__(
          /*! ./router */ './node_modules/next/dist/client/router.js'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        function withRouter(ComposedComponent) {
          function WithRouterWrapper(props) {
            return /*#__PURE__*/ _react.default.createElement(
              ComposedComponent,
              Object.assign(
                {
                  router: (0, _router).useRouter(),
                },
                props
              )
            );
          }

          WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
          WithRouterWrapper.origGetInitialProps =
            ComposedComponent.origGetInitialProps;

          if (true) {
            const name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              'Unknown';
            WithRouterWrapper.displayName = `withRouter(${name})`;
          }

          return WithRouterWrapper;
        }

        /***/
      },

    /***/ './node_modules/next/dist/shared/lib/router/router.js':
      /*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.getDomainLocale = getDomainLocale;
        exports.addLocale = addLocale;
        exports.delLocale = delLocale;
        exports.hasBasePath = hasBasePath;
        exports.addBasePath = addBasePath;
        exports.delBasePath = delBasePath;
        exports.isLocalURL = isLocalURL;
        exports.interpolateAs = interpolateAs;
        exports.resolveHref = resolveHref;
        exports.default = void 0;

        var _normalizeTrailingSlash = __webpack_require__(
          /*! ../../../client/normalize-trailing-slash */ './node_modules/next/dist/client/normalize-trailing-slash.js'
        );

        var _routeLoader = __webpack_require__(
          /*! ../../../client/route-loader */ './node_modules/next/dist/client/route-loader.js'
        );

        var _denormalizePagePath = __webpack_require__(
          /*! ../../../server/denormalize-page-path */ '../../../server/denormalize-page-path'
        );

        var _normalizeLocalePath = __webpack_require__(
          /*! ../i18n/normalize-locale-path */ '../i18n/normalize-locale-path'
        );

        var _mitt = _interopRequireDefault(
          __webpack_require__(/*! ../mitt */ '../mitt')
        );

        var _utils = __webpack_require__(/*! ../utils */ '../shared/lib/utils');

        var _isDynamic = __webpack_require__(
          /*! ./utils/is-dynamic */ './utils/is-dynamic'
        );

        var _parseRelativeUrl = __webpack_require__(
          /*! ./utils/parse-relative-url */ './utils/parse-relative-url'
        );

        var _querystring = __webpack_require__(
          /*! ./utils/querystring */ './utils/querystring'
        );

        var _resolveRewrites = _interopRequireDefault(
          __webpack_require__(/*! ./utils/resolve-rewrites */ '?5c99')
        );

        var _routeMatcher = __webpack_require__(
          /*! ./utils/route-matcher */ './utils/route-matcher'
        );

        var _routeRegex = __webpack_require__(
          /*! ./utils/route-regex */ './utils/route-regex'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        let detectDomainLocale;

        if (false) {
        }

        const basePath = false || '';

        function buildCancellationError() {
          return Object.assign(new Error('Route Cancelled'), {
            cancelled: true,
          });
        }

        function addPathPrefix(path, prefix) {
          return prefix && path.startsWith('/')
            ? path === '/'
              ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix)
              : `${prefix}${
                  pathNoQueryHash(path) === '/' ? path.substring(1) : path
                }`
            : path;
        }

        function getDomainLocale(path, locale, locales, domainLocales) {
          if (false) {
          } else {
            return false;
          }
        }

        function addLocale(path, locale, defaultLocale) {
          if (false) {
          }

          return path;
        }

        function delLocale(path, locale) {
          if (false) {
          }

          return path;
        }

        function pathNoQueryHash(path) {
          const queryIndex = path.indexOf('?');
          const hashIndex = path.indexOf('#');

          if (queryIndex > -1 || hashIndex > -1) {
            path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
          }

          return path;
        }

        function hasBasePath(path) {
          path = pathNoQueryHash(path);
          return path === basePath || path.startsWith(basePath + '/');
        }

        function addBasePath(path) {
          // we only add the basepath on relative urls
          return addPathPrefix(path, basePath);
        }

        function delBasePath(path) {
          path = path.slice(basePath.length);
          if (!path.startsWith('/')) path = `/${path}`;
          return path;
        }

        function isLocalURL(url) {
          // prevent a hydration mismatch on href for url with anchor refs
          if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?'))
            return true;

          try {
            // absolute urls can be local if they are on the same origin
            const locationOrigin = (0, _utils).getLocationOrigin();
            const resolved = new URL(url, locationOrigin);
            return (
              resolved.origin === locationOrigin &&
              hasBasePath(resolved.pathname)
            );
          } catch (_) {
            return false;
          }
        }

        function interpolateAs(route, asPathname, query) {
          let interpolatedRoute = '';
          const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
          const dynamicGroups = dynamicRegex.groups;
          const dynamicMatches = // Try to match the dynamic route against the asPath
            (asPathname !== route
              ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname)
              : '') || // Fall back to reading the values from the href
            // TODO: should this take priority; also need to change in the router.
            query;
          interpolatedRoute = route;
          const params = Object.keys(dynamicGroups);

          if (
            !params.every((param) => {
              let value = dynamicMatches[param] || '';
              const { repeat, optional } = dynamicGroups[param]; // support single-level catch-all
              // TODO: more robust handling for user-error (passing `/`)

              let replaced = `[${repeat ? '...' : ''}${param}]`;

              if (optional) {
                replaced = `${!value ? '/' : ''}[${replaced}]`;
              }

              if (repeat && !Array.isArray(value)) value = [value];
              return (
                (optional || param in dynamicMatches) &&
                (interpolatedRoute =
                  interpolatedRoute.replace(
                    replaced,
                    repeat
                      ? value
                          .map(
                            // these values should be fully encoded instead of just
                            // path delimiter escaped since they are being inserted
                            // into the URL and we expect URL encoded segments
                            // when parsing dynamic route params
                            (segment) => encodeURIComponent(segment)
                          )
                          .join('/')
                      : encodeURIComponent(value)
                  ) || '/')
              );
            })
          ) {
            interpolatedRoute = ''; // did not satisfy all requirements // n.b. We ignore this error because we handle warning for this case in
            // development in the `<Link>` component directly.
          }

          return {
            params,
            result: interpolatedRoute,
          };
        }

        function omitParmsFromQuery(query, params) {
          const filteredQuery = {};
          Object.keys(query).forEach((key) => {
            if (!params.includes(key)) {
              filteredQuery[key] = query[key];
            }
          });
          return filteredQuery;
        }

        function resolveHref(router, href, resolveAs) {
          // we use a dummy base url for relative urls
          let base;
          let urlAsString =
            typeof href === 'string'
              ? href
              : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
          // invalid and will never match a Next.js page/file

          const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
          const urlAsStringNoProto = urlProtoMatch
            ? urlAsString.substr(urlProtoMatch[0].length)
            : urlAsString;
          const urlParts = urlAsStringNoProto.split('?');

          if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
            console.error(
              `Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`
            );
            const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(
              urlAsStringNoProto
            );
            urlAsString =
              (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
          } // Return because it cannot be routed by the Next.js router

          if (!isLocalURL(urlAsString)) {
            return resolveAs ? [urlAsString] : urlAsString;
          }

          try {
            base = new URL(
              urlAsString.startsWith('#') ? router.asPath : router.pathname,
              'http://n'
            );
          } catch (_) {
            // fallback to / for invalid asPath values e.g. //
            base = new URL('/', 'http://n');
          }

          try {
            const finalUrl = new URL(urlAsString, base);
            finalUrl.pathname = (0,
            _normalizeTrailingSlash).normalizePathTrailingSlash(
              finalUrl.pathname
            );
            let interpolatedAs = '';

            if (
              (0, _isDynamic).isDynamicRoute(finalUrl.pathname) &&
              finalUrl.searchParams &&
              resolveAs
            ) {
              const query = (0, _querystring).searchParamsToUrlQuery(
                finalUrl.searchParams
              );
              const { result, params } = interpolateAs(
                finalUrl.pathname,
                finalUrl.pathname,
                query
              );

              if (result) {
                interpolatedAs = (0, _utils).formatWithValidation({
                  pathname: result,
                  hash: finalUrl.hash,
                  query: omitParmsFromQuery(query, params),
                });
              }
            } // if the origin didn't change, it means we received a relative href

            const resolvedHref =
              finalUrl.origin === base.origin
                ? finalUrl.href.slice(finalUrl.origin.length)
                : finalUrl.href;
            return resolveAs
              ? [resolvedHref, interpolatedAs || resolvedHref]
              : resolvedHref;
          } catch (_) {
            return resolveAs ? [urlAsString] : urlAsString;
          }
        }

        function stripOrigin(url) {
          const origin = (0, _utils).getLocationOrigin();
          return url.startsWith(origin) ? url.substring(origin.length) : url;
        }

        function prepareUrlAs(router, url, as) {
          // If url and as provided as an object representation,
          // we'll format them into the string version here.
          let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
          const origin = (0, _utils).getLocationOrigin();
          const hrefHadOrigin = resolvedHref.startsWith(origin);
          const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
          resolvedHref = stripOrigin(resolvedHref);
          resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
          const preparedUrl = hrefHadOrigin
            ? resolvedHref
            : addBasePath(resolvedHref);
          const preparedAs = as
            ? stripOrigin(resolveHref(router, as))
            : resolvedAs || resolvedHref;
          return {
            url: preparedUrl,
            as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
          };
        }

        function resolveDynamicRoute(pathname, pages) {
          const cleanPathname = (0,
          _normalizeTrailingSlash).removePathTrailingSlash(
            (0, _denormalizePagePath).denormalizePagePath(pathname)
          );

          if (cleanPathname === '/404' || cleanPathname === '/_error') {
            return pathname;
          } // handle resolving href for dynamic routes

          if (!pages.includes(cleanPathname)) {
            // eslint-disable-next-line array-callback-return
            pages.some((page) => {
              if (
                (0, _isDynamic).isDynamicRoute(page) &&
                (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)
              ) {
                pathname = page;
                return true;
              }
            });
          }

          return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        }

        const manualScrollRestoration = false && 0;
        const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

        function fetchRetry(url, attempts) {
          return fetch(url, {
            // Cookies are required to be present for Next.js' SSG "Preview Mode".
            // Cookies may also be required for `getServerSideProps`.
            //
            // > `fetch` won’t send cookies, unless you set the credentials init
            // > option.
            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            //
            // > For maximum browser compatibility when it comes to sending &
            // > receiving cookies, always supply the `credentials: 'same-origin'`
            // > option instead of relying on the default.
            // https://github.com/github/fetch#caveats
            credentials: 'same-origin',
          }).then((res) => {
            if (!res.ok) {
              if (attempts > 1 && res.status >= 500) {
                return fetchRetry(url, attempts - 1);
              }

              if (res.status === 404) {
                return res.json().then((data) => {
                  if (data.notFound) {
                    return {
                      notFound: SSG_DATA_NOT_FOUND,
                    };
                  }

                  throw new Error(`Failed to load static props`);
                });
              }

              throw new Error(`Failed to load static props`);
            }

            return res.json();
          });
        }

        function fetchNextData(dataHref, isServerRender) {
          return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
            // We should only trigger a server-side transition if this was caused
            // on a client-side transition. Otherwise, we'd get into an infinite
            // loop.
            if (!isServerRender) {
              (0, _routeLoader).markAssetError(err);
            }

            throw err;
          });
        }

        class Router {
          constructor(
            pathname1,
            query1,
            as1,
            {
              initialProps,
              pageLoader,
              App,
              wrapApp,
              Component: Component1,
              err: err1,
              subscription,
              isFallback,
              locale,
              locales,
              defaultLocale,
              domainLocales,
              isPreview,
            }
          ) {
            // Static Data Cache
            this.sdc = {}; // In-flight Server Data Requests, for deduping

            this.sdr = {};
            this._idx = 0;

            this.onPopState = (e) => {
              const state = e.state;

              if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname: pathname1, query: query1 } = this;
                this.changeState(
                  'replaceState',
                  (0, _utils).formatWithValidation({
                    pathname: addBasePath(pathname1),
                    query: query1,
                  }),
                  (0, _utils).getURL()
                );
                return;
              }

              if (!state.__N) {
                return;
              }

              let forcedScroll;
              const { url, as: as1, options, idx } = state;

              if (false) {
              }

              this._idx = idx;
              const { pathname: pathname1 } = (0,
              _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
              // can be caused by navigating back from an external site

              if (
                this.isSsr &&
                as1 === this.asPath &&
                pathname1 === this.pathname
              ) {
                return;
              } // If the downstream application returns falsy, return.
              // They will then be responsible for handling the event.

              if (this._bps && !this._bps(state)) {
                return;
              }

              this.change(
                'replaceState',
                url,
                as1,
                Object.assign({}, options, {
                  shallow: options.shallow && this._shallow,
                  locale: options.locale || this.defaultLocale,
                }),
                forcedScroll
              );
            }; // represents the current component key

            this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(
              pathname1
            ); // set up the component cache (by route keys)

            this.components = {}; // We should not keep the cache, if there's an error
            // Otherwise, this cause issues when when going back and
            // come again to the errored page.

            if (pathname1 !== '/_error') {
              this.components[this.route] = {
                Component: Component1,
                initial: true,
                props: initialProps,
                err: err1,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
              };
            }

            this.components['/_app'] = {
              Component: App,
              styleSheets: [],
            }; // Backwards compat for Router.router.events
            // TODO: Should be remove the following major version as it was never documented

            this.events = Router.events;
            this.pageLoader = pageLoader;
            this.pathname = pathname1;
            this.query = query1; // if auto prerendered and dynamic route wait to update asPath
            // until after mount to prevent hydration mismatch

            const autoExportDynamic =
              (0, _isDynamic).isDynamicRoute(pathname1) &&
              self.__NEXT_DATA__.autoExport;

            this.asPath = autoExportDynamic ? pathname1 : as1;
            this.basePath = basePath;
            this.sub = subscription;
            this.clc = null;
            this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
            // back from external site

            this.isSsr = true;
            this.isFallback = isFallback;
            this.isReady = !!(
              self.__NEXT_DATA__.gssp ||
              self.__NEXT_DATA__.gip ||
              (self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp) ||
              (!autoExportDynamic && !self.location.search && !false)
            );
            this.isPreview = !!isPreview;
            this.isLocaleDomain = false;

            if (false) {
            }

            if (false) {
            }
          }

          reload() {
            window.location.reload();
          }
          /**
           * Go back in history
           */

          back() {
            window.history.back();
          }
          /**
           * Performs a `pushState` with arguments
           * @param url of the route
           * @param as masks `url` for the browser
           * @param options object you can define `shallow` and other options
           */

          push(url, as, options = {}) {
            if (false) {
            }

            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change('pushState', url, as, options);
          }
          /**
           * Performs a `replaceState` with arguments
           * @param url of the route
           * @param as masks `url` for the browser
           * @param options object you can define `shallow` and other options
           */

          replace(url, as, options = {}) {
            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change('replaceState', url, as, options);
          }

          async change(method, url, as, options, forcedScroll) {
            if (!isLocalURL(url)) {
              window.location.href = url;
              return false;
            }

            const shouldResolveHref =
              url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated

            if (options._h) {
              this.isReady = true;
            }

            const prevLocale = this.locale;

            if (false) {
              var ref;
            }

            if (!options._h) {
              this.isSsr = false;
            } // marking route changes as a navigation start entry

            if (_utils.ST) {
              performance.mark('routeChange');
            }

            const { shallow = false } = options;
            const routeProps = {
              shallow,
            };

            if (this._inFlightRoute) {
              this.abortComponentLoad(this._inFlightRoute, routeProps);
            }

            as = addBasePath(
              addLocale(
                hasBasePath(as) ? delBasePath(as) : as,
                options.locale,
                this.defaultLocale
              )
            );
            const cleanedAs = delLocale(
              hasBasePath(as) ? delBasePath(as) : as,
              this.locale
            );
            this._inFlightRoute = as;
            let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.

            if (
              !options._h &&
              this.onlyAHashChange(cleanedAs) &&
              !localeChange
            ) {
              this.asPath = cleanedAs;
              Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

              this.changeState(method, url, as, options);
              this.scrollToHash(cleanedAs);
              this.notify(this.components[this.route], null);
              Router.events.emit('hashChangeComplete', as, routeProps);
              return true;
            }

            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname: pathname1, query: query1 } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to

            let pages, rewrites;

            try {
              pages = await this.pageLoader.getPageList();
              ({ __rewrites: rewrites } = await (0,
              _routeLoader).getClientBuildManifest());
            } catch (err1) {
              // If we fail to resolve the page list or client-build manifest, we must
              // do a server-side transition:
              window.location.href = as;
              return false;
            } // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url

            if (!this.urlIsNew(cleanedAs) && !localeChange) {
              method = 'replaceState';
            } // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly

            let resolvedAs = as; // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1

            pathname1 = pathname1
              ? (0, _normalizeTrailingSlash).removePathTrailingSlash(
                  delBasePath(pathname1)
                )
              : pathname1;

            if (shouldResolveHref && pathname1 !== '/_error') {
              options._shouldResolveHref = true;

              if (false) {
              } else {
                parsed.pathname = resolveDynamicRoute(pathname1, pages);

                if (parsed.pathname !== pathname1) {
                  pathname1 = parsed.pathname;
                  parsed.pathname = addBasePath(pathname1);
                  url = (0, _utils).formatWithValidation(parsed);
                }
              }
            }

            const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(
              pathname1
            );

            if (!isLocalURL(as)) {
              if (true) {
                throw new Error(
                  `Invalid href: "${url}" and as: "${as}", received relative href and external as` +
                    `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`
                );
              }

              window.location.href = as;
              return false;
            }

            resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

            if ((0, _isDynamic).isDynamicRoute(route)) {
              const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(
                resolvedAs
              );
              const asPathname = parsedAs.pathname;
              const routeRegex = (0, _routeRegex).getRouteRegex(route);
              const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(
                asPathname
              );
              const shouldInterpolate = route === asPathname;
              const interpolatedAs = shouldInterpolate
                ? interpolateAs(route, asPathname, query1)
                : {};

              if (
                !routeMatch ||
                (shouldInterpolate && !interpolatedAs.result)
              ) {
                const missingParams = Object.keys(routeRegex.groups).filter(
                  (param) => !query1[param]
                );

                if (missingParams.length > 0) {
                  if (true) {
                    console.warn(
                      `${
                        shouldInterpolate
                          ? `Interpolating href`
                          : `Mismatching \`as\` and \`href\``
                      } failed to manually provide ` +
                        `the params: ${missingParams.join(
                          ', '
                        )} in the \`href\`'s \`query\``
                    );
                  }

                  throw new Error(
                    (shouldInterpolate
                      ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(
                          ', '
                        )}) to be interpolated properly. `
                      : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) +
                      `Read more: https://nextjs.org/docs/messages/${
                        shouldInterpolate
                          ? 'href-interpolation-failed'
                          : 'incompatible-href-as'
                      }`
                  );
                }
              } else if (shouldInterpolate) {
                as = (0, _utils).formatWithValidation(
                  Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query1, interpolatedAs.params),
                  })
                );
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query1, routeMatch);
              }
            }

            Router.events.emit('routeChangeStart', as, routeProps);

            try {
              var ref, ref1;
              let routeInfo = await this.getRouteInfo(
                route,
                pathname1,
                query1,
                as,
                resolvedAs,
                routeProps
              );
              let { error, props, __N_SSG, __N_SSP } = routeInfo; // handle redirect on client-transition

              if ((__N_SSG || __N_SSP) && props) {
                if (props.pageProps && props.pageProps.__N_REDIRECT) {
                  const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                  // client-navigation if it is falling back to hard navigation if
                  // it's not

                  if (destination.startsWith('/')) {
                    const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(
                      destination
                    );
                    parsedHref.pathname = resolveDynamicRoute(
                      parsedHref.pathname,
                      pages
                    );
                    const { url: newUrl, as: newAs } = prepareUrlAs(
                      this,
                      destination,
                      destination
                    );
                    return this.change(method, newUrl, newAs, options);
                  }

                  window.location.href = destination;
                  return new Promise(() => {});
                }

                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (props.notFound === SSG_DATA_NOT_FOUND) {
                  let notFoundRoute;

                  try {
                    await this.fetchComponent('/404');
                    notFoundRoute = '/404';
                  } catch (_) {
                    notFoundRoute = '/_error';
                  }

                  routeInfo = await this.getRouteInfo(
                    notFoundRoute,
                    notFoundRoute,
                    query1,
                    as,
                    resolvedAs,
                    {
                      shallow: false,
                    }
                  );
                }
              }

              Router.events.emit('beforeHistoryChange', as, routeProps);
              this.changeState(method, url, as, options);

              if (true) {
                const appComp = this.components['/_app'].Component;
                window.next.isPrerendered =
                  appComp.getInitialProps === appComp.origGetInitialProps &&
                  !routeInfo.Component.getInitialProps;
              }

              if (
                options._h &&
                pathname1 === '/_error' &&
                ((ref = self.__NEXT_DATA__.props) === null || ref === void 0
                  ? void 0
                  : (ref1 = ref.pageProps) === null || ref1 === void 0
                  ? void 0
                  : ref1.statusCode) === 500 &&
                (props === null || props === void 0 ? void 0 : props.pageProps)
              ) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                props.pageProps.statusCode = 500;
              } // shallow routing is only allowed for same page URL changes.

              const isValidShallowRoute =
                options.shallow && this.route === route;

              var _scroll;

              const shouldScroll =
                (_scroll = options.scroll) !== null && _scroll !== void 0
                  ? _scroll
                  : !isValidShallowRoute;
              const resetScroll = shouldScroll
                ? {
                    x: 0,
                    y: 0,
                  }
                : null;
              await this.set(
                route,
                pathname1,
                query1,
                cleanedAs,
                routeInfo,
                forcedScroll !== null && forcedScroll !== void 0
                  ? forcedScroll
                  : resetScroll
              ).catch((e) => {
                if (e.cancelled) error = error || e;
                else throw e;
              });

              if (error) {
                Router.events.emit(
                  'routeChangeError',
                  error,
                  cleanedAs,
                  routeProps
                );
                throw error;
              }

              if (false) {
              }

              Router.events.emit('routeChangeComplete', as, routeProps);
              return true;
            } catch (err1) {
              if (err1.cancelled) {
                return false;
              }

              throw err1;
            }
          }

          changeState(method, url, as, options = {}) {
            if (true) {
              if (typeof window.history === 'undefined') {
                console.error(`Warning: window.history is not available.`);
                return;
              }

              if (typeof window.history[method] === 'undefined') {
                console.error(
                  `Warning: window.history.${method} is not available`
                );
                return;
              }
            }

            if (method !== 'pushState' || (0, _utils).getURL() !== as) {
              this._shallow = options.shallow;
              window.history[method](
                {
                  url,
                  as,
                  options,
                  __N: true,
                  idx: (this._idx =
                    method !== 'pushState' ? this._idx : this._idx + 1),
                }, // Most browsers currently ignores this parameter, although they may use it in the future.
                // Passing the empty string here should be safe against future changes to the method.
                // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
                '',
                as
              );
            }
          }

          async handleRouteInfoError(
            err,
            pathname,
            query,
            as,
            routeProps,
            loadErrorFail
          ) {
            if (err.cancelled) {
              // bubble up cancellation errors
              throw err;
            }

            if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
              Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
              //  1. Page doesn't exists
              //  2. Page does exist in a different zone
              //  3. Internal error while loading the page
              // So, doing a hard reload is the proper way to deal with this.

              window.location.href = as; // Changing the URL doesn't block executing the current code path.
              // So let's throw a cancellation error stop the routing logic.

              throw buildCancellationError();
            }

            try {
              let Component1;
              let styleSheets;
              let props;

              if (
                typeof Component1 === 'undefined' ||
                typeof styleSheets === 'undefined'
              ) {
                ({ page: Component1, styleSheets } = await this.fetchComponent(
                  '/_error'
                ));
              }

              const routeInfo = {
                props,
                Component: Component1,
                styleSheets,
                err,
                error: err,
              };

              if (!routeInfo.props) {
                try {
                  routeInfo.props = await this.getInitialProps(Component1, {
                    err,
                    pathname,
                    query,
                  });
                } catch (gipErr) {
                  console.error(
                    'Error in error page `getInitialProps`: ',
                    gipErr
                  );
                  routeInfo.props = {};
                }
              }

              return routeInfo;
            } catch (routeInfoErr) {
              return this.handleRouteInfoError(
                routeInfoErr,
                pathname,
                query,
                as,
                routeProps,
                true
              );
            }
          }

          async getRouteInfo(
            route,
            pathname,
            query,
            as,
            resolvedAs,
            routeProps
          ) {
            try {
              const existingRouteInfo = this.components[route];

              if (
                routeProps.shallow &&
                existingRouteInfo &&
                this.route === route
              ) {
                return existingRouteInfo;
              }

              const cachedRouteInfo =
                existingRouteInfo && 'initial' in existingRouteInfo
                  ? undefined
                  : existingRouteInfo;
              const routeInfo = cachedRouteInfo
                ? cachedRouteInfo
                : await this.fetchComponent(route).then((res) => ({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                  }));
              const { Component: Component1, __N_SSG, __N_SSP } = routeInfo;

              if (true) {
                const { isValidElementType } = __webpack_require__(
                  /*! react-is */ 'react-is'
                );

                if (!isValidElementType(Component1)) {
                  throw new Error(
                    `The default export is not a React Component in page: "${pathname}"`
                  );
                }
              }

              let dataHref;

              if (__N_SSG || __N_SSP) {
                dataHref = this.pageLoader.getDataHref(
                  (0, _utils).formatWithValidation({
                    pathname,
                    query,
                  }),
                  resolvedAs,
                  __N_SSG,
                  this.locale
                );
              }

              const props = await this._getData(() =>
                __N_SSG
                  ? this._getStaticData(dataHref)
                  : __N_SSP
                  ? this._getServerData(dataHref)
                  : this.getInitialProps(
                      Component1, // we provide AppTree later so this needs to be `any`
                      {
                        pathname,
                        query,
                        asPath: as,
                        locale: this.locale,
                        locales: this.locales,
                        defaultLocale: this.defaultLocale,
                      }
                    )
              );
              routeInfo.props = props;
              this.components[route] = routeInfo;
              return routeInfo;
            } catch (err2) {
              return this.handleRouteInfoError(
                err2,
                pathname,
                query,
                as,
                routeProps
              );
            }
          }

          set(route, pathname, query, as, data, resetScroll) {
            this.isFallback = false;
            this.route = route;
            this.pathname = pathname;
            this.query = query;
            this.asPath = as;
            return this.notify(data, resetScroll);
          }
          /**
           * Callback to execute before replacing router state
           * @param cb callback to be executed
           */

          beforePopState(cb) {
            this._bps = cb;
          }

          onlyAHashChange(as) {
            if (!this.asPath) return false;
            const [oldUrlNoHash, oldHash] = this.asPath.split('#');
            const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

            if (
              newHash &&
              oldUrlNoHash === newUrlNoHash &&
              oldHash === newHash
            ) {
              return true;
            } // If the urls are change, there's more than a hash change

            if (oldUrlNoHash !== newUrlNoHash) {
              return false;
            } // If the hash has changed, then it's a hash only change.
            // This check is necessary to handle both the enter and
            // leave hash === '' cases. The identity case falls through
            // and is treated as a next reload.

            return oldHash !== newHash;
          }

          scrollToHash(as) {
            const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
            // To mirror browsers

            if (hash === '' || hash === 'top') {
              window.scrollTo(0, 0);
              return;
            } // First we check if the element by id is found

            const idEl = document.getElementById(hash);

            if (idEl) {
              idEl.scrollIntoView();
              return;
            } // If there's no element with the id, we check the `name` property
            // To mirror browsers

            const nameEl = document.getElementsByName(hash)[0];

            if (nameEl) {
              nameEl.scrollIntoView();
            }
          }

          urlIsNew(asPath) {
            return this.asPath !== asPath;
          }
          /**
           * Prefetch page code, you may wait for the data during page rendering.
           * This feature only works in production!
           * @param url the href of prefetched page
           * @param asPath the as path of the prefetched page
           */

          async prefetch(url, asPath = url, options = {}) {
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname: pathname2 } = parsed;

            if (false) {
            }

            const pages = await this.pageLoader.getPageList();
            let resolvedAs = asPath;

            if (false) {
            } else {
              parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

              if (parsed.pathname !== pathname2) {
                pathname2 = parsed.pathname;
                parsed.pathname = pathname2;
                url = (0, _utils).formatWithValidation(parsed);
              }
            }

            const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(
              pathname2
            ); // Prefetch is not supported in development mode because it would trigger on-demand-entries

            if (true) {
              return;
            }

            await Promise.all([
              this.pageLoader._isSsg(route).then((isSsg) => {
                return isSsg
                  ? this._getStaticData(
                      this.pageLoader.getDataHref(
                        url,
                        resolvedAs,
                        true,
                        typeof options.locale !== 'undefined'
                          ? options.locale
                          : this.locale
                      )
                    )
                  : false;
              }),
              this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](
                route
              ),
            ]);
          }

          async fetchComponent(route) {
            let cancelled = false;

            const cancel = (this.clc = () => {
              cancelled = true;
            });

            const componentResult = await this.pageLoader.loadPage(route);

            if (cancelled) {
              const error = new Error(
                `Abort fetching component for route: "${route}"`
              );
              error.cancelled = true;
              throw error;
            }

            if (cancel === this.clc) {
              this.clc = null;
            }

            return componentResult;
          }

          _getData(fn) {
            let cancelled = false;

            const cancel = () => {
              cancelled = true;
            };

            this.clc = cancel;
            return fn().then((data) => {
              if (cancel === this.clc) {
                this.clc = null;
              }

              if (cancelled) {
                const err2 = new Error('Loading initial props cancelled');
                err2.cancelled = true;
                throw err2;
              }

              return data;
            });
          }

          _getStaticData(dataHref) {
            const { href: cacheKey } = new URL(dataHref, window.location.href);

            if (false) {
            }

            return fetchNextData(dataHref, this.isSsr).then((data) => {
              this.sdc[cacheKey] = data;
              return data;
            });
          }

          _getServerData(dataHref) {
            const { href: resourceKey } = new URL(
              dataHref,
              window.location.href
            );

            if (this.sdr[resourceKey]) {
              return this.sdr[resourceKey];
            }

            return (this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr)
              .then((data) => {
                delete this.sdr[resourceKey];
                return data;
              })
              .catch((err2) => {
                delete this.sdr[resourceKey];
                throw err2;
              }));
          }

          getInitialProps(Component, ctx) {
            const { Component: App1 } = this.components['/_app'];

            const AppTree = this._wrapApp(App1);

            ctx.AppTree = AppTree;
            return (0, _utils).loadGetInitialProps(App1, {
              AppTree,
              Component,
              router: this,
              ctx,
            });
          }

          abortComponentLoad(as, routeProps) {
            if (this.clc) {
              Router.events.emit(
                'routeChangeError',
                buildCancellationError(),
                as,
                routeProps
              );
              this.clc();
              this.clc = null;
            }
          }

          notify(data, resetScroll) {
            return this.sub(
              data,
              this.components['/_app'].Component,
              resetScroll
            );
          }
        }

        Router.events = (0, _mitt).default();
        exports.default = Router;

        /***/
      },

    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Home,
          /* harmony export */ getStaticProps: () =>
            /* binding */ getStaticProps,
          /* harmony export */
        });
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! next/head */ 'next/head');
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_head__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../lib/shopify */ './lib/shopify.js');
        /* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../components/ProductList */ './components/ProductList.js'
          );
        /* harmony import */ var _components_HomeCarousel__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../components/HomeCarousel */ './components/HomeCarousel.js'
          );
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! next/image */ './node_modules/next/image.js');
        /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_image__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! next/link */ './node_modules/next/link.js');
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _components_HomeMain__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/HomeMain */ './components/HomeMain.js'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\pages\\index.js';

        function Home({ products, carouselProducts }) {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            'div',
            {
              className: '',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  next_head__WEBPACK_IMPORTED_MODULE_0___default(),
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'title',
                        {
                          children: 'Create Next App',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 15,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'link',
                        {
                          rel: 'icon',
                          href: '/favicon.ico',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  _components_HomeMain__WEBPACK_IMPORTED_MODULE_7__.default,
                  {
                    products: products,
                    carouselProducts: carouselProducts,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 5,
            },
            this
          );
        }
        async function getStaticProps() {
          const products = await (0,
          _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.getProductsInCollection)(
            'frontpage'
          );
          let carouselProducts = [];
          products.products.edges.map((product) => {
            if (
              product.node.id ===
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY='
            ) {
              carouselProducts[2] = {
                number: 2,
                product: product.node.images.edges[0].node.originalSrc,
                handle: product.node.handle,
              };
            }

            if (
              product.node.id ===
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExMzY1NTA5NzI='
            ) {
              carouselProducts[0] = {
                number: 3,
                product: product.node.images.edges[0].node.originalSrc,
                handle: product.node.handle,
              };
            }

            if (
              product.node.id ===
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MDgxMjg3NDM0ODQ='
            ) {
              carouselProducts[1] = {
                number: 1,
                product: product.node.images.edges[0].node.originalSrc,
                handle: product.node.handle,
              };
            }
          });
          return {
            props: {
              products,
              carouselProducts,
            },
          };
        }

        /***/
      },

    /***/ './utils/helpers.js':
      /*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatter: () => /* binding */ formatter,
          /* harmony export */
        });
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        });

        /***/
      },

    /***/ './node_modules/react-responsive-carousel/lib/styles/carousel.min.css':
      /*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
      /***/ () => {
        /***/
      },

    /***/ './node_modules/next/image.js':
      /*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(
          /*! ./dist/client/image */ './node_modules/next/dist/client/image.js'
        );

        /***/
      },

    /***/ './node_modules/next/link.js':
      /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ './node_modules/next/dist/client/link.js'
        );

        /***/
      },

    /***/ '@apollo/react-hooks':
      /*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('@apollo/react-hooks');

        /***/
      },

    /***/ atob:
      /*!***********************!*\
  !*** external "atob" ***!
  \***********************/
      /***/ (module) => {
        'use strict';
        module.exports = require('atob');

        /***/
      },

    /***/ 'graphql-tag':
      /*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('graphql-tag');

        /***/
      },

    /***/ '../../../server/denormalize-page-path':
      /*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/server/denormalize-page-path.js');

        /***/
      },

    /***/ '../server/image-config':
      /*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/server/image-config.js');

        /***/
      },

    /***/ '../shared/lib/head':
      /*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/head.js');

        /***/
      },

    /***/ '../i18n/normalize-locale-path':
      /*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

        /***/
      },

    /***/ '../mitt':
      /*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/mitt.js');

        /***/
      },

    /***/ '../shared/lib/router-context':
      /*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router-context.js');

        /***/
      },

    /***/ '../shared/lib/router/utils/get-asset-path-from-route':
      /*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

        /***/
      },

    /***/ './utils/is-dynamic':
      /*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

        /***/
      },

    /***/ './utils/parse-relative-url':
      /*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

        /***/
      },

    /***/ './utils/querystring':
      /*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

        /***/
      },

    /***/ './utils/route-matcher':
      /*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

        /***/
      },

    /***/ './utils/route-regex':
      /*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

        /***/
      },

    /***/ '../shared/lib/to-base-64':
      /*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/to-base-64.js');

        /***/
      },

    /***/ '../shared/lib/utils':
      /*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/dist/shared/lib/utils.js');

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/head');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('react');

        /***/
      },

    /***/ 'react-is':
      /*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('react-is');

        /***/
      },

    /***/ 'react-responsive-carousel':
      /*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('react-responsive-carousel');

        /***/
      },

    /***/ 'react/jsx-dev-runtime':
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('react/jsx-dev-runtime');

        /***/
      },

    /***/ '?5c99':
      /*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
      /***/ () => {
        /* (ignored) */
        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__('./pages/index.js');
  module.exports = __webpack_exports__;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVNYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRvYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcWWVybWFuXFxEZXNrdG9wXFxkZWVwb2Utb25seVxcZGVlcG9lLW9ubHlcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcclxuXHJcbmNvbnN0IEhvbWVDYXJvdXNlbCA9ICh7IGNhcm91c2VsUHJvZHVjdHMsIHNlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtIH0pID0+IHtcclxuICAvLyBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoOSk7XHJcbiAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGVkSXRlbScsIHNlbGVjdGVkSXRlbSk7XHJcbiAgLy8gc2V0U2VsZWN0ZWRJdGVtKDkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEl0ZW0oMTApO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgfSwgW3NlbGVjdGVkSXRlbV0pO1xyXG5cclxuICBjb25zdCBjYXJvdXNlbExvbmcgPSBjYXJvdXNlbFByb2R1Y3RzLmNvbmNhdChcclxuICAgIGNhcm91c2VsUHJvZHVjdHMsXHJcbiAgICBjYXJvdXNlbFByb2R1Y3RzLFxyXG4gICAgY2Fyb3VzZWxQcm9kdWN0cyxcclxuICAgIGNhcm91c2VsUHJvZHVjdHMsXHJcbiAgICBjYXJvdXNlbFByb2R1Y3RzLFxyXG4gICAgY2Fyb3VzZWxQcm9kdWN0cyxcclxuICAgIGNhcm91c2VsUHJvZHVjdHNcclxuICApO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzbGlkZVBlcmNlbnRhZ2UsIHNldFNsaWRlUGVyY2VudGFnZV0gPSB1c2VTdGF0ZShcclxuICAgICgyMjYgLyB3aW5kb3dTaXplLndpZHRoKSAqIDEwMFxyXG4gICk7XHJcbiAgY29uc3QgW3NsaWRlUGVyY2VudGFnZUxnLCBzZXRTbGlkZVBlcmNlbnRhZ2VMZ10gPSB1c2VTdGF0ZShcclxuICAgICgyMjYgLyB3aW5kb3dTaXplLndpZHRoKSAqIDEwMFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSA5KSB7XHJcbiAgICAgIHNldFNlbGVjdGVkSXRlbSgxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93U2l6ZS53aWR0aCkge1xyXG4gICAgICBsZXQgbmV3U2xpZGVQZXJjZW50YWdlID0gKDIyNiAvIHdpbmRvd1NpemUud2lkdGgpICogMTAwO1xyXG4gICAgICBzZXRTbGlkZVBlcmNlbnRhZ2UobmV3U2xpZGVQZXJjZW50YWdlKTtcclxuICAgICAgcmV0dXJuIHNsaWRlUGVyY2VudGFnZTtcclxuICAgIH1cclxuICB9LCBbd2luZG93U2l6ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgbXQtNCAgbWItMTAgY2xhc3Nlcy5teV9fY2Fyb3VzZWxfbWFpbiAgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgICBwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlPXt0cnVlfVxyXG4gICAgICAgICAgaW50ZXJ2YWw9ezUwMDB9XHJcbiAgICAgICAgICBzd2lwZVNjcm9sbFRvbGVyYW5jZT17MTV9XHJcbiAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICBjZW50ZXJTbGlkZVBlcmNlbnRhZ2U9e3NsaWRlUGVyY2VudGFnZX1cclxuICAgICAgICAgIGNlbnRlck1vZGU9e3RydWV9XHJcbiAgICAgICAgICB0cmFuc2l0aW9uVGltZT17NjgwfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZEl0ZW0pID0+IHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pfVxyXG4gICAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Nhcm91c2VsTG9uZy5tYXAoKGkpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNTMgaC02NiBmcm9tLWdyYXktMTAwICBtbC0yIGJvdHRvbS0wIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICBrZXk9e2kubnVtYmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgIHNpemVzPVwiNDd2d1wiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2kucHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTYgaC02IHotNTAgdG9wLTEuNSBsZWZ0LTEuNSB0ZXh0LW1kICBmb250LWV4dHJhbGlnaHQgZm9udC1tb25vIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBwLTMuNSBiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAge2kubnVtYmVyfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgcHItMSB6LTUwIGJvdHRvbS0zIGZvbnQtbW9ubyBmb250LWV4dHJhbGlnaHQgdW5kZXJsaW5lIHRleHQtZGVlcG9lX2RlZmF1bHQtYmxhY2sgbGVmdC0wXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2RlZXBvZS1vbmx5LnZlcmNlbC5hcHAvY29sbGVjdGlvbnMvZnJvbnRwYWdlLyR7aS5oYW5kbGV9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5EZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIG10LTQgIG1iLTEwIGNsYXNzZXMubXlfX2Nhcm91c2VsX21haW4gbGc6bWF4LXctc2NyZWVuLWxnICBoaWRkZW4gbGc6YmxvY2sgeHhsOmhpZGRlblwiPlxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgaW5maW5pdGVMb29wXHJcbiAgICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgcHJldmVudE1vdmVtZW50VW50aWxTd2lwZVNjcm9sbFRvbGVyYW5jZT17dHJ1ZX1cclxuICAgICAgICAgIGludGVydmFsPXs1MDAwfVxyXG4gICAgICAgICAgc3dpcGVTY3JvbGxUb2xlcmFuY2U9ezE1fVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtmYWxzZX1cclxuICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtfVxyXG4gICAgICAgICAgY2VudGVyU2xpZGVQZXJjZW50YWdlPXsyNC40fVxyXG4gICAgICAgICAgY2VudGVyTW9kZT17dHJ1ZX1cclxuICAgICAgICAgIHRyYW5zaXRpb25UaW1lPXs2ODB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkSXRlbSkgPT4gc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSl9XHJcbiAgICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2Fyb3VzZWxMb25nLm1hcCgoaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01MyBoLTY2IGZyb20tZ3JheS0xMDAgIG1sLTYgYm90dG9tLTAgcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgIGtleT17aS5udW1iZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZXM9XCI0N3Z3XCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz17aS5wcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTYgei01MCB0b3AtMS41IGxlZnQtMS41IHRleHQtbWQgIGZvbnQtZXh0cmFsaWdodCBmb250LW1vbm8gcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHAtMy41IGJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICB7aS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBwci0xIHotNTAgYm90dG9tLTMgZm9udC1tb25vIGZvbnQtZXh0cmFsaWdodCB1bmRlcmxpbmUgdGV4dC1kZWVwb2VfZGVmYXVsdC1ibGFjayBsZWZ0LTBcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZGVlcG9lLW9ubHkudmVyY2VsLmFwcC9jb2xsZWN0aW9ucy9mcm9udHBhZ2UvJHtpLmhhbmRsZX1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPkRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgbXQtNCAgbWItMTAgY2xhc3Nlcy5teV9fY2Fyb3VzZWxfbWFpbiBtZDp3LTE0NSAgaGlkZGVuIG1kOmJsb2NrIG1kOm14LWF1dG9cIj5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgIGluZmluaXRlTG9vcFxyXG4gICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICAgIHByZXZlbnRNb3ZlbWVudFVudGlsU3dpcGVTY3JvbGxUb2xlcmFuY2U9e3RydWV9XHJcbiAgICAgICAgICBpbnRlcnZhbD17NTAwMH1cclxuICAgICAgICAgIHN3aXBlU2Nyb2xsVG9sZXJhbmNlPXsxNX1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cclxuICAgICAgICAgIGNlbnRlclNsaWRlUGVyY2VudGFnZT17MzMuNX1cclxuICAgICAgICAgIGNlbnRlck1vZGU9e3RydWV9XHJcbiAgICAgICAgICB0cmFuc2l0aW9uVGltZT17NjgwfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZEl0ZW0pID0+IHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pfVxyXG4gICAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Nhcm91c2VsTG9uZy5tYXAoKGkpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNTMgaC02NiBmcm9tLWdyYXktMTAwICBtbC02ICBib3R0b20tMCByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAga2V5PXtpLm51bWJlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIjQ3dndcIlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtpLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtNiB6LTUwIHRvcC0xLjUgbGVmdC0xLjUgdGV4dC1tZCAgZm9udC1leHRyYWxpZ2h0IGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcC0zLjUgYmctZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIHtpLm51bWJlcn1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIHByLTEgei01MCBib3R0b20tMyBmb250LW1vbm8gZm9udC1leHRyYWxpZ2h0IHVuZGVybGluZSB0ZXh0LWRlZXBvZV9kZWZhdWx0LWJsYWNrIGxlZnQtMFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kZWVwb2Utb25seS52ZXJjZWwuYXBwL2NvbGxlY3Rpb25zL2Zyb250cGFnZS8ke2kuaGFuZGxlfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+RGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUNhcm91c2VsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdCc7XHJcbmltcG9ydCBIb21lQ2Fyb3VzZWwgZnJvbSAnLi9Ib21lQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBIb21lTWFpbiA9ICh7IHByb2R1Y3RzLCBjYXJvdXNlbFByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoOSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02NVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2hvbWVwYWdlQmFubmVyMi5wbmdcIlxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtM3hsIG1kOnRleHQtNHhsICB0ZXh0LXdoaXRlIGFic29sdXRlIGxlZnQtMCByaWdodC0wIG1sLWF1dG8gbXItYXV0byB0b3AtMTYgaXRhbGljIGZvbnQtbWVkaXVtIHctODAgbWItNiBtZDp3LTE0NSB0ZXh0LWNlbnRlciBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb25zaWRlcmVkIG1hdGVyaWFscywgbGl2ZWx5IGRlc2lnbi5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kZWVwb2Utb25seS52ZXJjZWwuYXBwL2NvbGxlY3Rpb25zL2Zyb250cGFnZWB9XHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gYWJzb2x1dGUgIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgcmlnaHQtMCBtci1hdXRvIG1iLTYgYm90dG9tLTAgbGVmdC0wIG1sLWF1dG8gdy00MCB1bmRlcmxpbmUgZm9udC1tb25vXCI+XHJcbiAgICAgICAgICAgIFNob3AgQWxsIFByb2R1Y3RzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IG15LTYgbWQ6bXktOSB3LWZ1bGwgcmVsYXRpdmUgbWQ6dy0xNDUgbWQ6bXgtYXV0b1wiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2RlZXBvZUhvbWUzLmpwZ1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHdpZHRoPXszNzh9XHJcbiAgICAgICAgICBoZWlnaHQ9ezI4NH1cclxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yLzUgbGc6dG9wLTMvNyBsZWZ0LTEvMTMgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDAgfHwgc2VsZWN0ZWRJdGVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDIgfHwgc2VsZWN0ZWRJdGVtID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzkgbWQ6dG9wLTEvMTEgbGVmdC0zLzcgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDAgfHwgc2VsZWN0ZWRJdGVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDEgfHwgc2VsZWN0ZWRJdGVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yLzMgbGVmdC0yLzMgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDEgfHwgc2VsZWN0ZWRJdGVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDIgfHwgc2VsZWN0ZWRJdGVtID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlblwiPjwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1tb25vIHRleHQteGwgLW10LTEuNSBtZDp0ZXh0LTJ4bCBtZDpteS0yIG1kOi1tdC0yIG1kOmZvbnQtbGlnaHQgdGV4dC1kZWVwb2VfZGVmYXVsdC1ibGFja1wiPlxyXG4gICAgICAgIFNob3AgdGhpcyB0YWJsZVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8SG9tZUNhcm91c2VsXHJcbiAgICAgICAgY2Fyb3VzZWxQcm9kdWN0cz17Y2Fyb3VzZWxQcm9kdWN0c31cclxuICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cclxuICAgICAgICBzZXRTZWxlY3RlZEl0ZW09e3NldFNlbGVjdGVkSXRlbX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LXNjcmVlbiB4bDpoaWRkZW5cIj48L2Rpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctNjQgbGc6dy0xMzAgbGc6dGV4dC0zeGwgbGc6Zm9udC1leHRyYWxpZ2h0IG14LWF1dG8gZm9udC1saWdodCBmb250LW1vbm8gdGV4dC14bCBsZzpweC0yMFwiPlxyXG4gICAgICAgIFdlIGNyZWF0ZSBhbmQgY3VyYXRlIGRlc2lnbnMgZm9yIHlvdXIgaG9tZSBhbmQgb3VyIHNoYXJlZCBvbmVcclxuICAgICAgPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOm1heC13LXNjcmVlbi1sZyAgbXgtNiBsZzptYi00IGxnOnctMTQ1IGxnOnB4LTQgbGc6bXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiBtdC0xMCBsZzpwci0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctOTYgdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHplcm86aC04MCBmb3VyeHM6aC05NiAgIHh4czpoLTEwNVwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3Blb3BsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwidG9wXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgZm9udC1saWdodCB4czp3LTk2IHhzOm14LWF1dG8gbGVhZGluZy02IGxnOnRleHQtbGVmdCBsZzptdC0xNCAgZm9udC1tb25vIHRleHQtbGcgbGc6cGwtMTAgbGc6cHItN1wiPlxyXG4gICAgICAgICAgICBBdCBkZWVwb2UsIHdlIHN0cml2ZSB0byBjcmVhdGUgYW4gb3BlbiBhbmQgaG9uZXN0IGV4cGVyaWVuY2UgZm9yIG91clxyXG4gICAgICAgICAgICBjdXN0b21lcnMuIFdlIHJlY29nbml6ZSB0aGUgY2hhbGxlbmdlcyBzdXJyb3VuZGluZyBzdXN0YWluYWJpbGl0eVxyXG4gICAgICAgICAgICBhbmQgYXJlIHdvcmtpbmcgZGFpbHkgdG8gcmVkdWNlIG91ciBmb290cHJpbnQuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgbXktNiBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZWVwb2UvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlZXBvZV9kZWZhdWx0LWJsYWNrIGZvbnQtbW9ubyB1bmRlcmxpbmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVNYWluO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGZvcm1hdHRlciB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgYXRvYiBmcm9tICdhdG9iJztcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgY29sbGVjdGlvbiwgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGUsIHRpdGxlIH0gPSBwcm9kdWN0Lm5vZGU7XHJcbiAgY29uc3QgeyBhbHRUZXh0LCBvcmlnaW5hbFNyYyB9ID0gcHJvZHVjdC5ub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlO1xyXG4gIGNvbnN0IHByaWNlID0gcHJvZHVjdC5ub2RlLnByaWNlUmFuZ2UubWluVmFyaWFudFByaWNlLmFtb3VudDtcclxuICBjb25zdCBhdG9iVVJMID0gYXRvYihwcm9kdWN0Lm5vZGUuaWQpO1xyXG4gIGNvbnN0IGF0b2JJZCA9IGF0b2JVUkwuc3BsaXQoJ1Byb2R1Y3QvJylbMV07XHJcbiAgY29uc29sZS5sb2coJ2F0b2JJZCcsIGF0b2JJZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtgaHR0cHM6Ly9kZWVwb2Utb25seS52ZXJjZWwuYXBwL2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbn0vJHtoYW5kbGV9YH1cclxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICA+XHJcbiAgICB7LyogPExpbmsgaHJlZj17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb259LyR7aGFuZGxlfWB9PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBweC0yIG1heC13LW1kIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMTBcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtvcmlnaW5hbFNyY31cclxuICAgICAgICAgICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTIgdGV4dC14bCBmb250LW1vbm8gZm9udC1saWdodCB0ZXh0LWRlZXBvZV9kZWZhdWx0LWJsYWNrXCI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcmV2aWV3cy1mb3ItY29sbGVjdGlvbnNcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbWQgZm9udC1tb25vIGZvbnQtZXh0cmFsaWdodFwiPlxyXG4gICAgICAgICAge2Zvcm1hdHRlci5mb3JtYXQocHJpY2UpfXsnICd9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ5b3RwbyBib3R0b21MaW5lIGlubGluZS1mbGV4XCJcclxuICAgICAgICAgICAgZGF0YS15b3Rwby1wcm9kdWN0LWlkPXtgJHthdG9iSWR9YH1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICB7LyogPC9MaW5rPiAqL31cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiIsImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuL1Byb2R1Y3RDYXJkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IGNvbGxlY3Rpb24sIHByb2R1Y3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsICAgb3ZlcmZsb3ctaGlkZGVuIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjBcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17cHJvZHVjdHMuaW1hZ2Uub3JpZ2luYWxTcmN9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC01eGwgdGV4dC13aGl0ZSBhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCBtbC1hdXRvIG1yLWF1dG8gdG9wLTI0IGl0YWxpYyBmb250LW1lZGl1bSB3LTgwIG1iLTYgdGV4dC1jZW50ZXIgXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y29sbGVjdGlvbiA9PT0gJ2Zyb250cGFnZScgPyAnYWxsIHByb2R1Y3RzJyA6IGNvbGxlY3Rpb259XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbWQ6cHgtOCBwdC02IHhsOnB4LTQgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgbGc6Z3JpZC1jb2xzLTIgeHhsOmdyaWQtY29scy0zIFwiPlxyXG4gICAgICAgICAge3Byb2R1Y3RzLnByb2R1Y3RzLmVkZ2VzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qubm9kZS5pZH1cclxuICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTZcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcblxyXG4vLyAke1xyXG4vLyAgIGNvbGxlY3Rpb24ubGVuZ3RoID09PSAxMCB8fFxyXG4vLyAgIChjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMTEgJiYgJ2xlZnQtMTgnKVxyXG4vLyB9ICR7Y29sbGVjdGlvbi5sZW5ndGggPT09IDkgJiYgJ2xlZnQtMTYnfVxyXG4vLyAgJHtjb2xsZWN0aW9uLmxlbmd0aCA9PT0gNCAmJiAnbGVmdC00MCd9ICR7XHJcbi8vICAgY29sbGVjdGlvbi5sZW5ndGggPT09IDggJiYgJ2xlZnQtMjQnXHJcbi8vIH1cclxuLy8gJHtcclxuLy8gICBjb2xsZWN0aW9uID09PSAnZGlubmVyd2FyZScgJiYgJ2xlZnQtMjQnXHJcbi8vIH1cclxuLy8gICR7Y29sbGVjdGlvbi5sZW5ndGggPT09IDcgJiYgJ2xlZnQtMjQnfWBcclxuIiwiY29uc3QgZG9tYWluID0gcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRV9ET01BSU47XHJcbmNvbnN0IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVGUk9OVF9BQ0NFU1NUT0tFTjtcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmFzeW5jIGZ1bmN0aW9uIFNob3BpZnlEYXRhKHF1ZXJ5KSB7XHJcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vJHtkb21haW59L2FwaS8yMDIxLTEwL2dyYXBocWwuanNvbmA7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBlbmRwb2ludDogVVJMLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIC8vIGdvdHRlbiBmcm9tIGh0dHBzOi8vc2hvcGlmeS5kZXYvYXBpL3N0b3JlZnJvbnQvZ2V0dGluZy1zdGFydGVkXHJcbiAgICAgICdYLVNob3BpZnktU3RvcmVmcm9udC1BY2Nlc3MtVG9rZW4nOiBzdG9yZWZyb250QWNjZXNzVG9rZW4sXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChVUkwsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZmV0Y2hlZCcgKyBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbnMoKSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgeyBcclxuICAgIGNvbGxlY3Rpb25zKGZpcnN0OjI1KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgICBpZCxcclxuICAgICAgICAgICBoYW5kbGUsXHJcbiAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIFx0cHJvZHVjdHMoZmlyc3Q6IDEpe1xyXG4gICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9YDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc3QgYWxsQ29sbGVjdGlvbnMgPSByZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzXHJcbiAgICA/IHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbnMuZWRnZXNcclxuICAgIDogW107XHJcblxyXG4gIHJldHVybiBhbGxDb2xsZWN0aW9ucztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzSW5Db2xsZWN0aW9uKGhhbmRsZSkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICB7XHJcbiAgICAgIGNvbGxlY3Rpb25CeUhhbmRsZShoYW5kbGU6IFwiJHtoYW5kbGV9XCIpe1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2R1Y3RzKGZpcnN0OiAyNSkge1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgICAgICAgcHJpY2VSYW5nZXtcclxuICAgICAgICAgICAgICAgbWluVmFyaWFudFByaWNlIHtcclxuICAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWFnZXMoZmlyc3Q6IDUpe1xyXG4gICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xyXG4gIGNvbnN0IGFsbFByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9uQnlIYW5kbGVcclxuICAgID8gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9uQnlIYW5kbGVcclxuICAgIDogW107XHJcblxyXG4gIHJldHVybiBhbGxQcm9kdWN0cztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RGcm9tQ29sbGVjdGlvbnMoKSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgeyBcclxuICAgIGNvbGxlY3Rpb25zKGZpcnN0OjI1KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgICBpZCxcclxuICAgICAgICAgICBoYW5kbGUsXHJcbiAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIFx0cHJvZHVjdHMoZmlyc3Q6IDI1KXtcclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH1gO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICBjb25zdCBhbGxDb2xsZWN0aW9ucyA9IHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbnMuZWRnZXNcclxuICAgID8gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9ucy5lZGdlc1xyXG4gICAgOiBbXTtcclxuXHJcbiAgcmV0dXJuIGFsbENvbGxlY3Rpb25zO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgIHtcclxuICAgICAgcHJvZHVjdHMoZmlyc3Q6IDI1KSB7XHJcbiAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc3Qgc2x1Z3MgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzLmVkZ2VzXHJcbiAgICA/IHJlc3BvbnNlLmRhdGEucHJvZHVjdHMuZWRnZXNcclxuICAgIDogW107XHJcblxyXG4gIHJldHVybiBzbHVncztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoaGFuZGxlKSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgIHtcclxuICAgICAgcHJvZHVjdChoYW5kbGU6IFwiJHtoYW5kbGV9XCIpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDMwKSB7XHJcbiAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1x0XHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnMge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMjQpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBjdXJyZW50bHlOb3RJblN0b2NrXHJcbiAgICAgICAgICAgICAgYXZhaWxhYmxlRm9yU2FsZVxyXG4gICAgICAgICAgICAgIGNvbXBhcmVBdFByaWNlVjJ7XHJcbiAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcHJpY2VWMiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICBjb25zdCBwcm9kdWN0ID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0ID8gcmVzcG9uc2UuZGF0YS5wcm9kdWN0IDogW107XHJcblxyXG4gIHJldHVybiBwcm9kdWN0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hlY2tvdXQoaWQsIHF1YW50aXR5KSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgY2hlY2tvdXRDcmVhdGUoaW5wdXQ6IHtcclxuICAgICAgbGluZUl0ZW1zOiBbe3ZhcmlhbnRJZDogXCIke2lkfVwiLCBxdWFudGl0eTogJHtxdWFudGl0eX0gfV1cclxuICAgIH0pIHtcclxuICAgICAgY2hlY2tvdXQge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgd2ViVXJsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcclxuICAgID8gcmVzcG9uc2UuZGF0YS5jaGVja291dENyZWF0ZS5jaGVja291dFxyXG4gICAgOiBbXTtcclxuICByZXR1cm4gY2hlY2tvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGVja291dChpZCwgbGluZUl0ZW1zKSB7XHJcbiAgY29uc3QgbGluZUl0ZW1zT2JqZWN0ID0gbGluZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIGB7XHJcbiAgICAgIHZhcmlhbnRJZDogXCIke2l0ZW0uaWR9XCIsXHJcbiAgICAgIHF1YW50aXR5OiAke2l0ZW0udmFyaWFudFF1YW50aXR5fVxyXG4gICAgXHJcbiAgICB9YDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlKGxpbmVJdGVtczogWyR7bGluZUl0ZW1zT2JqZWN0fV0sIGNoZWNrb3V0SWQ6XCIke2lkfVwiKXtcclxuICAgICAgY2hlY2tvdXQge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgd2ViVXJsXHJcbiAgICAgICAgbGluZUl0ZW1zKGZpcnN0OjI1KSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xyXG4gIGNvbnN0IGNoZWNrb3V0ID0gcmVzcG9uc2UuZGF0YS5jaGVja291dExpbmVJdGVtc1JlcGxhY2UuY2hlY2tvdXRcclxuICAgID8gcmVzcG9uc2UuZGF0YS5jaGVja291dExpbmVJdGVtc1JlcGxhY2UuY2hlY2tvdXRcclxuICAgIDogW107XHJcblxyXG4gIGNvbnNvbGUubG9nKCd1cGRhdGVDSGVja291dCcsIGNoZWNrb3V0KTtcclxuICByZXR1cm4gY2hlY2tvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjdXN0b21lckNyZWF0ZShkYXRhKSB7XHJcbiAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcclxuICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG4gIC8vIGNvbnNvbGUubG9nKCdxdWVyeScsIHF1ZXJ5KTtcclxuICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgLy8gY29uc3QgdXNlciA9IHJlc3BvbnNlLmRhdGEgPyByZXNwb25zZS5kYXRhIDogW107XHJcblxyXG4gIC8vIHJldHVybiB1c2VyO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjdXN0b21lckFjY2Vzc1Rva2VuQ3JlYXRlKGN1c3RvbWVySW5wdXQpIHtcclxuICBjb25zdCBxdWVyeSA9IGBcclxuICBtdXRhdGlvbiBjdXN0b21lckFjY2Vzc1Rva2VuQ3JlYXRlKCRpbnB1dDogJHtjdXN0b21lcklucHV0fSkge1xyXG4gICAgY3VzdG9tZXJBY2Nlc3NUb2tlbkNyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGN1c3RvbWVyQWNjZXNzVG9rZW4ge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuXHJcbiAgICAgICAgZXhwaXJlc0F0XHJcbiAgICAgIH1cclxuICAgICAgY3VzdG9tZXJVc2VyRXJyb3JzIHtcclxuICAgICAgICBjb2RlXHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9YDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gIGNvbnN0IHVzZXIgPSByZXNwb25zZS5kYXRhID8gcmVzcG9uc2UuZGF0YSA6IFtdO1xyXG5cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGdldFByb2R1Y3RzSW5Db2xsZWN0aW9uIH0gZnJvbSAnLi4vbGliL3Nob3BpZnknO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IEhvbWVDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVDYXJvdXNlbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZU1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lTWFpbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMsIGNhcm91c2VsUHJvZHVjdHMgfSkge1xuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIb21lTWFpbiBwcm9kdWN0cz17cHJvZHVjdHN9IGNhcm91c2VsUHJvZHVjdHM9e2Nhcm91c2VsUHJvZHVjdHN9IC8+XG4gICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbignZnJvbnRwYWdlJyk7XG5cbiAgbGV0IGNhcm91c2VsUHJvZHVjdHMgPSBbXTtcbiAgcHJvZHVjdHMucHJvZHVjdHMuZWRnZXMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5ub2RlLmlkID09PSAnWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMEx6WTNNVEV4TmpZMk16RTVPVFk9J1xuICAgICkge1xuICAgICAgY2Fyb3VzZWxQcm9kdWN0c1syXSA9IHtcbiAgICAgICAgbnVtYmVyOiAyLFxuICAgICAgICBwcm9kdWN0OiBwcm9kdWN0Lm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmMsXG4gICAgICAgIGhhbmRsZTogcHJvZHVjdC5ub2RlLmhhbmRsZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvZHVjdC5ub2RlLmlkID09PSAnWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMEx6WTNNVEV4TXpZMU5UQTVOekk9J1xuICAgICkge1xuICAgICAgY2Fyb3VzZWxQcm9kdWN0c1swXSA9IHtcbiAgICAgICAgbnVtYmVyOiAzLFxuICAgICAgICBwcm9kdWN0OiBwcm9kdWN0Lm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmMsXG4gICAgICAgIGhhbmRsZTogcHJvZHVjdC5ub2RlLmhhbmRsZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHByb2R1Y3Qubm9kZS5pZCA9PT0gJ1oybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBMelkzTURneE1qZzNORE0wT0RRPSdcbiAgICApIHtcbiAgICAgIGNhcm91c2VsUHJvZHVjdHNbMV0gPSB7XG4gICAgICAgIG51bWJlcjogMSxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdC5ub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjLFxuICAgICAgICBoYW5kbGU6IHByb2R1Y3Qubm9kZS5oYW5kbGUsXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9kdWN0cywgY2Fyb3VzZWxQcm9kdWN0cyB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgY3VycmVuY3k6ICdVU0QnLFxyXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b2JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiSG9tZUNhcm91c2VsIiwiY2Fyb3VzZWxQcm9kdWN0cyIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImNhcm91c2VsTG9uZyIsImNvbmNhdCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNsaWRlUGVyY2VudGFnZSIsInNldFNsaWRlUGVyY2VudGFnZSIsInNsaWRlUGVyY2VudGFnZUxnIiwic2V0U2xpZGVQZXJjZW50YWdlTGciLCJuZXdTbGlkZVBlcmNlbnRhZ2UiLCJtYXAiLCJpIiwicHJvZHVjdCIsIm51bWJlciIsImhhbmRsZSIsIlJlYWN0IiwiUHJvZHVjdExpc3QiLCJMaW5rIiwiSG9tZU1haW4iLCJwcm9kdWN0cyIsImZvcm1hdHRlciIsImF0b2IiLCJQcm9kdWN0Q2FyZCIsImNvbGxlY3Rpb24iLCJ0aXRsZSIsIm5vZGUiLCJhbHRUZXh0Iiwib3JpZ2luYWxTcmMiLCJpbWFnZXMiLCJlZGdlcyIsInByaWNlIiwicHJpY2VSYW5nZSIsIm1pblZhcmlhbnRQcmljZSIsImFtb3VudCIsImF0b2JVUkwiLCJpZCIsImF0b2JJZCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImZvcm1hdCIsImltYWdlIiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIlNIT1BJRllfU1RPUkVfRE9NQUlOIiwic3RvcmVmcm9udEFjY2Vzc1Rva2VuIiwiU0hPUElGWV9TVE9SRUZST05UX0FDQ0VTU1RPS0VOIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJTaG9waWZ5RGF0YSIsInF1ZXJ5IiwiVVJMIiwib3B0aW9ucyIsImVuZHBvaW50IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiRXJyb3IiLCJnZXRDb2xsZWN0aW9ucyIsImFsbENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJnZXRQcm9kdWN0c0luQ29sbGVjdGlvbiIsImFsbFByb2R1Y3RzIiwiY29sbGVjdGlvbkJ5SGFuZGxlIiwiZ2V0UHJvZHVjdEZyb21Db2xsZWN0aW9ucyIsImdldEFsbFByb2R1Y3RzIiwic2x1Z3MiLCJnZXRQcm9kdWN0IiwiY3JlYXRlQ2hlY2tvdXQiLCJxdWFudGl0eSIsImNoZWNrb3V0IiwiY2hlY2tvdXRDcmVhdGUiLCJ1cGRhdGVDaGVja291dCIsImxpbmVJdGVtcyIsImxpbmVJdGVtc09iamVjdCIsIml0ZW0iLCJ2YXJpYW50UXVhbnRpdHkiLCJjaGVja291dExpbmVJdGVtc1JlcGxhY2UiLCJjdXN0b21lckNyZWF0ZSIsImN1c3RvbWVyQWNjZXNzVG9rZW5DcmVhdGUiLCJjdXN0b21lcklucHV0IiwidXNlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0Iiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIZWFkIiwiSG9tZSIsImdldFN0YXRpY1Byb3BzIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==
