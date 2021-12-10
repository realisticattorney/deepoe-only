(() => {
  var exports = {};
  exports.id = 'pages/collections/[collection]/[product]';
  exports.ids = ['pages/collections/[collection]/[product]'];
  exports.modules = {
    /***/ './components/ProductCarousel.js':
      /*!***************************************!*\
  !*** ./components/ProductCarousel.js ***!
  \***************************************/
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
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductCarousel.js';

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
          imageSrc.push(...imageColorSrc); //change carousel index to 0

          const { 0: index, 1: setIndex } = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            setIndex(0);
          }, [selectedVariant]);
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
                      'relative z-0  mb-10 classes.my__carousel_main md:hidden',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
                      {
                        infiniteLoop: true,
                        showStatus: false,
                        showThumbs: false,
                        preventMovementUntilSwipeScrollTolerance: true,
                        interval: 5000,
                        swipeable: true,
                        swipeScrollTolerance: 50,
                        autoFocus: false,
                        selectedItem: index,
                        onChange: (index) => setIndex(index),
                        showArrows: false,
                        children: imageSrc.map((i) =>
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                {
                                  quality: 100,
                                  loading: 'lazy',
                                  objectFit: 'cover',
                                  layout: 'fill',
                                  objectPosition: 'center',
                                  src: i,
                                  alt: '',
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 46,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            i,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 42,
                              columnNumber: 11,
                            },
                            undefined
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 7,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 5,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  'div',
                  {
                    className:
                      'relative z-0  mb-10 classes.my__carousel_main hidden md:block',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
                      {
                        infiniteLoop: true,
                        autoPlay: true,
                        showArrows: true,
                        showStatus: false,
                        showThumbs: false,
                        preventMovementUntilSwipeScrollTolerance: true,
                        interval: 5000,
                        swipeable: true,
                        swipeScrollTolerance: 50,
                        autoFocus: false,
                        selectedItem: index,
                        onChange: (index) => setIndex(index),
                        children: imageSrc.map((i) =>
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            'div',
                            {
                              className:
                                'w-full h-110 lg:h-133 xxl:h-133 from-gray-100  bottom-0 relative',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                {
                                  quality: 100,
                                  loading: 'lazy',
                                  objectFit: 'cover',
                                  layout: 'fill',
                                  objectPosition: 'center',
                                  src: i,
                                  alt: '',
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 79,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            i,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 75,
                              columnNumber: 11,
                            },
                            undefined
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 7,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 5,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Banner;

        /***/
      },

    /***/ './components/ProductForm.js':
      /*!***********************************!*\
  !*** ./components/ProductForm.js ***!
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
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../utils/helpers */ './utils/helpers.js');
        /* harmony import */ var _ProductOptions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./ProductOptions */ './components/ProductOptions.js'
          );
        /* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../context/shopContext */ './context/shopContext.js'
          );
        /* harmony import */ var _ProductCarousel__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./ProductCarousel */ './components/ProductCarousel.js'
          );
        /* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @heroicons/react/outline */ './node_modules/@heroicons/react/outline/esm/index.js'
          );
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! atob */ 'atob');
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            atob__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _ReviewsPopup__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./ReviewsPopup */ './components/ReviewsPopup.js'
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
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductForm.js';

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

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

        const ProductForm = ({ product, collection }) => {
          var _product$variants$edg,
            _product$variants$edg2,
            _product$variants$edg3;

          const stageCanvasRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
            null
          );
          const { 0: disable, 1: setDisable } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const { 0: parentReviewState, 1: setParentReviewState } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const wrapperSetParentReviewState = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            (val) => {
              setParentReviewState(val);
            },
            [setParentReviewState]
          );
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (parentReviewState) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'unset';
            }
          }, [parentReviewState]);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const timer = setTimeout(() => {
              console.log('This will run after 1 second!', stageCanvasRef);
              let inner = stageCanvasRef.current.innerText
                ? stageCanvasRef.current.innerText
                : 'empty';
              console.log(inner);
              let lalala = inner.indexOf('Currently, there');

              if (lalala > -1) {
                setDisable(true);
              }
            }, 300);
            return () => clearTimeout(timer);
          }, []); // const [show, setShow] = useState(false);
          // const handleShow = () => {
          //   show ? setShow(false) : setShow(true);
          // };

          let itemsSpecs;
          const { description } = product;
          let [intro, details] = description.split('^^^DETAILS');
          [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
          const itemsSpecs2 = itemsSpecs.split('**');
          const { addToCart } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            _context_shopContext__WEBPACK_IMPORTED_MODULE_3__.CartContext
          );
          const allVariantOptions =
            (_product$variants$edg = product.variants.edges) === null ||
            _product$variants$edg === void 0
              ? void 0
              : _product$variants$edg.map((variant) => {
                  var _variant$node$image, _variant$node$compare;

                  const allOptions = {};
                  variant.node.selectedOptions.map((item) => {
                    allOptions[item.name] = item.value;
                  });
                  return {
                    id: variant.node.id,
                    title: product.title,
                    handle: product.handle,
                    image:
                      (_variant$node$image = variant.node.image) === null ||
                      _variant$node$image === void 0
                        ? void 0
                        : _variant$node$image.originalSrc,
                    options: allOptions,
                    variantTitle: variant.node.title,
                    variantPrice: variant.node.priceV2.amount,
                    variantComparedAtPrice:
                      ((_variant$node$compare =
                        variant.node.compareAtPriceV2) === null ||
                      _variant$node$compare === void 0
                        ? void 0
                        : _variant$node$compare.amount) || '',
                    variantQuantity: 1,
                    currentlyNotInStock: variant.node.currentlyNotInStock,
                    availableForSale: variant.node.availableForSale,
                  };
                });
          console.log('product_id', product);
          const atobURL = atob__WEBPACK_IMPORTED_MODULE_6___default()(
            product.id
          );
          const atobId = atobURL.split('Product/')[1];
          console.log('atobURL', atobURL);
          console.log('atobId', atobId); // console.log(allVariantOptions);

          const defaultValues = {}; //saving here the default values of the form

          product.options.map((item) => {
            defaultValues[item.name] = item.values[0];
          });
          const { 0: selectedVariant, 1: setSelectedVariant } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(allVariantOptions[0]);
          const { 0: selectedOptions, 1: setSelectedOptions } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValues); //this will re-render the component every time the user changes the selected option
          //   console.log('defaultValues', defaultValues);
          // console.log('variant options', selectedVariant);

          function setOptions(name, value) {
            //this function will be called every time the user changes the selected option (onChange, in the ProductOptions component) and will update the selectedOptions state
            setSelectedOptions((previousState) => {
              return _objectSpread(
                _objectSpread({}, previousState),
                {},
                {
                  [name]: value,
                }
              );
            });

            const selection = _objectSpread(
              _objectSpread({}, selectedOptions),
              {},
              {
                [name]: value,
              }
            );

            allVariantOptions.map((item) => {
              if (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item);
              }
            });
          }

          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            'div',
            {
              className:
                'flex-col flex w-full pt-1 font-public-sans-normal lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-10 ',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className:
                      'relative h-111 w-full lg:col-start-1 lg:col-end-1',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                      _ProductCarousel__WEBPACK_IMPORTED_MODULE_4__.default,
                      {
                        product: product,
                        selectedVariant: selectedVariant,
                      },
                      selectedVariant.id,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className: 'lg:col-start-2 lg:col-end-2 lg:mt-8',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'h2',
                        {
                          className:
                            'text-2xl font-mono font-extralight -mt-5 mb-1',
                          children: product.title,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className: 'yotpo bottomLine',
                          'data-yotpo-product-id': `${atobId}`,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className:
                                  'pb-3.5 pt-2 items-center flex justify-between',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className: 'flex items-start',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          'span',
                                          {
                                            className:
                                              'text-lg font-extralight',
                                            children:
                                              _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.formatter.format(
                                                product.variants.edges[0].node
                                                  .priceV2.amount
                                              ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 144,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        product.variants.edges[0].node
                                          .compareAtPriceV2
                                          ? /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                              'span',
                                              {
                                                className:
                                                  'text-lg font-mono font-thin pl-2 line-through',
                                                children:
                                                  _utils_helpers__WEBPACK_IMPORTED_MODULE_1__.formatter.format(
                                                    (_product$variants$edg2 =
                                                      product.variants.edges[0]
                                                        .node
                                                        .compareAtPriceV2) ===
                                                      null ||
                                                      _product$variants$edg2 ===
                                                        void 0
                                                      ? void 0
                                                      : _product$variants$edg2.amount
                                                  ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 150,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            )
                                          : /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                                              {},
                                              void 0,
                                              false
                                            ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 143,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'h3',
                                    {
                                      className: `text-right text-sm font-normal text-gray-600 ${
                                        selectedVariant.availableForSale ===
                                        false
                                          ? 'text-red-800'
                                          : 'text-gray-700'
                                      }`,
                                      children:
                                        selectedVariant.availableForSale ===
                                        false
                                          ? 'Currently out of stock'
                                          : '',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 159,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 142,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            product.options.map(({ name, values }) =>
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                _ProductOptions__WEBPACK_IMPORTED_MODULE_2__.default,
                                {
                                  name: name,
                                  values: values,
                                  selectedOptions: selectedOptions,
                                  setOptions: setOptions, //just passing the function to the ProductOptions component to be called when the user changes the selected option
                                },
                                `key-${name}`,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 172,
                                  columnNumber: 13,
                                },
                                undefined
                              )
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className:
                                  'text-sm font-light mb-3 mt-1.5 space-y-1.5',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'p',
                                    {
                                      className: 'flex items-center text-sm',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.TruckIcon,
                                          {
                                            className: 'h-5 flex pr-1',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 182,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        ' Usually ships in 1-2 weeks',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 181,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  ((_product$variants$edg3 =
                                    product.variants.edges[0].node
                                      .compareAtPriceV2) === null ||
                                  _product$variants$edg3 === void 0
                                    ? void 0
                                    : _product$variants$edg3.amount) &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                      'p',
                                      {
                                        className: 'flex items-center text-xs',
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                            _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ExclamationCircleIcon,
                                            {
                                              className: 'h-4 flex pr-1',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 186,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          'Final Sale! No Returns',
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 185,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 180,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'button',
                              {
                                onClick: () => {
                                  addToCart(selectedVariant);
                                },
                                className: `bg-deepoe-chocolate text-white px-2 pt-2 pb-1.5 mt-1 mb-3 text-2xl font-sans self-center justify-self-center items-center  w-full active:scale-95 ${
                                  selectedVariant.availableForSale
                                    ? 'disabled'
                                    : ''
                                }`, //disabled if the selected variant is not available for sale (out of stock)
                                disabled:
                                  selectedVariant.availableForSale === false
                                    ? true
                                    : false,
                                children:
                                  selectedVariant.availableForSale === false
                                    ? 'Out of Stock'
                                    : 'Add to Cart',
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 191,
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
                          lineNumber: 141,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className: 'font-mono text-sm font-extralight mb-4',
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            'p',
                            {
                              children: intro,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 208,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 207,
                          columnNumber: 7,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className:
                            'flex flex-col w-full border-t pt-2 border-deepoe-chocolate lg:col-end-2 lg:col-start-2',
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'button',
                              {
                                className: 'group focus:outline-none',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'flex justify-between pb-2 pt-0.5 text-lg font-extralight items-center text-left text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          'span',
                                          {
                                            className:
                                              'truncate font-mono font-extralight text-lg2',
                                            children: 'Details',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 213,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.PlusIcon,
                                          {
                                            className:
                                              'text-gray-900 h-4 w-4 group-focus:hidden',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 217,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.MinusIcon,
                                          {
                                            className:
                                              'text-gray-900 h-4 w-4 hidden group-focus:flex',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 219,
                                            columnNumber: 1,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 212,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'max-h-0 overflow-hidden duration-300  text-sm  group-focus:py-2 font-mono  group-focus:max-h-72  text-left font-extralight  border-b border-deepoe_default-black',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        'p',
                                        {
                                          className: 'mb-1',
                                          children: details,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 222,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 221,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 211,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'button',
                              {
                                className: 'group focus:outline-none',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'flex justify-between py-2 text-lg font-extralight text-left items-center text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          'span',
                                          {
                                            className:
                                              'truncate font-mono font-extralight text-lg2',
                                            children: 'Item Specifications',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 227,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          'p',
                                          {
                                            className:
                                              'font-mono font-thin text-3xl group-focus:hidden',
                                            children: '+',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 230,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                          'p',
                                          {
                                            className:
                                              'font-mono font-thin text-3xl  -mt-5  hidden group-focus:flex',
                                            children: '_',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 234,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 226,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'max-h-0 overflow-hidden duration-300 text-sm  group-focus:pb-2 font-mono group-focus:max-h-56  text-left font-extralight border-b border-deepoe_default-black',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        'ul',
                                        {
                                          className:
                                            'list-disc list-outside font-mono font-extralight ',
                                          children: itemsSpecs2.map(
                                            (item, index) =>
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                'li',
                                                {
                                                  className: '',
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                                      'span',
                                                      {
                                                        className:
                                                          'px-1 text-base font-black',
                                                        children: '\u2022',
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 242,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    ' ',
                                                    item,
                                                  ],
                                                },
                                                index,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 241,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              )
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 239,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 238,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 225,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className: '',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'flex justify-between pt-2 -mb-2 font-extralight text-left text-lg text-deepoe_default-black items-center focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75  border-deepoe_default-black group-focus:font-medium',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        'span',
                                        {
                                          className:
                                            'font-mono font-extralight text-lg2',
                                          children: 'Reviews',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 252,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 251,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      id: 'reviews-productpage',
                                      className:
                                        ' overflow-hidden focus:outline-none active:outline-none text-center max-h-140 ',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        'div',
                                        {
                                          ref: stageCanvasRef,
                                          className: 'yotpo yotpo-main-widget ',
                                          'data-product-id': `${atobId}`,
                                          'data-currency': 'USD',
                                          'data-price': `${product.variants.edges[0].node.priceV2.amount}`,
                                          'data-name': `${product.handle}`,
                                          'data-url': `https://deepoe.com/products/${product.handle}`,
                                          'data-image-url': `${product.images.edges[0].node.originalSrc}`,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 261,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 257,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className: `pt-2.5 text-center w-full self-center border-0 border-deepoe_default-black ${
                                        disable ? 'hidden' : 'inline-block'
                                      } focus:outline-none active:outline-none focus:ring-2 focus:ring-offset-2`,
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        _ReviewsPopup__WEBPACK_IMPORTED_MODULE_7__.default,
                                        {
                                          parentReviewState: parentReviewState,
                                          product: product,
                                          disable: disable,
                                          collection: collection,
                                          wrapperSetParentReviewState:
                                            wrapperSetParentReviewState, // cancelButtonRef={cancelButtonRef}
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 288,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 272,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 248,
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
                          lineNumber: 210,
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
                    lineNumber: 132,
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
              lineNumber: 124,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProductForm;

        /***/
      },

    /***/ './components/ProductOptions.js':
      /*!**************************************!*\
  !*** ./components/ProductOptions.js ***!
  \**************************************/
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
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductOptions.js';

        const ProductOptions = ({
          name,
          values,
          selectedOptions,
          setOptions,
        }) => {
          if (selectedOptions.title === 'Default Title' || name === 'Title') {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
              'div',
              {
                className: '-mb-3',
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 3,
                columnNumber: 12,
              },
              undefined
            );
          }

          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            'fieldset',
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                'div',
                {
                  className: 'inline-flex items-center flex-wrap',
                  children: values.map((value) => {
                    const id = `option-${name}-${value}`;
                    const checked = selectedOptions[name] === value;
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      'label',
                      {
                        htmlFor: id,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            'input',
                            {
                              type: 'radio',
                              className: 'sr-only',
                              id: id,
                              name: `option-${name}`,
                              value: value,
                              checked: checked,
                              onChange: () => {
                                setOptions(name, value);
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                          name === 'Color'
                            ? /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                'div',
                                {
                                  className: `border p-0.5 mx-0.5  rounded-full ${
                                    checked
                                      ? 'border-deepoe-chocolate'
                                      : 'border-transparent'
                                  }
                  ${name === 'Size' ? null : '-mt-2'}`,
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    'div',
                                    {
                                      className: `p-3.5  text-lg rounded-full block cursor-pointer
                  
                  ${
                    value == 'Black' || value == 'Forest'
                      ? 'bg-deepoe_default-black'
                      : ''
                  }
                  ${value == 'Grey' || value == 'Gray' ? 'bg-gray-600' : ''}
                  ${value == 'White' ? 'bg-white' : ''}
                  ${value == 'Tangerine' ? 'bg-deepoe-tangerine' : ''}
                  ${value == 'Yellow' ? 'bg-deepoe-mustard' : ''}
                  ${value == 'Teal' ? 'bg-deepoe-teal' : ''}
                  ${value == 'Magenta' ? 'bg-pink-700' : ''}
                  ${
                    value == 'Olive' || value == 'Moss' ? 'bg-deepoe-moss' : ''
                  }`,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 33,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 27,
                                  columnNumber: 17,
                                },
                                undefined
                              )
                            : null,
                          name === 'Size'
                            ? /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                'div',
                                {
                                  className: `p-1 my-2 text-sm rounded-full block cursor-pointer mr-2 ${
                                    checked
                                      ? 'text-deepoe-cream bg-deepoe_default-black'
                                      : 'bg-deepoe-cream border border-deepoe_default-black'
                                  }`,
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    'span',
                                    {
                                      className: 'px-2',
                                      children: value,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 61,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 54,
                                  columnNumber: 17,
                                },
                                undefined
                              )
                            : null,
                        ],
                      },
                      id,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                        columnNumber: 13,
                      },
                      undefined
                    );
                  }),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 7,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProductOptions;

        /***/
      },

    /***/ './components/ProductPageContent.js':
      /*!******************************************!*\
  !*** ./components/ProductPageContent.js ***!
  \******************************************/
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
        /* harmony import */ var _ProductForm__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./ProductForm */ './components/ProductForm.js'
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! next/link */ './node_modules/next/link.js');
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! atob */ 'atob');
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            atob__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @heroicons/react/outline */ './node_modules/@heroicons/react/outline/esm/index.js'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _YotpoReviews__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./YotpoReviews */ './components/YotpoReviews.js'
          );
        /* harmony import */ var _ReviewsPopup__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./ReviewsPopup */ './components/ReviewsPopup.js'
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
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ProductPageContent.js';

        const ProductPageContent = ({ collection, product }) => {
          const atobURL = atob__WEBPACK_IMPORTED_MODULE_3___default()(
            product.id
          );
          const atobId = atobURL.split('Product/')[1];
          const stageCanvasRef = (0, react__WEBPACK_IMPORTED_MODULE_5__.useRef)(
            null
          );
          const { 0: disable, 1: setDisable } = (0,
          react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
          const { 0: parentReviewState, 1: setParentReviewState } = (0,
          react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
          const wrapperSetParentReviewState = (0,
          react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(
            (val) => {
              setParentReviewState(val);
            },
            [setParentReviewState]
          );
          (0, react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
            if (parentReviewState) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'unset';
            }
          }, [parentReviewState]); // useEffect(() => {
          //   const timer = setTimeout(() => {
          //     console.log('This will run after 1 second!', stageCanvasRef);
          //     let inner = stageCanvasRef.current.innerText
          //       ? stageCanvasRef.current.innerText
          //       : 'empty';
          //     console.log(inner);
          //     let lalala = inner.indexOf('Currently, there');
          //     if (lalala > -1) {
          //       setDisable(true);
          //     }
          //   }, 300);
          //   return () => clearTimeout(timer);
          // }, []);

          const { 0: show, 1: setShow } = (0,
          react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); // const handleShow = () => {
          //   show ? setShow(false) : setShow(true);
          // };

          let itemsSpecs;
          const { description } = product;
          let [intro, details] = description.split('^^^DETAILS');
          [details, itemsSpecs] = details.split('^^^ITEM SPECIFICATIONS');
          const itemsSpecs2 = itemsSpecs.split('**');
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
            'div',
            {
              className: `sm:max-w-2xl mx-auto lg:max-w-xxl lg:grid lg:grid-cols-2 xxl:px-50`,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className: 'px-3.5  pb-0  z-0 lg:col-span-1',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                      'a',
                      {
                        href: `https://deepoe.com/collections/${collection}/`,
                        rel: 'noreferrer',
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                          'p',
                          {
                            className:
                              'text-left pl-3 text-lg font-extralight font-mono lg:mb-8 lg:mt-2',
                            children: [
                              '<',
                              ' back to',
                              ' ',
                              collection === 'frontpage'
                                ? 'all products'
                                : collection,
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 66,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className: `flex flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 lg:w-full lg:px-6 lg:max-w-xxl px-2 mx-auto lg:col-span-2 `,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className: 'w-full max-w-md  overflow-hidden',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        _ProductForm__WEBPACK_IMPORTED_MODULE_1__.default,
                        {
                          product: product,
                          collection: collection,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 78,
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
                    lineNumber: 74,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className: `${disable ? 'my-10' : ''}`,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                  'div',
                  {
                    className: 'flex flex-col w-full lg:col-span-2 font-mono',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className: 'px-6 my-6 mt-5 lg:mt-12 lg:px-16 ',
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            'div',
                            {
                              className: 'w-full',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                'div',
                                {
                                  className: 'relative h-110 lg:h-66 xxl:h-66',
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                    {
                                      src: '/peopleFood.jpg',
                                      layout: 'fill',
                                      objectFit: 'cover',
                                      objectPosition: 'center',
                                      quality: 70,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 93,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 92,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 91,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className:
                            'font-sans italic font-medium mx-auto text-3xl mb-5 mt-1 tracking-tighter px-6 lg:text-4xl lg:mt-4 lg:mb-9',
                          children: 'what we offer...',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className:
                            'lg:flex lg:items-center lg:justify-around lg:px-40',
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className: 'lg:flex-col',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className: 'text-center',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                        {
                                          src: '/clarity_home-line.svg',
                                          height: 48,
                                          width: 48,
                                          className: 'svg-stroke',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 109,
                                          columnNumber: 11,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 108,
                                      columnNumber: 9,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'h2',
                                    {
                                      className:
                                        'text-center w-60 mx-auto font-light leading-6  font-mono text-md',
                                      children:
                                        'Vibrant and sustainably-considered, pieces for the home.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 116,
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
                                lineNumber: 107,
                                columnNumber: 9,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className: 'lg:flex-col',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className: 'text-center mt-5',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                        {
                                          src: '/radix-icons_mix.svg',
                                          height: 48,
                                          width: 48,
                                          className: 'svg-stroke',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 122,
                                          columnNumber: 11,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 121,
                                      columnNumber: 9,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'h2',
                                    {
                                      className:
                                        'text-center w-60 mx-auto font-light leading-6 mb-5 font-mono text-md',
                                      children:
                                        'Functional designs to mix and match.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 129,
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
                                lineNumber: 120,
                                columnNumber: 9,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                              'div',
                              {
                                className: 'lg:flex-col',
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'div',
                                    {
                                      className: 'text-center',
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                        next_image__WEBPACK_IMPORTED_MODULE_0___default(),
                                        {
                                          src: '/bi_box-seam.svg',
                                          height: 48,
                                          width: 48,
                                          className: 'svg-stroke',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 135,
                                          columnNumber: 11,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 134,
                                      columnNumber: 9,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                    'h2',
                                    {
                                      className:
                                        'text-center w-60 mx-auto font-light leading-6  font-mono text-md',
                                      children:
                                        'Considered materials, low-waste packaging.',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 143,
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
                                lineNumber: 133,
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
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                        'div',
                        {
                          className: 'pt-2.5 self-center',
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                            next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                            {
                              href: `/deepoe/sustainability`,
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(
                                'button',
                                {
                                  type: 'submit',
                                  className:
                                    ' text-sm  font-extralight text-center mt-5 mb-7 w-40 underline font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:mb-12 lg:mt-10',
                                  children: 'Learn More',
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 149,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 148,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 147,
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
                    lineNumber: 85,
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
              lineNumber: 59,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ProductPageContent;

        /***/
      },

    /***/ './components/ReviewsPopup.js':
      /*!************************************!*\
  !*** ./components/ReviewsPopup.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ ReviewsPopup,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @headlessui/react */ '@headlessui/react');
        /* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @heroicons/react/outline */ './node_modules/@heroicons/react/outline/esm/index.js'
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/link */ './node_modules/next/link.js');
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! atob */ 'atob');
        /* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            atob__WEBPACK_IMPORTED_MODULE_4__
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
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\ReviewsPopup.js';

        function ReviewsPopup({
          parentReviewState,
          wrapperSetParentReviewState,
          product,
          collection,
          disable,
        }) {
          console.log('product_id', product);
          console.log('collection_id', collection);
          const atobURL = atob__WEBPACK_IMPORTED_MODULE_4___default()(
            product.id
          );
          const atobId = atobURL.split('Product/')[1];
          console.log('atobId', atobId);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            document.body.style.overflow = 'hidden';
            return () => (document.body.style.overflow = 'unset');
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover,
            {
              as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button,
                  {
                    className: `inline-flex justify-center border-b leading-tight  border-deepoe_default-black  mt-8 mb-7 font-mono font-extralight  text-xl  text-deepoe_default-black  focus:outline-none active:outline-none  focus:ring-0 ${
                      disable ? 'hidden' : 'inline-block'
                    }`,
                    onClick: () => {
                      wrapperSetParentReviewState(!parentReviewState);
                    },
                    children: 'All Reviews',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover
                    .Overlay,
                  {
                    className: 'fixed inset-0 overflow-hidden ',
                    as: 'div',
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel,
                  {
                    static: true,
                    className: 'absolute ',
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'div',
                      {
                        className: 'absolute inset-0 overflow-hidden',
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
                              .Transition.Child,
                            {
                              as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                              enter: 'ease-in-out duration-500',
                              enterFrom: 'opacity-0',
                              enterTo: 'opacity-100',
                              leave: 'ease-in-out duration-500',
                              leaveFrom: 'opacity-100',
                              leaveTo: 'opacity-0',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                'div',
                                {
                                  className:
                                    'z-10  inset-0 fixed bg-gray-500 bg-opacity-75 transition-opacity lalalala overflow-y-auto',
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 48,
                                  columnNumber: 13,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 39,
                              columnNumber: 11,
                            },
                            this
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            'div',
                            {
                              className: ' z-0 inset-0',
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                _headlessui_react__WEBPACK_IMPORTED_MODULE_1__
                                  .Transition.Child,
                                {
                                  as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                  unmount: false,
                                  enter:
                                    'transform transition ease-in-out duration-500 sm:duration-700',
                                  enterFrom: '-translate-x-full',
                                  enterTo: 'translate-x-0',
                                  leave:
                                    'transform transition ease-in-out duration-500 sm:duration-700',
                                  leaveFrom: 'translate-x-0',
                                  leaveTo: '-translate-x-full',
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                    'div',
                                    {
                                      className:
                                        'bg-deepoe-cream w-full h-screen md:max-w-md    z-50 fixed inset-y-0 top-0 left-0 right-0 bottom-0 max-w-full  overflow-y-auto',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                          'div',
                                          {
                                            className:
                                              ' w-full h-16 bg-deepoe-cream  text-right',
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                              'button',
                                              {
                                                type: 'button',
                                                className:
                                                  ' font-extralight text-lg mt-5 pt-0.5 mr-9 font-mono ',
                                                onClick: () =>
                                                  wrapperSetParentReviewState(
                                                    false
                                                  ),
                                                children: 'close',
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 63,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 62,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                          'div',
                                          {
                                            className:
                                              'w-full block  overflow-y-auto',
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                'div',
                                                {
                                                  className:
                                                    'flex z-50 flex-col justify-between items-center space-y-2 max-w-6xl w-11/12 px-2 mt-5 mx-auto overflow-y-auto',
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                    'div',
                                                    {
                                                      className:
                                                        'flex flex-col w-full  ',
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          'div',
                                                          {
                                                            className:
                                                              'flex flex-col justify-between items-baseline py-2 font-extralight text-left text-lg text-deepoe_default-black focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75   group-focus:font-medium',
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'font-mono font-light text-lg2',
                                                                  children:
                                                                    'Reviews For',
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 75,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'font-mono font-extralight text-lg2 -mt-1.3',
                                                                  children:
                                                                    product.title,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 78,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                'div',
                                                                {
                                                                  id: 'reviews-complete',
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                      'div',
                                                                      {
                                                                        className:
                                                                          'yotpo bottomLine',
                                                                        'data-yotpo-product-id': `${atobId}`,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          _jsxFileName,
                                                                        lineNumber: 82,
                                                                        columnNumber: 27,
                                                                      },
                                                                      this
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 81,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 74,
                                                            columnNumber: 23,
                                                          },
                                                          this
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          'div',
                                                          {
                                                            className: `yotpo yotpo-main-widget `,
                                                            'data-product-id': `${atobId}`,
                                                            'data-currency':
                                                              'USD',
                                                            'data-price': `${product.variants.edges[0].node.priceV2.amount}`,
                                                            'data-name': `${product.handle}`,
                                                            'data-url': `https://deepoe.com/products/${product.handle}`, // data-url={`${atobURL}`}
                                                            'data-image-url': `${product.images.edges[0].node.originalSrc}`,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 88,
                                                            columnNumber: 23,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 73,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 72,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                'div',
                                                {
                                                  className: 'mb-10',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 100,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                'div',
                                                {},
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 101,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 71,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 61,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 51,
                                  columnNumber: 13,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 50,
                              columnNumber: 11,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 9,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 37,
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
              lineNumber: 24,
              columnNumber: 5,
            },
            this
          );
        }

        /***/
      },

    /***/ './components/YotpoReviews.js':
      /*!************************************!*\
  !*** ./components/YotpoReviews.js ***!
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
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\YotpoReviews.js';

        const YotpoReviews = ({ atobId, product }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(
            'div',
            {
              className: 'yotpo yotpo-main-widget ',
              'data-product-id': `${atobId}`,
              'data-currency': 'USD',
              'data-price': `${product.variants.edges[0].node.priceV2.amount}`,
              'data-name': `${product.handle}`,
              'data-url': `https://deepoe.com/products/${product.handle}`, // data-url={`${atobURL}`}
              'data-image-url': `${product.images.edges[0].node.originalSrc}`,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 5,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          YotpoReviews;

        /***/
      },

    /***/ './context/shopContext.js':
      /*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ ShopProvider,
          /* harmony export */ ShopConsumer: () => /* binding */ ShopConsumer,
          /* harmony export */ CartContext: () => /* binding */ CartContext,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ 'react');
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../lib/shopify */ './lib/shopify.js');
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\context\\shopContext.js';

        const CartContext = /*#__PURE__*/ (0,
        react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
        function ShopProvider({ children }) {
          const { 0: cart, 1: setCart } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const { 0: cartOpen, 1: setCartOpen } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const { 0: checkoutId, 1: setCheckoutId } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
          const { 0: checkoutUrl, 1: setCheckoutUrl } = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (localStorage.checkout_id) {
              const cartObject = JSON.parse(localStorage.checkout_id);

              if (cartObject[0].id) {
                setCart([cartObject[0]]);
              } else if (cartObject[0].length > 0) {
                setCart(...[cartObject[0]]);
              }

              setCheckoutId(cartObject[1].id);
              setCheckoutUrl(cartObject[1].webUrl);
            }
          }, []);

          async function addItemToCart(newItem) {
            let newCart = [...cart];
            let newItemAddedExists = false;
            newCart.map((item) => {
              if (
                item.id === newItem.id &&
                item.variantTitle === newItem.variantTitle
              ) {
                item.variantQuantity++;
                newItemAddedExists = true;
              }
            });

            if (!newItemAddedExists) {
              newCart = [...cart, newItem];
            }

            setCart(newCart);
            const newCheckout = await (0,
            _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.updateCheckout)(
              checkoutId,
              newCart
            );
            localStorage.setItem(
              'checkout_id',
              JSON.stringify([newCart, newCheckout])
            );
          }

          async function addToCart(newItem) {
            setCartOpen(true); //annoying
            // console.log('addToCart', newItem);

            if (cart.length === 0) {
              setCart([newItem]);
              const checkout = await (0,
              _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.createCheckout)(
                newItem.id,
                newItem.variantQuantity
              );
              setCheckoutId(checkout.id);
              setCheckoutUrl(checkout.webUrl);
              localStorage.setItem(
                'checkout_id',
                JSON.stringify([newItem, checkout])
              );
            } else {
              let newCart = [...cart];
              let newItemExists = false;
              newCart.map((item) => {
                if (item.id === newItem.id) {
                  item.variantQuantity++;
                  newItemExists = true;
                }
              });

              if (!newItemExists) {
                newCart = [...cart, newItem];
              }

              setCart(newCart);
              const newCheckout = await (0,
              _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.updateCheckout)(
                checkoutId,
                newCart
              );
              localStorage.setItem(
                'checkout_id',
                JSON.stringify([newCart, newCheckout])
              );
            }
          }

          async function removeCartItem(itemToRemove) {
            const updatedCart = cart.filter((item) => item.id !== itemToRemove);
            setCart(updatedCart);
            const newCheckout = await (0,
            _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.updateCheckout)(
              checkoutId,
              updatedCart
            );

            if (cart.length === 1) {
              setCartOpen(false);
            }

            localStorage.setItem(
              'checkout_id',
              JSON.stringify([updatedCart, newCheckout])
            );
          }

          async function subtractCartItem(newItem) {
            // console.log('cart', cart);
            let newCart = [...cart];
            cart.map((item) => {
              if (item.id === newItem.id) {
                if (item.variantQuantity > 1) {
                  // console.log('item.variantQuantity', item.variantQuantity);
                  item.variantQuantity--;
                  newCart = [...cart];
                } else {
                  // console.log('just 1 item bruh');
                  return;
                }
              }
            });
            setCart(newCart);
            const newCheckout = await (0,
            _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.updateCheckout)(
              checkoutId,
              newCart
            );
            localStorage.setItem(
              'checkout_id',
              JSON.stringify([newCart, newCheckout])
            );
          }

          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            CartContext.Provider,
            {
              value: {
                cart,
                cartOpen,
                setCartOpen,
                addToCart,
                checkoutUrl,
                removeCartItem,
                subtractCartItem,
                addItemToCart,
              },
              children: children,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 5,
            },
            this
          );
        }
        const ShopConsumer = CartContext.Consumer;

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

    /***/ './pages/collections/[collection]/[product].js':
      /*!*****************************************************!*\
  !*** ./pages/collections/[collection]/[product].js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getStaticPaths: () =>
            /* binding */ getStaticPaths,
          /* harmony export */ getStaticProps: () =>
            /* binding */ getStaticProps,
          /* harmony export */
        });
        /* harmony import */ var _components_ProductPageContent__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../components/ProductPageContent */ './components/ProductPageContent.js'
          );
        /* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../../../lib/shopify */ './lib/shopify.js');
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ 'react/jsx-dev-runtime'
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
          );
        var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\pages\\collections\\[collection]\\[product].js';

        const Product = ({ collection, product }) => {
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
            'div',
            {
              className: `min-h-screen pb-2`,
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(
                _components_ProductPageContent__WEBPACK_IMPORTED_MODULE_0__.default,
                {
                  product: product,
                  collection: collection,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 7,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 6,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Product;
        async function getStaticPaths() {
          const products = await (0,
          _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.getProductFromCollections)();

          const getAllCombinations = (collections) => {
            const combinations = [];

            for (let i = 0; i < collections.length; i++) {
              const collection = collections[i];
              const products = collection.node.products.edges;

              for (let j = 0; j < products.length; j++) {
                const product = products[j];
                combinations.push({
                  params: {
                    collection: collection.node.handle,
                    product: product.node.handle,
                  },
                });
              }
            }

            return combinations;
          };

          const paths = getAllCombinations(products);
          return {
            paths,
            fallback: false,
          };
        }
        async function getStaticProps({ params }) {
          const product = await (0,
          _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.getProduct)(params.product);
          console.log(
            'PARAAAAAAMSLJASDFJLASJFKLFSDLJSFADLJSDFJLSADFLJK',
            params
          );
          return {
            props: {
              collection: params.collection,
              product,
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

    /***/ '@headlessui/react':
      /*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('@headlessui/react');

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

    /***/ './node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function AcademicCapIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                d: 'M12 14l9-5-9-5-9 5 9 5z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AcademicCapIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function AdjustmentsIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AdjustmentsIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/AnnotationIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AnnotationIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function AnnotationIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AnnotationIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArchiveIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArchiveIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArchiveIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArchiveIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowCircleDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowCircleDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowCircleLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowCircleLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowCircleRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowCircleRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowCircleUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowCircleUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 14l-7 7m0 0l-7-7m7 7V3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 19l-7-7m0 0l7-7m-7 7h18',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowNarrowDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 17l-4 4m0 0l-4-4m4 4V3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowNarrowDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowNarrowLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 16l-4-4m0 0l4-4m-4 4h18',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowNarrowLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowNarrowRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 8l4 4m0 0l-4 4m4-4H3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowNarrowRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowNarrowUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 7l4-4m0 0l4 4m-4-4v18',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowNarrowUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14 5l7 7m0 0l-7 7m7-7H3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowSmDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 13l-5 5m0 0l-5-5m5 5V6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowSmDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowSmLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 17l-5-5m0 0l5-5m-5 5h12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowSmLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowSmRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 7l5 5m0 0l-5 5m5-5H6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowSmRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowSmUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 11l5-5m0 0l5 5m-5-5v12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowSmUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 10l7-7m0 0l7 7m-7-7v18',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ArrowsExpandIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ArrowsExpandIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function AtSymbolIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AtSymbolIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BackspaceIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BackspaceIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BackspaceIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BackspaceIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BadgeCheckIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BadgeCheckIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BanIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BanIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BanIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = BanIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BeakerIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BeakerIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BeakerIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BeakerIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BellIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BellIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BellIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BellIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BookOpenIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookOpenIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BookOpenIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BookOpenIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BookmarkAltIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BookmarkAltIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BookmarkIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BookmarkIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BookmarkIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BookmarkIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function BriefcaseIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BriefcaseIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CakeIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CakeIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CakeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CakeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CalculatorIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CalculatorIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CalculatorIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CalendarIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CalendarIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CalendarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CalendarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CameraIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CameraIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CameraIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 13a3 3 0 11-6 0 3 3 0 016 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CameraIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CashIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CashIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CashIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CashIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChartBarIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChartBarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChartBarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChartPieIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartPieIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChartPieIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChartPieIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChartSquareBarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChartSquareBarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChatAlt2Icon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChatAlt2Icon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChatAltIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatAltIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChatAltIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChatAltIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChatIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChatIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChatIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChatIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CheckCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CheckCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CheckIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CheckIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 13l4 4L19 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CheckIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronDoubleDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 13l-7 7-7-7m14-8l-7 7-7-7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronDoubleDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronDoubleLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 19l-7-7 7-7m8 14l-7-7 7-7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronDoubleLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronDoubleRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 5l7 7-7 7M5 5l7 7-7 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronDoubleRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronDoubleUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 11l7-7 7 7M5 19l7-7 7 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronDoubleUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 9l-7 7-7-7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronLeftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 19l-7-7 7-7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronLeftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronRightIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 5l7 7-7 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronRightIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChevronUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 15l7-7 7 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChevronUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ChipIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChipIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ChipIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ChipIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ClipboardCheckIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ClipboardCheckIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ClipboardCopyIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ClipboardCopyIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ClipboardIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ClipboardIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ClipboardIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ClipboardListIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ClipboardListIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ClockIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ClockIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ClockIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ClockIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CloudDownloadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CloudDownloadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CloudIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CloudIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CloudIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CloudUploadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CloudUploadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CodeIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CodeIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CodeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CodeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CogIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CogIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CogIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = CogIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CollectionIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CollectionIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CollectionIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CollectionIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ColorSwatchIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ColorSwatchIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CreditCardIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CreditCardIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CreditCardIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CreditCardIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CubeIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CubeIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CubeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CubeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CubeTransparentIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CubeTransparentIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js':
      /*!******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js ***!
  \******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyBangladeshiIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyBangladeshiIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyDollarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyDollarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyEuroIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyEuroIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyPoundIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyPoundIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyRupeeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyRupeeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CurrencyYenIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CurrencyYenIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/CursorClickIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CursorClickIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function CursorClickIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CursorClickIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DatabaseIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DatabaseIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DatabaseIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DatabaseIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DesktopComputerIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DesktopComputerIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DeviceMobileIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DeviceMobileIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DeviceTabletIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DeviceTabletIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentAddIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentAddIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentDownloadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentDownloadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentDuplicateIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentDuplicateIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentRemoveIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentRemoveIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentReportIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentReportIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentSearchIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentSearchIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DocumentTextIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DocumentTextIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js':
      /*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DotsCircleHorizontalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DotsCircleHorizontalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DotsHorizontalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DotsHorizontalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DotsVerticalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DotsVerticalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DownloadIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DownloadIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DownloadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DownloadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/DuplicateIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DuplicateIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function DuplicateIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          DuplicateIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function EmojiHappyIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          EmojiHappyIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function EmojiSadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          EmojiSadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ExclamationCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ExclamationCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ExclamationIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExclamationIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ExclamationIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ExclamationIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ExternalLinkIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ExternalLinkIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/EyeIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EyeIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function EyeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = EyeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/EyeOffIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function EyeOffIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          EyeOffIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FastForwardIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FastForwardIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FastForwardIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FastForwardIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FilmIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FilmIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FilmIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FilmIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FilterIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FilterIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FilterIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FilterIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FingerPrintIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FingerPrintIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FireIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FireIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FireIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FireIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FlagIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FlagIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FlagIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FlagIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FolderAddIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderAddIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FolderAddIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FolderAddIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FolderDownloadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FolderDownloadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FolderIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FolderIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FolderIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FolderOpenIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FolderOpenIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function FolderRemoveIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FolderRemoveIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/GiftIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GiftIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function GiftIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GiftIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function GlobeAltIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GlobeAltIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/GlobeIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/GlobeIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function GlobeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          GlobeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/HandIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HandIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function HandIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HandIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/HashtagIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HashtagIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function HashtagIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HashtagIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/HeartIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HeartIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function HeartIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HeartIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/HomeIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/HomeIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function HomeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          HomeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/IdentificationIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/IdentificationIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function IdentificationIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          IdentificationIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/InboxIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InboxIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function InboxIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          InboxIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/InboxInIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InboxInIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function InboxInIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          InboxInIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function InformationCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          InformationCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/KeyIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/KeyIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function KeyIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = KeyIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LibraryIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LibraryIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LibraryIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LibraryIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LightBulbIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LightBulbIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LightBulbIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LightBulbIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LightningBoltIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 10V3L4 14h7v7l9-11h-7z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LightningBoltIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LinkIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LinkIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LinkIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LinkIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LocationMarkerIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LocationMarkerIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LockClosedIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LockClosedIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LockClosedIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LockClosedIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LockOpenIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LockOpenIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LockOpenIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LockOpenIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LoginIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LoginIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LoginIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LoginIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/LogoutIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LogoutIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function LogoutIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          LogoutIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MailIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MailIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MailIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MailIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MailOpenIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MailOpenIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MailOpenIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MailOpenIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MapIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MapIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MapIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MapIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MenuAlt1Icon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6h16M4 12h8m-8 6h16',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MenuAlt1Icon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MenuAlt2Icon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6h16M4 12h16M4 18h7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MenuAlt2Icon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MenuAlt3Icon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6h16M4 12h16m-7 6h7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MenuAlt3Icon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MenuAlt4Icon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 8h16M4 16h16',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MenuAlt4Icon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MenuIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MenuIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6h16M4 12h16M4 18h16',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MenuIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MicrophoneIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MicrophoneIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MinusCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MinusCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MinusIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MinusIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20 12H4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MinusIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MinusSmIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusSmIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MinusSmIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M18 12H6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MinusSmIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MoonIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MoonIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MoonIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MoonIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function MusicNoteIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MusicNoteIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/NewspaperIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/NewspaperIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function NewspaperIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          NewspaperIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function OfficeBuildingIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          OfficeBuildingIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PaperAirplaneIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PaperAirplaneIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PaperClipIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PaperClipIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PaperClipIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PaperClipIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PauseIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PauseIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PauseIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PauseIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PencilAltIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PencilAltIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PencilAltIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PencilIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PencilIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PencilIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PhoneIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PhoneIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PhoneIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PhoneIncomingIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PhoneIncomingIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PhoneMissedCallIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PhoneMissedCallIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PhoneOutgoingIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PhoneOutgoingIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PhotographIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PhotographIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PhotographIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PhotographIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PlayIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlayIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PlayIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PlayIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PlusCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PlusCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PlusIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PlusIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 4v16m8-8H4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PlusIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PlusSmIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PlusSmIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PlusSmIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PlusSmIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js':
      /*!*******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PresentationChartBarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PresentationChartBarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js':
      /*!********************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PresentationChartLineIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PresentationChartLineIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PrinterIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PrinterIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PrinterIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PrinterIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/PuzzleIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PuzzleIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function PuzzleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PuzzleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/QrcodeIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/QrcodeIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function QrcodeIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          QrcodeIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js':
      /*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function QuestionMarkCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          QuestionMarkCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ReceiptRefundIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ReceiptRefundIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ReceiptTaxIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ReceiptTaxIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/RefreshIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RefreshIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function RefreshIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          RefreshIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ReplyIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ReplyIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ReplyIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ReplyIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/RewindIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RewindIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function RewindIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          RewindIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/RssIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RssIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function RssIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = RssIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SaveAsIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SaveAsIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SaveAsIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SaveAsIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SaveIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SaveIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SaveIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SaveIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ScaleIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ScaleIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ScaleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ScaleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ScissorsIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ScissorsIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ScissorsIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ScissorsIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SearchCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SearchCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SearchIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SearchIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SearchIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SelectorIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SelectorIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SelectorIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 9l4-4 4 4m0 6l-4 4-4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SelectorIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ServerIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ServerIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ServerIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ServerIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ShareIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShareIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ShareIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ShareIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ShieldCheckIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ShieldCheckIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ShieldExclamationIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ShieldExclamationIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ShoppingBagIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ShoppingBagIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ShoppingCartIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ShoppingCartIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SortAscendingIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SortAscendingIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SortDescendingIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SortDescendingIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SparklesIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SparklesIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SparklesIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SparklesIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SpeakerphoneIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SpeakerphoneIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/StarIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StarIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function StarIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          StarIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js':
      /*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function StatusOfflineIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          StatusOfflineIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function StatusOnlineIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          StatusOnlineIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/StopIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/StopIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function StopIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          StopIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SunIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SunIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SunIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SunIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SupportIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SupportIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SupportIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SupportIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SwitchHorizontalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SwitchHorizontalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js':
      /*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function SwitchVerticalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          SwitchVerticalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TableIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TableIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TableIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TableIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TagIcon.js':
      /*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TagIcon.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TagIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TagIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TemplateIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TemplateIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TemplateIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TemplateIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TerminalIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TerminalIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TerminalIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TerminalIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ThumbDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ThumbDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ThumbUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ThumbUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TicketIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TicketIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TicketIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TicketIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TranslateIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TranslateIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TranslateIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TranslateIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TrashIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrashIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TrashIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TrashIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TrendingDownIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TrendingDownIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TrendingUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TrendingUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/TruckIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TruckIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function TruckIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                d: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TruckIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UploadIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UploadIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UploadIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UploadIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UserAddIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserAddIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UserAddIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserAddIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UserCircleIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UserCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UserGroupIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserGroupIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UserGroupIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserGroupIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UserIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UserIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UserRemoveIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserRemoveIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/UsersIcon.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UsersIcon.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function UsersIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UsersIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/VariableIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VariableIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function VariableIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          VariableIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function VideoCameraIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          VideoCameraIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ViewBoardsIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ViewBoardsIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ViewGridAddIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ViewGridAddIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ViewGridIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ViewGridIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ViewGridIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ViewListIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ViewListIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ViewListIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M4 6h16M4 10h16M4 14h16M4 18h16',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ViewListIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function VolumeOffIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
                clipRule: 'evenodd',
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          VolumeOffIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function VolumeUpIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          VolumeUpIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/WifiIcon.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/WifiIcon.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function WifiIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          WifiIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/XCircleIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XCircleIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function XCircleIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          XCircleIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/XIcon.js':
      /*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function XIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M6 18L18 6M6 6l12 12',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = XIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ZoomInIcon.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ZoomInIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ZoomInIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
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

        function ZoomOutIcon(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              props
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'path',
              {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7',
              }
            )
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ZoomOutIcon;

        /***/
      },

    /***/ './node_modules/@heroicons/react/outline/esm/index.js':
      /*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AcademicCapIcon: () =>
            /* reexport safe */ _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__.default,
          /* harmony export */ AdjustmentsIcon: () =>
            /* reexport safe */ _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__.default,
          /* harmony export */ AnnotationIcon: () =>
            /* reexport safe */ _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__.default,
          /* harmony export */ ArchiveIcon: () =>
            /* reexport safe */ _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__.default,
          /* harmony export */ ArrowCircleDownIcon: () =>
            /* reexport safe */ _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__.default,
          /* harmony export */ ArrowCircleLeftIcon: () =>
            /* reexport safe */ _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__.default,
          /* harmony export */ ArrowCircleRightIcon: () =>
            /* reexport safe */ _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__.default,
          /* harmony export */ ArrowCircleUpIcon: () =>
            /* reexport safe */ _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__.default,
          /* harmony export */ ArrowDownIcon: () =>
            /* reexport safe */ _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__.default,
          /* harmony export */ ArrowLeftIcon: () =>
            /* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__.default,
          /* harmony export */ ArrowNarrowDownIcon: () =>
            /* reexport safe */ _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__.default,
          /* harmony export */ ArrowNarrowLeftIcon: () =>
            /* reexport safe */ _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__.default,
          /* harmony export */ ArrowNarrowRightIcon: () =>
            /* reexport safe */ _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__.default,
          /* harmony export */ ArrowNarrowUpIcon: () =>
            /* reexport safe */ _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__.default,
          /* harmony export */ ArrowRightIcon: () =>
            /* reexport safe */ _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__.default,
          /* harmony export */ ArrowSmDownIcon: () =>
            /* reexport safe */ _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__.default,
          /* harmony export */ ArrowSmLeftIcon: () =>
            /* reexport safe */ _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__.default,
          /* harmony export */ ArrowSmRightIcon: () =>
            /* reexport safe */ _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__.default,
          /* harmony export */ ArrowSmUpIcon: () =>
            /* reexport safe */ _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__.default,
          /* harmony export */ ArrowUpIcon: () =>
            /* reexport safe */ _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__.default,
          /* harmony export */ ArrowsExpandIcon: () =>
            /* reexport safe */ _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__.default,
          /* harmony export */ AtSymbolIcon: () =>
            /* reexport safe */ _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__.default,
          /* harmony export */ BackspaceIcon: () =>
            /* reexport safe */ _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__.default,
          /* harmony export */ BadgeCheckIcon: () =>
            /* reexport safe */ _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__.default,
          /* harmony export */ BanIcon: () =>
            /* reexport safe */ _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__.default,
          /* harmony export */ BeakerIcon: () =>
            /* reexport safe */ _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__.default,
          /* harmony export */ BellIcon: () =>
            /* reexport safe */ _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__.default,
          /* harmony export */ BookOpenIcon: () =>
            /* reexport safe */ _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__.default,
          /* harmony export */ BookmarkAltIcon: () =>
            /* reexport safe */ _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__.default,
          /* harmony export */ BookmarkIcon: () =>
            /* reexport safe */ _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__.default,
          /* harmony export */ BriefcaseIcon: () =>
            /* reexport safe */ _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__.default,
          /* harmony export */ CakeIcon: () =>
            /* reexport safe */ _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__.default,
          /* harmony export */ CalculatorIcon: () =>
            /* reexport safe */ _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__.default,
          /* harmony export */ CalendarIcon: () =>
            /* reexport safe */ _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__.default,
          /* harmony export */ CameraIcon: () =>
            /* reexport safe */ _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__.default,
          /* harmony export */ CashIcon: () =>
            /* reexport safe */ _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__.default,
          /* harmony export */ ChartBarIcon: () =>
            /* reexport safe */ _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__.default,
          /* harmony export */ ChartPieIcon: () =>
            /* reexport safe */ _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__.default,
          /* harmony export */ ChartSquareBarIcon: () =>
            /* reexport safe */ _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__.default,
          /* harmony export */ ChatAlt2Icon: () =>
            /* reexport safe */ _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__.default,
          /* harmony export */ ChatAltIcon: () =>
            /* reexport safe */ _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__.default,
          /* harmony export */ ChatIcon: () =>
            /* reexport safe */ _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__.default,
          /* harmony export */ CheckCircleIcon: () =>
            /* reexport safe */ _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__.default,
          /* harmony export */ CheckIcon: () =>
            /* reexport safe */ _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__.default,
          /* harmony export */ ChevronDoubleDownIcon: () =>
            /* reexport safe */ _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__.default,
          /* harmony export */ ChevronDoubleLeftIcon: () =>
            /* reexport safe */ _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__.default,
          /* harmony export */ ChevronDoubleRightIcon: () =>
            /* reexport safe */ _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__.default,
          /* harmony export */ ChevronDoubleUpIcon: () =>
            /* reexport safe */ _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__.default,
          /* harmony export */ ChevronDownIcon: () =>
            /* reexport safe */ _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__.default,
          /* harmony export */ ChevronLeftIcon: () =>
            /* reexport safe */ _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__.default,
          /* harmony export */ ChevronRightIcon: () =>
            /* reexport safe */ _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__.default,
          /* harmony export */ ChevronUpIcon: () =>
            /* reexport safe */ _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__.default,
          /* harmony export */ ChipIcon: () =>
            /* reexport safe */ _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__.default,
          /* harmony export */ ClipboardCheckIcon: () =>
            /* reexport safe */ _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__.default,
          /* harmony export */ ClipboardCopyIcon: () =>
            /* reexport safe */ _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__.default,
          /* harmony export */ ClipboardListIcon: () =>
            /* reexport safe */ _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__.default,
          /* harmony export */ ClipboardIcon: () =>
            /* reexport safe */ _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__.default,
          /* harmony export */ ClockIcon: () =>
            /* reexport safe */ _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__.default,
          /* harmony export */ CloudDownloadIcon: () =>
            /* reexport safe */ _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__.default,
          /* harmony export */ CloudUploadIcon: () =>
            /* reexport safe */ _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__.default,
          /* harmony export */ CloudIcon: () =>
            /* reexport safe */ _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__.default,
          /* harmony export */ CodeIcon: () =>
            /* reexport safe */ _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__.default,
          /* harmony export */ CogIcon: () =>
            /* reexport safe */ _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__.default,
          /* harmony export */ CollectionIcon: () =>
            /* reexport safe */ _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__.default,
          /* harmony export */ ColorSwatchIcon: () =>
            /* reexport safe */ _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__.default,
          /* harmony export */ CreditCardIcon: () =>
            /* reexport safe */ _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__.default,
          /* harmony export */ CubeTransparentIcon: () =>
            /* reexport safe */ _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__.default,
          /* harmony export */ CubeIcon: () =>
            /* reexport safe */ _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__.default,
          /* harmony export */ CurrencyBangladeshiIcon: () =>
            /* reexport safe */ _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__.default,
          /* harmony export */ CurrencyDollarIcon: () =>
            /* reexport safe */ _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__.default,
          /* harmony export */ CurrencyEuroIcon: () =>
            /* reexport safe */ _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__.default,
          /* harmony export */ CurrencyPoundIcon: () =>
            /* reexport safe */ _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__.default,
          /* harmony export */ CurrencyRupeeIcon: () =>
            /* reexport safe */ _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__.default,
          /* harmony export */ CurrencyYenIcon: () =>
            /* reexport safe */ _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__.default,
          /* harmony export */ CursorClickIcon: () =>
            /* reexport safe */ _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__.default,
          /* harmony export */ DatabaseIcon: () =>
            /* reexport safe */ _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__.default,
          /* harmony export */ DesktopComputerIcon: () =>
            /* reexport safe */ _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__.default,
          /* harmony export */ DeviceMobileIcon: () =>
            /* reexport safe */ _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__.default,
          /* harmony export */ DeviceTabletIcon: () =>
            /* reexport safe */ _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__.default,
          /* harmony export */ DocumentAddIcon: () =>
            /* reexport safe */ _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__.default,
          /* harmony export */ DocumentDownloadIcon: () =>
            /* reexport safe */ _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__.default,
          /* harmony export */ DocumentDuplicateIcon: () =>
            /* reexport safe */ _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__.default,
          /* harmony export */ DocumentRemoveIcon: () =>
            /* reexport safe */ _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__.default,
          /* harmony export */ DocumentReportIcon: () =>
            /* reexport safe */ _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__.default,
          /* harmony export */ DocumentSearchIcon: () =>
            /* reexport safe */ _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__.default,
          /* harmony export */ DocumentTextIcon: () =>
            /* reexport safe */ _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__.default,
          /* harmony export */ DocumentIcon: () =>
            /* reexport safe */ _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__.default,
          /* harmony export */ DotsCircleHorizontalIcon: () =>
            /* reexport safe */ _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__.default,
          /* harmony export */ DotsHorizontalIcon: () =>
            /* reexport safe */ _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__.default,
          /* harmony export */ DotsVerticalIcon: () =>
            /* reexport safe */ _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__.default,
          /* harmony export */ DownloadIcon: () =>
            /* reexport safe */ _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__.default,
          /* harmony export */ DuplicateIcon: () =>
            /* reexport safe */ _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__.default,
          /* harmony export */ EmojiHappyIcon: () =>
            /* reexport safe */ _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__.default,
          /* harmony export */ EmojiSadIcon: () =>
            /* reexport safe */ _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__.default,
          /* harmony export */ ExclamationCircleIcon: () =>
            /* reexport safe */ _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__.default,
          /* harmony export */ ExclamationIcon: () =>
            /* reexport safe */ _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__.default,
          /* harmony export */ ExternalLinkIcon: () =>
            /* reexport safe */ _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__.default,
          /* harmony export */ EyeOffIcon: () =>
            /* reexport safe */ _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__.default,
          /* harmony export */ EyeIcon: () =>
            /* reexport safe */ _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__.default,
          /* harmony export */ FastForwardIcon: () =>
            /* reexport safe */ _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__.default,
          /* harmony export */ FilmIcon: () =>
            /* reexport safe */ _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__.default,
          /* harmony export */ FilterIcon: () =>
            /* reexport safe */ _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__.default,
          /* harmony export */ FingerPrintIcon: () =>
            /* reexport safe */ _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__.default,
          /* harmony export */ FireIcon: () =>
            /* reexport safe */ _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__.default,
          /* harmony export */ FlagIcon: () =>
            /* reexport safe */ _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__.default,
          /* harmony export */ FolderAddIcon: () =>
            /* reexport safe */ _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__.default,
          /* harmony export */ FolderDownloadIcon: () =>
            /* reexport safe */ _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__.default,
          /* harmony export */ FolderOpenIcon: () =>
            /* reexport safe */ _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__.default,
          /* harmony export */ FolderRemoveIcon: () =>
            /* reexport safe */ _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__.default,
          /* harmony export */ FolderIcon: () =>
            /* reexport safe */ _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__.default,
          /* harmony export */ GiftIcon: () =>
            /* reexport safe */ _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__.default,
          /* harmony export */ GlobeAltIcon: () =>
            /* reexport safe */ _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__.default,
          /* harmony export */ GlobeIcon: () =>
            /* reexport safe */ _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__.default,
          /* harmony export */ HandIcon: () =>
            /* reexport safe */ _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__.default,
          /* harmony export */ HashtagIcon: () =>
            /* reexport safe */ _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__.default,
          /* harmony export */ HeartIcon: () =>
            /* reexport safe */ _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__.default,
          /* harmony export */ HomeIcon: () =>
            /* reexport safe */ _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__.default,
          /* harmony export */ IdentificationIcon: () =>
            /* reexport safe */ _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__.default,
          /* harmony export */ InboxInIcon: () =>
            /* reexport safe */ _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__.default,
          /* harmony export */ InboxIcon: () =>
            /* reexport safe */ _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__.default,
          /* harmony export */ InformationCircleIcon: () =>
            /* reexport safe */ _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__.default,
          /* harmony export */ KeyIcon: () =>
            /* reexport safe */ _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__.default,
          /* harmony export */ LibraryIcon: () =>
            /* reexport safe */ _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__.default,
          /* harmony export */ LightBulbIcon: () =>
            /* reexport safe */ _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__.default,
          /* harmony export */ LightningBoltIcon: () =>
            /* reexport safe */ _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__.default,
          /* harmony export */ LinkIcon: () =>
            /* reexport safe */ _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__.default,
          /* harmony export */ LocationMarkerIcon: () =>
            /* reexport safe */ _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__.default,
          /* harmony export */ LockClosedIcon: () =>
            /* reexport safe */ _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__.default,
          /* harmony export */ LockOpenIcon: () =>
            /* reexport safe */ _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__.default,
          /* harmony export */ LoginIcon: () =>
            /* reexport safe */ _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__.default,
          /* harmony export */ LogoutIcon: () =>
            /* reexport safe */ _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__.default,
          /* harmony export */ MailOpenIcon: () =>
            /* reexport safe */ _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__.default,
          /* harmony export */ MailIcon: () =>
            /* reexport safe */ _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__.default,
          /* harmony export */ MapIcon: () =>
            /* reexport safe */ _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__.default,
          /* harmony export */ MenuAlt1Icon: () =>
            /* reexport safe */ _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__.default,
          /* harmony export */ MenuAlt2Icon: () =>
            /* reexport safe */ _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__.default,
          /* harmony export */ MenuAlt3Icon: () =>
            /* reexport safe */ _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__.default,
          /* harmony export */ MenuAlt4Icon: () =>
            /* reexport safe */ _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__.default,
          /* harmony export */ MenuIcon: () =>
            /* reexport safe */ _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__.default,
          /* harmony export */ MicrophoneIcon: () =>
            /* reexport safe */ _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__.default,
          /* harmony export */ MinusCircleIcon: () =>
            /* reexport safe */ _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__.default,
          /* harmony export */ MinusSmIcon: () =>
            /* reexport safe */ _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__.default,
          /* harmony export */ MinusIcon: () =>
            /* reexport safe */ _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__.default,
          /* harmony export */ MoonIcon: () =>
            /* reexport safe */ _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__.default,
          /* harmony export */ MusicNoteIcon: () =>
            /* reexport safe */ _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__.default,
          /* harmony export */ NewspaperIcon: () =>
            /* reexport safe */ _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__.default,
          /* harmony export */ OfficeBuildingIcon: () =>
            /* reexport safe */ _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__.default,
          /* harmony export */ PaperAirplaneIcon: () =>
            /* reexport safe */ _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__.default,
          /* harmony export */ PaperClipIcon: () =>
            /* reexport safe */ _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__.default,
          /* harmony export */ PauseIcon: () =>
            /* reexport safe */ _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__.default,
          /* harmony export */ PencilAltIcon: () =>
            /* reexport safe */ _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__.default,
          /* harmony export */ PencilIcon: () =>
            /* reexport safe */ _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__.default,
          /* harmony export */ PhoneIncomingIcon: () =>
            /* reexport safe */ _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__.default,
          /* harmony export */ PhoneMissedCallIcon: () =>
            /* reexport safe */ _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__.default,
          /* harmony export */ PhoneOutgoingIcon: () =>
            /* reexport safe */ _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__.default,
          /* harmony export */ PhoneIcon: () =>
            /* reexport safe */ _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__.default,
          /* harmony export */ PhotographIcon: () =>
            /* reexport safe */ _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__.default,
          /* harmony export */ PlayIcon: () =>
            /* reexport safe */ _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__.default,
          /* harmony export */ PlusCircleIcon: () =>
            /* reexport safe */ _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__.default,
          /* harmony export */ PlusSmIcon: () =>
            /* reexport safe */ _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__.default,
          /* harmony export */ PlusIcon: () =>
            /* reexport safe */ _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__.default,
          /* harmony export */ PresentationChartBarIcon: () =>
            /* reexport safe */ _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__.default,
          /* harmony export */ PresentationChartLineIcon: () =>
            /* reexport safe */ _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__.default,
          /* harmony export */ PrinterIcon: () =>
            /* reexport safe */ _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__.default,
          /* harmony export */ PuzzleIcon: () =>
            /* reexport safe */ _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__.default,
          /* harmony export */ QrcodeIcon: () =>
            /* reexport safe */ _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__.default,
          /* harmony export */ QuestionMarkCircleIcon: () =>
            /* reexport safe */ _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__.default,
          /* harmony export */ ReceiptRefundIcon: () =>
            /* reexport safe */ _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__.default,
          /* harmony export */ ReceiptTaxIcon: () =>
            /* reexport safe */ _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__.default,
          /* harmony export */ RefreshIcon: () =>
            /* reexport safe */ _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__.default,
          /* harmony export */ ReplyIcon: () =>
            /* reexport safe */ _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__.default,
          /* harmony export */ RewindIcon: () =>
            /* reexport safe */ _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__.default,
          /* harmony export */ RssIcon: () =>
            /* reexport safe */ _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__.default,
          /* harmony export */ SaveAsIcon: () =>
            /* reexport safe */ _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__.default,
          /* harmony export */ SaveIcon: () =>
            /* reexport safe */ _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__.default,
          /* harmony export */ ScaleIcon: () =>
            /* reexport safe */ _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__.default,
          /* harmony export */ ScissorsIcon: () =>
            /* reexport safe */ _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__.default,
          /* harmony export */ SearchCircleIcon: () =>
            /* reexport safe */ _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__.default,
          /* harmony export */ SearchIcon: () =>
            /* reexport safe */ _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__.default,
          /* harmony export */ SelectorIcon: () =>
            /* reexport safe */ _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__.default,
          /* harmony export */ ServerIcon: () =>
            /* reexport safe */ _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__.default,
          /* harmony export */ ShareIcon: () =>
            /* reexport safe */ _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__.default,
          /* harmony export */ ShieldCheckIcon: () =>
            /* reexport safe */ _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__.default,
          /* harmony export */ ShieldExclamationIcon: () =>
            /* reexport safe */ _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__.default,
          /* harmony export */ ShoppingBagIcon: () =>
            /* reexport safe */ _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__.default,
          /* harmony export */ ShoppingCartIcon: () =>
            /* reexport safe */ _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__.default,
          /* harmony export */ SortAscendingIcon: () =>
            /* reexport safe */ _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__.default,
          /* harmony export */ SortDescendingIcon: () =>
            /* reexport safe */ _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__.default,
          /* harmony export */ SparklesIcon: () =>
            /* reexport safe */ _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__.default,
          /* harmony export */ SpeakerphoneIcon: () =>
            /* reexport safe */ _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__.default,
          /* harmony export */ StarIcon: () =>
            /* reexport safe */ _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__.default,
          /* harmony export */ StatusOfflineIcon: () =>
            /* reexport safe */ _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__.default,
          /* harmony export */ StatusOnlineIcon: () =>
            /* reexport safe */ _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__.default,
          /* harmony export */ StopIcon: () =>
            /* reexport safe */ _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__.default,
          /* harmony export */ SunIcon: () =>
            /* reexport safe */ _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__.default,
          /* harmony export */ SupportIcon: () =>
            /* reexport safe */ _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__.default,
          /* harmony export */ SwitchHorizontalIcon: () =>
            /* reexport safe */ _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__.default,
          /* harmony export */ SwitchVerticalIcon: () =>
            /* reexport safe */ _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__.default,
          /* harmony export */ TableIcon: () =>
            /* reexport safe */ _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__.default,
          /* harmony export */ TagIcon: () =>
            /* reexport safe */ _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__.default,
          /* harmony export */ TemplateIcon: () =>
            /* reexport safe */ _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__.default,
          /* harmony export */ TerminalIcon: () =>
            /* reexport safe */ _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__.default,
          /* harmony export */ ThumbDownIcon: () =>
            /* reexport safe */ _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__.default,
          /* harmony export */ ThumbUpIcon: () =>
            /* reexport safe */ _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__.default,
          /* harmony export */ TicketIcon: () =>
            /* reexport safe */ _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__.default,
          /* harmony export */ TranslateIcon: () =>
            /* reexport safe */ _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__.default,
          /* harmony export */ TrashIcon: () =>
            /* reexport safe */ _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__.default,
          /* harmony export */ TrendingDownIcon: () =>
            /* reexport safe */ _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__.default,
          /* harmony export */ TrendingUpIcon: () =>
            /* reexport safe */ _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__.default,
          /* harmony export */ TruckIcon: () =>
            /* reexport safe */ _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__.default,
          /* harmony export */ UploadIcon: () =>
            /* reexport safe */ _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__.default,
          /* harmony export */ UserAddIcon: () =>
            /* reexport safe */ _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__.default,
          /* harmony export */ UserCircleIcon: () =>
            /* reexport safe */ _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__.default,
          /* harmony export */ UserGroupIcon: () =>
            /* reexport safe */ _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__.default,
          /* harmony export */ UserRemoveIcon: () =>
            /* reexport safe */ _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__.default,
          /* harmony export */ UserIcon: () =>
            /* reexport safe */ _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__.default,
          /* harmony export */ UsersIcon: () =>
            /* reexport safe */ _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__.default,
          /* harmony export */ VariableIcon: () =>
            /* reexport safe */ _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__.default,
          /* harmony export */ VideoCameraIcon: () =>
            /* reexport safe */ _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__.default,
          /* harmony export */ ViewBoardsIcon: () =>
            /* reexport safe */ _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__.default,
          /* harmony export */ ViewGridAddIcon: () =>
            /* reexport safe */ _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__.default,
          /* harmony export */ ViewGridIcon: () =>
            /* reexport safe */ _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__.default,
          /* harmony export */ ViewListIcon: () =>
            /* reexport safe */ _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__.default,
          /* harmony export */ VolumeOffIcon: () =>
            /* reexport safe */ _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__.default,
          /* harmony export */ VolumeUpIcon: () =>
            /* reexport safe */ _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__.default,
          /* harmony export */ WifiIcon: () =>
            /* reexport safe */ _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__.default,
          /* harmony export */ XCircleIcon: () =>
            /* reexport safe */ _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__.default,
          /* harmony export */ XIcon: () =>
            /* reexport safe */ _XIcon_js__WEBPACK_IMPORTED_MODULE_227__.default,
          /* harmony export */ ZoomInIcon: () =>
            /* reexport safe */ _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__.default,
          /* harmony export */ ZoomOutIcon: () =>
            /* reexport safe */ _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__.default,
          /* harmony export */
        });
        /* harmony import */ var _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./AcademicCapIcon.js */ './node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js'
          );
        /* harmony import */ var _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./AdjustmentsIcon.js */ './node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js'
          );
        /* harmony import */ var _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./AnnotationIcon.js */ './node_modules/@heroicons/react/outline/esm/AnnotationIcon.js'
          );
        /* harmony import */ var _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./ArchiveIcon.js */ './node_modules/@heroicons/react/outline/esm/ArchiveIcon.js'
          );
        /* harmony import */ var _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./ArrowCircleDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js'
          );
        /* harmony import */ var _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./ArrowCircleLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js'
          );
        /* harmony import */ var _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./ArrowCircleRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js'
          );
        /* harmony import */ var _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./ArrowCircleUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js'
          );
        /* harmony import */ var _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./ArrowDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js'
          );
        /* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./ArrowLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js'
          );
        /* harmony import */ var _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./ArrowNarrowDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js'
          );
        /* harmony import */ var _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./ArrowNarrowLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js'
          );
        /* harmony import */ var _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./ArrowNarrowRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js'
          );
        /* harmony import */ var _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ./ArrowNarrowUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js'
          );
        /* harmony import */ var _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ./ArrowRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js'
          );
        /* harmony import */ var _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ./ArrowSmDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js'
          );
        /* harmony import */ var _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ./ArrowSmLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js'
          );
        /* harmony import */ var _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ./ArrowSmRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js'
          );
        /* harmony import */ var _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ./ArrowSmUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js'
          );
        /* harmony import */ var _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ./ArrowUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js'
          );
        /* harmony import */ var _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ./ArrowsExpandIcon.js */ './node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js'
          );
        /* harmony import */ var _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ./AtSymbolIcon.js */ './node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js'
          );
        /* harmony import */ var _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ./BackspaceIcon.js */ './node_modules/@heroicons/react/outline/esm/BackspaceIcon.js'
          );
        /* harmony import */ var _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! ./BadgeCheckIcon.js */ './node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js'
          );
        /* harmony import */ var _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(
            /*! ./BanIcon.js */ './node_modules/@heroicons/react/outline/esm/BanIcon.js'
          );
        /* harmony import */ var _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! ./BeakerIcon.js */ './node_modules/@heroicons/react/outline/esm/BeakerIcon.js'
          );
        /* harmony import */ var _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! ./BellIcon.js */ './node_modules/@heroicons/react/outline/esm/BellIcon.js'
          );
        /* harmony import */ var _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(
            /*! ./BookOpenIcon.js */ './node_modules/@heroicons/react/outline/esm/BookOpenIcon.js'
          );
        /* harmony import */ var _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(
            /*! ./BookmarkAltIcon.js */ './node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js'
          );
        /* harmony import */ var _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(
            /*! ./BookmarkIcon.js */ './node_modules/@heroicons/react/outline/esm/BookmarkIcon.js'
          );
        /* harmony import */ var _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! ./BriefcaseIcon.js */ './node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js'
          );
        /* harmony import */ var _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(
            /*! ./CakeIcon.js */ './node_modules/@heroicons/react/outline/esm/CakeIcon.js'
          );
        /* harmony import */ var _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(
            /*! ./CalculatorIcon.js */ './node_modules/@heroicons/react/outline/esm/CalculatorIcon.js'
          );
        /* harmony import */ var _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__ =
          __webpack_require__(
            /*! ./CalendarIcon.js */ './node_modules/@heroicons/react/outline/esm/CalendarIcon.js'
          );
        /* harmony import */ var _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__ =
          __webpack_require__(
            /*! ./CameraIcon.js */ './node_modules/@heroicons/react/outline/esm/CameraIcon.js'
          );
        /* harmony import */ var _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__ =
          __webpack_require__(
            /*! ./CashIcon.js */ './node_modules/@heroicons/react/outline/esm/CashIcon.js'
          );
        /* harmony import */ var _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__ =
          __webpack_require__(
            /*! ./ChartBarIcon.js */ './node_modules/@heroicons/react/outline/esm/ChartBarIcon.js'
          );
        /* harmony import */ var _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__ =
          __webpack_require__(
            /*! ./ChartPieIcon.js */ './node_modules/@heroicons/react/outline/esm/ChartPieIcon.js'
          );
        /* harmony import */ var _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__ =
          __webpack_require__(
            /*! ./ChartSquareBarIcon.js */ './node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js'
          );
        /* harmony import */ var _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__ =
          __webpack_require__(
            /*! ./ChatAlt2Icon.js */ './node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js'
          );
        /* harmony import */ var _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__ =
          __webpack_require__(
            /*! ./ChatAltIcon.js */ './node_modules/@heroicons/react/outline/esm/ChatAltIcon.js'
          );
        /* harmony import */ var _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__ =
          __webpack_require__(
            /*! ./ChatIcon.js */ './node_modules/@heroicons/react/outline/esm/ChatIcon.js'
          );
        /* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__ =
          __webpack_require__(
            /*! ./CheckCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js'
          );
        /* harmony import */ var _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__ =
          __webpack_require__(
            /*! ./CheckIcon.js */ './node_modules/@heroicons/react/outline/esm/CheckIcon.js'
          );
        /* harmony import */ var _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__ =
          __webpack_require__(
            /*! ./ChevronDoubleDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js'
          );
        /* harmony import */ var _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__ =
          __webpack_require__(
            /*! ./ChevronDoubleLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js'
          );
        /* harmony import */ var _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__ =
          __webpack_require__(
            /*! ./ChevronDoubleRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js'
          );
        /* harmony import */ var _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__ =
          __webpack_require__(
            /*! ./ChevronDoubleUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js'
          );
        /* harmony import */ var _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__ =
          __webpack_require__(
            /*! ./ChevronDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js'
          );
        /* harmony import */ var _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__ =
          __webpack_require__(
            /*! ./ChevronLeftIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js'
          );
        /* harmony import */ var _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__ =
          __webpack_require__(
            /*! ./ChevronRightIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js'
          );
        /* harmony import */ var _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__ =
          __webpack_require__(
            /*! ./ChevronUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js'
          );
        /* harmony import */ var _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__ =
          __webpack_require__(
            /*! ./ChipIcon.js */ './node_modules/@heroicons/react/outline/esm/ChipIcon.js'
          );
        /* harmony import */ var _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__ =
          __webpack_require__(
            /*! ./ClipboardCheckIcon.js */ './node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js'
          );
        /* harmony import */ var _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__ =
          __webpack_require__(
            /*! ./ClipboardCopyIcon.js */ './node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js'
          );
        /* harmony import */ var _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__ =
          __webpack_require__(
            /*! ./ClipboardListIcon.js */ './node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js'
          );
        /* harmony import */ var _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__ =
          __webpack_require__(
            /*! ./ClipboardIcon.js */ './node_modules/@heroicons/react/outline/esm/ClipboardIcon.js'
          );
        /* harmony import */ var _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__ =
          __webpack_require__(
            /*! ./ClockIcon.js */ './node_modules/@heroicons/react/outline/esm/ClockIcon.js'
          );
        /* harmony import */ var _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__ =
          __webpack_require__(
            /*! ./CloudDownloadIcon.js */ './node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js'
          );
        /* harmony import */ var _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__ =
          __webpack_require__(
            /*! ./CloudUploadIcon.js */ './node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js'
          );
        /* harmony import */ var _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__ =
          __webpack_require__(
            /*! ./CloudIcon.js */ './node_modules/@heroicons/react/outline/esm/CloudIcon.js'
          );
        /* harmony import */ var _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__ =
          __webpack_require__(
            /*! ./CodeIcon.js */ './node_modules/@heroicons/react/outline/esm/CodeIcon.js'
          );
        /* harmony import */ var _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__ =
          __webpack_require__(
            /*! ./CogIcon.js */ './node_modules/@heroicons/react/outline/esm/CogIcon.js'
          );
        /* harmony import */ var _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__ =
          __webpack_require__(
            /*! ./CollectionIcon.js */ './node_modules/@heroicons/react/outline/esm/CollectionIcon.js'
          );
        /* harmony import */ var _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__ =
          __webpack_require__(
            /*! ./ColorSwatchIcon.js */ './node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js'
          );
        /* harmony import */ var _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__ =
          __webpack_require__(
            /*! ./CreditCardIcon.js */ './node_modules/@heroicons/react/outline/esm/CreditCardIcon.js'
          );
        /* harmony import */ var _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__ =
          __webpack_require__(
            /*! ./CubeTransparentIcon.js */ './node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js'
          );
        /* harmony import */ var _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__ =
          __webpack_require__(
            /*! ./CubeIcon.js */ './node_modules/@heroicons/react/outline/esm/CubeIcon.js'
          );
        /* harmony import */ var _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__ =
          __webpack_require__(
            /*! ./CurrencyBangladeshiIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js'
          );
        /* harmony import */ var _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__ =
          __webpack_require__(
            /*! ./CurrencyDollarIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js'
          );
        /* harmony import */ var _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__ =
          __webpack_require__(
            /*! ./CurrencyEuroIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js'
          );
        /* harmony import */ var _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__ =
          __webpack_require__(
            /*! ./CurrencyPoundIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js'
          );
        /* harmony import */ var _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__ =
          __webpack_require__(
            /*! ./CurrencyRupeeIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js'
          );
        /* harmony import */ var _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__ =
          __webpack_require__(
            /*! ./CurrencyYenIcon.js */ './node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js'
          );
        /* harmony import */ var _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__ =
          __webpack_require__(
            /*! ./CursorClickIcon.js */ './node_modules/@heroicons/react/outline/esm/CursorClickIcon.js'
          );
        /* harmony import */ var _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__ =
          __webpack_require__(
            /*! ./DatabaseIcon.js */ './node_modules/@heroicons/react/outline/esm/DatabaseIcon.js'
          );
        /* harmony import */ var _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__ =
          __webpack_require__(
            /*! ./DesktopComputerIcon.js */ './node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js'
          );
        /* harmony import */ var _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__ =
          __webpack_require__(
            /*! ./DeviceMobileIcon.js */ './node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js'
          );
        /* harmony import */ var _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__ =
          __webpack_require__(
            /*! ./DeviceTabletIcon.js */ './node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js'
          );
        /* harmony import */ var _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__ =
          __webpack_require__(
            /*! ./DocumentAddIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js'
          );
        /* harmony import */ var _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__ =
          __webpack_require__(
            /*! ./DocumentDownloadIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js'
          );
        /* harmony import */ var _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__ =
          __webpack_require__(
            /*! ./DocumentDuplicateIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js'
          );
        /* harmony import */ var _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__ =
          __webpack_require__(
            /*! ./DocumentRemoveIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js'
          );
        /* harmony import */ var _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__ =
          __webpack_require__(
            /*! ./DocumentReportIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js'
          );
        /* harmony import */ var _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__ =
          __webpack_require__(
            /*! ./DocumentSearchIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js'
          );
        /* harmony import */ var _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__ =
          __webpack_require__(
            /*! ./DocumentTextIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js'
          );
        /* harmony import */ var _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__ =
          __webpack_require__(
            /*! ./DocumentIcon.js */ './node_modules/@heroicons/react/outline/esm/DocumentIcon.js'
          );
        /* harmony import */ var _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__ =
          __webpack_require__(
            /*! ./DotsCircleHorizontalIcon.js */ './node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js'
          );
        /* harmony import */ var _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__ =
          __webpack_require__(
            /*! ./DotsHorizontalIcon.js */ './node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js'
          );
        /* harmony import */ var _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__ =
          __webpack_require__(
            /*! ./DotsVerticalIcon.js */ './node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js'
          );
        /* harmony import */ var _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__ =
          __webpack_require__(
            /*! ./DownloadIcon.js */ './node_modules/@heroicons/react/outline/esm/DownloadIcon.js'
          );
        /* harmony import */ var _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__ =
          __webpack_require__(
            /*! ./DuplicateIcon.js */ './node_modules/@heroicons/react/outline/esm/DuplicateIcon.js'
          );
        /* harmony import */ var _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__ =
          __webpack_require__(
            /*! ./EmojiHappyIcon.js */ './node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js'
          );
        /* harmony import */ var _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__ =
          __webpack_require__(
            /*! ./EmojiSadIcon.js */ './node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js'
          );
        /* harmony import */ var _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__ =
          __webpack_require__(
            /*! ./ExclamationCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js'
          );
        /* harmony import */ var _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__ =
          __webpack_require__(
            /*! ./ExclamationIcon.js */ './node_modules/@heroicons/react/outline/esm/ExclamationIcon.js'
          );
        /* harmony import */ var _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__ =
          __webpack_require__(
            /*! ./ExternalLinkIcon.js */ './node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js'
          );
        /* harmony import */ var _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__ =
          __webpack_require__(
            /*! ./EyeOffIcon.js */ './node_modules/@heroicons/react/outline/esm/EyeOffIcon.js'
          );
        /* harmony import */ var _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__ =
          __webpack_require__(
            /*! ./EyeIcon.js */ './node_modules/@heroicons/react/outline/esm/EyeIcon.js'
          );
        /* harmony import */ var _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__ =
          __webpack_require__(
            /*! ./FastForwardIcon.js */ './node_modules/@heroicons/react/outline/esm/FastForwardIcon.js'
          );
        /* harmony import */ var _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__ =
          __webpack_require__(
            /*! ./FilmIcon.js */ './node_modules/@heroicons/react/outline/esm/FilmIcon.js'
          );
        /* harmony import */ var _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__ =
          __webpack_require__(
            /*! ./FilterIcon.js */ './node_modules/@heroicons/react/outline/esm/FilterIcon.js'
          );
        /* harmony import */ var _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__ =
          __webpack_require__(
            /*! ./FingerPrintIcon.js */ './node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js'
          );
        /* harmony import */ var _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__ =
          __webpack_require__(
            /*! ./FireIcon.js */ './node_modules/@heroicons/react/outline/esm/FireIcon.js'
          );
        /* harmony import */ var _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__ =
          __webpack_require__(
            /*! ./FlagIcon.js */ './node_modules/@heroicons/react/outline/esm/FlagIcon.js'
          );
        /* harmony import */ var _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__ =
          __webpack_require__(
            /*! ./FolderAddIcon.js */ './node_modules/@heroicons/react/outline/esm/FolderAddIcon.js'
          );
        /* harmony import */ var _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__ =
          __webpack_require__(
            /*! ./FolderDownloadIcon.js */ './node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js'
          );
        /* harmony import */ var _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__ =
          __webpack_require__(
            /*! ./FolderOpenIcon.js */ './node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js'
          );
        /* harmony import */ var _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__ =
          __webpack_require__(
            /*! ./FolderRemoveIcon.js */ './node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js'
          );
        /* harmony import */ var _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__ =
          __webpack_require__(
            /*! ./FolderIcon.js */ './node_modules/@heroicons/react/outline/esm/FolderIcon.js'
          );
        /* harmony import */ var _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__ =
          __webpack_require__(
            /*! ./GiftIcon.js */ './node_modules/@heroicons/react/outline/esm/GiftIcon.js'
          );
        /* harmony import */ var _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__ =
          __webpack_require__(
            /*! ./GlobeAltIcon.js */ './node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js'
          );
        /* harmony import */ var _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__ =
          __webpack_require__(
            /*! ./GlobeIcon.js */ './node_modules/@heroicons/react/outline/esm/GlobeIcon.js'
          );
        /* harmony import */ var _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__ =
          __webpack_require__(
            /*! ./HandIcon.js */ './node_modules/@heroicons/react/outline/esm/HandIcon.js'
          );
        /* harmony import */ var _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__ =
          __webpack_require__(
            /*! ./HashtagIcon.js */ './node_modules/@heroicons/react/outline/esm/HashtagIcon.js'
          );
        /* harmony import */ var _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__ =
          __webpack_require__(
            /*! ./HeartIcon.js */ './node_modules/@heroicons/react/outline/esm/HeartIcon.js'
          );
        /* harmony import */ var _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__ =
          __webpack_require__(
            /*! ./HomeIcon.js */ './node_modules/@heroicons/react/outline/esm/HomeIcon.js'
          );
        /* harmony import */ var _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__ =
          __webpack_require__(
            /*! ./IdentificationIcon.js */ './node_modules/@heroicons/react/outline/esm/IdentificationIcon.js'
          );
        /* harmony import */ var _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__ =
          __webpack_require__(
            /*! ./InboxInIcon.js */ './node_modules/@heroicons/react/outline/esm/InboxInIcon.js'
          );
        /* harmony import */ var _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__ =
          __webpack_require__(
            /*! ./InboxIcon.js */ './node_modules/@heroicons/react/outline/esm/InboxIcon.js'
          );
        /* harmony import */ var _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__ =
          __webpack_require__(
            /*! ./InformationCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js'
          );
        /* harmony import */ var _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__ =
          __webpack_require__(
            /*! ./KeyIcon.js */ './node_modules/@heroicons/react/outline/esm/KeyIcon.js'
          );
        /* harmony import */ var _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__ =
          __webpack_require__(
            /*! ./LibraryIcon.js */ './node_modules/@heroicons/react/outline/esm/LibraryIcon.js'
          );
        /* harmony import */ var _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__ =
          __webpack_require__(
            /*! ./LightBulbIcon.js */ './node_modules/@heroicons/react/outline/esm/LightBulbIcon.js'
          );
        /* harmony import */ var _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__ =
          __webpack_require__(
            /*! ./LightningBoltIcon.js */ './node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js'
          );
        /* harmony import */ var _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__ =
          __webpack_require__(
            /*! ./LinkIcon.js */ './node_modules/@heroicons/react/outline/esm/LinkIcon.js'
          );
        /* harmony import */ var _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__ =
          __webpack_require__(
            /*! ./LocationMarkerIcon.js */ './node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js'
          );
        /* harmony import */ var _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__ =
          __webpack_require__(
            /*! ./LockClosedIcon.js */ './node_modules/@heroicons/react/outline/esm/LockClosedIcon.js'
          );
        /* harmony import */ var _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__ =
          __webpack_require__(
            /*! ./LockOpenIcon.js */ './node_modules/@heroicons/react/outline/esm/LockOpenIcon.js'
          );
        /* harmony import */ var _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__ =
          __webpack_require__(
            /*! ./LoginIcon.js */ './node_modules/@heroicons/react/outline/esm/LoginIcon.js'
          );
        /* harmony import */ var _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__ =
          __webpack_require__(
            /*! ./LogoutIcon.js */ './node_modules/@heroicons/react/outline/esm/LogoutIcon.js'
          );
        /* harmony import */ var _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__ =
          __webpack_require__(
            /*! ./MailOpenIcon.js */ './node_modules/@heroicons/react/outline/esm/MailOpenIcon.js'
          );
        /* harmony import */ var _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__ =
          __webpack_require__(
            /*! ./MailIcon.js */ './node_modules/@heroicons/react/outline/esm/MailIcon.js'
          );
        /* harmony import */ var _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__ =
          __webpack_require__(
            /*! ./MapIcon.js */ './node_modules/@heroicons/react/outline/esm/MapIcon.js'
          );
        /* harmony import */ var _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__ =
          __webpack_require__(
            /*! ./MenuAlt1Icon.js */ './node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js'
          );
        /* harmony import */ var _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__ =
          __webpack_require__(
            /*! ./MenuAlt2Icon.js */ './node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js'
          );
        /* harmony import */ var _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__ =
          __webpack_require__(
            /*! ./MenuAlt3Icon.js */ './node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js'
          );
        /* harmony import */ var _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__ =
          __webpack_require__(
            /*! ./MenuAlt4Icon.js */ './node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js'
          );
        /* harmony import */ var _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__ =
          __webpack_require__(
            /*! ./MenuIcon.js */ './node_modules/@heroicons/react/outline/esm/MenuIcon.js'
          );
        /* harmony import */ var _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__ =
          __webpack_require__(
            /*! ./MicrophoneIcon.js */ './node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js'
          );
        /* harmony import */ var _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__ =
          __webpack_require__(
            /*! ./MinusCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js'
          );
        /* harmony import */ var _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__ =
          __webpack_require__(
            /*! ./MinusSmIcon.js */ './node_modules/@heroicons/react/outline/esm/MinusSmIcon.js'
          );
        /* harmony import */ var _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__ =
          __webpack_require__(
            /*! ./MinusIcon.js */ './node_modules/@heroicons/react/outline/esm/MinusIcon.js'
          );
        /* harmony import */ var _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__ =
          __webpack_require__(
            /*! ./MoonIcon.js */ './node_modules/@heroicons/react/outline/esm/MoonIcon.js'
          );
        /* harmony import */ var _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__ =
          __webpack_require__(
            /*! ./MusicNoteIcon.js */ './node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js'
          );
        /* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__ =
          __webpack_require__(
            /*! ./NewspaperIcon.js */ './node_modules/@heroicons/react/outline/esm/NewspaperIcon.js'
          );
        /* harmony import */ var _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__ =
          __webpack_require__(
            /*! ./OfficeBuildingIcon.js */ './node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js'
          );
        /* harmony import */ var _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__ =
          __webpack_require__(
            /*! ./PaperAirplaneIcon.js */ './node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js'
          );
        /* harmony import */ var _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__ =
          __webpack_require__(
            /*! ./PaperClipIcon.js */ './node_modules/@heroicons/react/outline/esm/PaperClipIcon.js'
          );
        /* harmony import */ var _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__ =
          __webpack_require__(
            /*! ./PauseIcon.js */ './node_modules/@heroicons/react/outline/esm/PauseIcon.js'
          );
        /* harmony import */ var _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__ =
          __webpack_require__(
            /*! ./PencilAltIcon.js */ './node_modules/@heroicons/react/outline/esm/PencilAltIcon.js'
          );
        /* harmony import */ var _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__ =
          __webpack_require__(
            /*! ./PencilIcon.js */ './node_modules/@heroicons/react/outline/esm/PencilIcon.js'
          );
        /* harmony import */ var _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__ =
          __webpack_require__(
            /*! ./PhoneIncomingIcon.js */ './node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js'
          );
        /* harmony import */ var _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__ =
          __webpack_require__(
            /*! ./PhoneMissedCallIcon.js */ './node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js'
          );
        /* harmony import */ var _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__ =
          __webpack_require__(
            /*! ./PhoneOutgoingIcon.js */ './node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js'
          );
        /* harmony import */ var _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__ =
          __webpack_require__(
            /*! ./PhoneIcon.js */ './node_modules/@heroicons/react/outline/esm/PhoneIcon.js'
          );
        /* harmony import */ var _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__ =
          __webpack_require__(
            /*! ./PhotographIcon.js */ './node_modules/@heroicons/react/outline/esm/PhotographIcon.js'
          );
        /* harmony import */ var _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__ =
          __webpack_require__(
            /*! ./PlayIcon.js */ './node_modules/@heroicons/react/outline/esm/PlayIcon.js'
          );
        /* harmony import */ var _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__ =
          __webpack_require__(
            /*! ./PlusCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js'
          );
        /* harmony import */ var _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__ =
          __webpack_require__(
            /*! ./PlusSmIcon.js */ './node_modules/@heroicons/react/outline/esm/PlusSmIcon.js'
          );
        /* harmony import */ var _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__ =
          __webpack_require__(
            /*! ./PlusIcon.js */ './node_modules/@heroicons/react/outline/esm/PlusIcon.js'
          );
        /* harmony import */ var _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__ =
          __webpack_require__(
            /*! ./PresentationChartBarIcon.js */ './node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js'
          );
        /* harmony import */ var _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__ =
          __webpack_require__(
            /*! ./PresentationChartLineIcon.js */ './node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js'
          );
        /* harmony import */ var _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__ =
          __webpack_require__(
            /*! ./PrinterIcon.js */ './node_modules/@heroicons/react/outline/esm/PrinterIcon.js'
          );
        /* harmony import */ var _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__ =
          __webpack_require__(
            /*! ./PuzzleIcon.js */ './node_modules/@heroicons/react/outline/esm/PuzzleIcon.js'
          );
        /* harmony import */ var _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__ =
          __webpack_require__(
            /*! ./QrcodeIcon.js */ './node_modules/@heroicons/react/outline/esm/QrcodeIcon.js'
          );
        /* harmony import */ var _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__ =
          __webpack_require__(
            /*! ./QuestionMarkCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js'
          );
        /* harmony import */ var _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__ =
          __webpack_require__(
            /*! ./ReceiptRefundIcon.js */ './node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js'
          );
        /* harmony import */ var _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__ =
          __webpack_require__(
            /*! ./ReceiptTaxIcon.js */ './node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js'
          );
        /* harmony import */ var _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__ =
          __webpack_require__(
            /*! ./RefreshIcon.js */ './node_modules/@heroicons/react/outline/esm/RefreshIcon.js'
          );
        /* harmony import */ var _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__ =
          __webpack_require__(
            /*! ./ReplyIcon.js */ './node_modules/@heroicons/react/outline/esm/ReplyIcon.js'
          );
        /* harmony import */ var _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__ =
          __webpack_require__(
            /*! ./RewindIcon.js */ './node_modules/@heroicons/react/outline/esm/RewindIcon.js'
          );
        /* harmony import */ var _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__ =
          __webpack_require__(
            /*! ./RssIcon.js */ './node_modules/@heroicons/react/outline/esm/RssIcon.js'
          );
        /* harmony import */ var _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__ =
          __webpack_require__(
            /*! ./SaveAsIcon.js */ './node_modules/@heroicons/react/outline/esm/SaveAsIcon.js'
          );
        /* harmony import */ var _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__ =
          __webpack_require__(
            /*! ./SaveIcon.js */ './node_modules/@heroicons/react/outline/esm/SaveIcon.js'
          );
        /* harmony import */ var _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__ =
          __webpack_require__(
            /*! ./ScaleIcon.js */ './node_modules/@heroicons/react/outline/esm/ScaleIcon.js'
          );
        /* harmony import */ var _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__ =
          __webpack_require__(
            /*! ./ScissorsIcon.js */ './node_modules/@heroicons/react/outline/esm/ScissorsIcon.js'
          );
        /* harmony import */ var _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__ =
          __webpack_require__(
            /*! ./SearchCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js'
          );
        /* harmony import */ var _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__ =
          __webpack_require__(
            /*! ./SearchIcon.js */ './node_modules/@heroicons/react/outline/esm/SearchIcon.js'
          );
        /* harmony import */ var _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__ =
          __webpack_require__(
            /*! ./SelectorIcon.js */ './node_modules/@heroicons/react/outline/esm/SelectorIcon.js'
          );
        /* harmony import */ var _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__ =
          __webpack_require__(
            /*! ./ServerIcon.js */ './node_modules/@heroicons/react/outline/esm/ServerIcon.js'
          );
        /* harmony import */ var _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__ =
          __webpack_require__(
            /*! ./ShareIcon.js */ './node_modules/@heroicons/react/outline/esm/ShareIcon.js'
          );
        /* harmony import */ var _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__ =
          __webpack_require__(
            /*! ./ShieldCheckIcon.js */ './node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js'
          );
        /* harmony import */ var _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__ =
          __webpack_require__(
            /*! ./ShieldExclamationIcon.js */ './node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js'
          );
        /* harmony import */ var _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__ =
          __webpack_require__(
            /*! ./ShoppingBagIcon.js */ './node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js'
          );
        /* harmony import */ var _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__ =
          __webpack_require__(
            /*! ./ShoppingCartIcon.js */ './node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js'
          );
        /* harmony import */ var _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__ =
          __webpack_require__(
            /*! ./SortAscendingIcon.js */ './node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js'
          );
        /* harmony import */ var _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__ =
          __webpack_require__(
            /*! ./SortDescendingIcon.js */ './node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js'
          );
        /* harmony import */ var _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__ =
          __webpack_require__(
            /*! ./SparklesIcon.js */ './node_modules/@heroicons/react/outline/esm/SparklesIcon.js'
          );
        /* harmony import */ var _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__ =
          __webpack_require__(
            /*! ./SpeakerphoneIcon.js */ './node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js'
          );
        /* harmony import */ var _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__ =
          __webpack_require__(
            /*! ./StarIcon.js */ './node_modules/@heroicons/react/outline/esm/StarIcon.js'
          );
        /* harmony import */ var _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__ =
          __webpack_require__(
            /*! ./StatusOfflineIcon.js */ './node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js'
          );
        /* harmony import */ var _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__ =
          __webpack_require__(
            /*! ./StatusOnlineIcon.js */ './node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js'
          );
        /* harmony import */ var _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__ =
          __webpack_require__(
            /*! ./StopIcon.js */ './node_modules/@heroicons/react/outline/esm/StopIcon.js'
          );
        /* harmony import */ var _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__ =
          __webpack_require__(
            /*! ./SunIcon.js */ './node_modules/@heroicons/react/outline/esm/SunIcon.js'
          );
        /* harmony import */ var _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__ =
          __webpack_require__(
            /*! ./SupportIcon.js */ './node_modules/@heroicons/react/outline/esm/SupportIcon.js'
          );
        /* harmony import */ var _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__ =
          __webpack_require__(
            /*! ./SwitchHorizontalIcon.js */ './node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js'
          );
        /* harmony import */ var _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__ =
          __webpack_require__(
            /*! ./SwitchVerticalIcon.js */ './node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js'
          );
        /* harmony import */ var _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__ =
          __webpack_require__(
            /*! ./TableIcon.js */ './node_modules/@heroicons/react/outline/esm/TableIcon.js'
          );
        /* harmony import */ var _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__ =
          __webpack_require__(
            /*! ./TagIcon.js */ './node_modules/@heroicons/react/outline/esm/TagIcon.js'
          );
        /* harmony import */ var _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__ =
          __webpack_require__(
            /*! ./TemplateIcon.js */ './node_modules/@heroicons/react/outline/esm/TemplateIcon.js'
          );
        /* harmony import */ var _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__ =
          __webpack_require__(
            /*! ./TerminalIcon.js */ './node_modules/@heroicons/react/outline/esm/TerminalIcon.js'
          );
        /* harmony import */ var _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__ =
          __webpack_require__(
            /*! ./ThumbDownIcon.js */ './node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js'
          );
        /* harmony import */ var _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__ =
          __webpack_require__(
            /*! ./ThumbUpIcon.js */ './node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js'
          );
        /* harmony import */ var _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__ =
          __webpack_require__(
            /*! ./TicketIcon.js */ './node_modules/@heroicons/react/outline/esm/TicketIcon.js'
          );
        /* harmony import */ var _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__ =
          __webpack_require__(
            /*! ./TranslateIcon.js */ './node_modules/@heroicons/react/outline/esm/TranslateIcon.js'
          );
        /* harmony import */ var _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__ =
          __webpack_require__(
            /*! ./TrashIcon.js */ './node_modules/@heroicons/react/outline/esm/TrashIcon.js'
          );
        /* harmony import */ var _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__ =
          __webpack_require__(
            /*! ./TrendingDownIcon.js */ './node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js'
          );
        /* harmony import */ var _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__ =
          __webpack_require__(
            /*! ./TrendingUpIcon.js */ './node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js'
          );
        /* harmony import */ var _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__ =
          __webpack_require__(
            /*! ./TruckIcon.js */ './node_modules/@heroicons/react/outline/esm/TruckIcon.js'
          );
        /* harmony import */ var _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__ =
          __webpack_require__(
            /*! ./UploadIcon.js */ './node_modules/@heroicons/react/outline/esm/UploadIcon.js'
          );
        /* harmony import */ var _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__ =
          __webpack_require__(
            /*! ./UserAddIcon.js */ './node_modules/@heroicons/react/outline/esm/UserAddIcon.js'
          );
        /* harmony import */ var _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__ =
          __webpack_require__(
            /*! ./UserCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/UserCircleIcon.js'
          );
        /* harmony import */ var _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__ =
          __webpack_require__(
            /*! ./UserGroupIcon.js */ './node_modules/@heroicons/react/outline/esm/UserGroupIcon.js'
          );
        /* harmony import */ var _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__ =
          __webpack_require__(
            /*! ./UserRemoveIcon.js */ './node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js'
          );
        /* harmony import */ var _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__ =
          __webpack_require__(
            /*! ./UserIcon.js */ './node_modules/@heroicons/react/outline/esm/UserIcon.js'
          );
        /* harmony import */ var _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__ =
          __webpack_require__(
            /*! ./UsersIcon.js */ './node_modules/@heroicons/react/outline/esm/UsersIcon.js'
          );
        /* harmony import */ var _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__ =
          __webpack_require__(
            /*! ./VariableIcon.js */ './node_modules/@heroicons/react/outline/esm/VariableIcon.js'
          );
        /* harmony import */ var _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__ =
          __webpack_require__(
            /*! ./VideoCameraIcon.js */ './node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js'
          );
        /* harmony import */ var _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__ =
          __webpack_require__(
            /*! ./ViewBoardsIcon.js */ './node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js'
          );
        /* harmony import */ var _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__ =
          __webpack_require__(
            /*! ./ViewGridAddIcon.js */ './node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js'
          );
        /* harmony import */ var _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__ =
          __webpack_require__(
            /*! ./ViewGridIcon.js */ './node_modules/@heroicons/react/outline/esm/ViewGridIcon.js'
          );
        /* harmony import */ var _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__ =
          __webpack_require__(
            /*! ./ViewListIcon.js */ './node_modules/@heroicons/react/outline/esm/ViewListIcon.js'
          );
        /* harmony import */ var _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__ =
          __webpack_require__(
            /*! ./VolumeOffIcon.js */ './node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js'
          );
        /* harmony import */ var _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__ =
          __webpack_require__(
            /*! ./VolumeUpIcon.js */ './node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js'
          );
        /* harmony import */ var _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__ =
          __webpack_require__(
            /*! ./WifiIcon.js */ './node_modules/@heroicons/react/outline/esm/WifiIcon.js'
          );
        /* harmony import */ var _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__ =
          __webpack_require__(
            /*! ./XCircleIcon.js */ './node_modules/@heroicons/react/outline/esm/XCircleIcon.js'
          );
        /* harmony import */ var _XIcon_js__WEBPACK_IMPORTED_MODULE_227__ =
          __webpack_require__(
            /*! ./XIcon.js */ './node_modules/@heroicons/react/outline/esm/XIcon.js'
          );
        /* harmony import */ var _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__ =
          __webpack_require__(
            /*! ./ZoomInIcon.js */ './node_modules/@heroicons/react/outline/esm/ZoomInIcon.js'
          );
        /* harmony import */ var _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__ =
          __webpack_require__(
            /*! ./ZoomOutIcon.js */ './node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js'
          );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(
    './pages/collections/[collection]/[product].js'
  );
  module.exports = __webpack_exports__;
})();