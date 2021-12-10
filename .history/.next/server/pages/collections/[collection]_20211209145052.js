(() => {
  var exports = {};
  exports.id = 'pages/collections/[collection]';
  exports.ids = ['pages/collections/[collection]'];
  exports.modules = {
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

    /***/ './pages/collections/[collection]/index.js':
      /*!*************************************************!*\
  !*** ./pages/collections/[collection]/index.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Collection,
          /* harmony export */ getStaticPaths: () =>
            /* binding */ getStaticPaths,
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
          __webpack_require__(/*! ../../../lib/shopify */ './lib/shopify.js');
        /* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../components/ProductList */ './components/ProductList.js'
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! next/router */ 'next/router');
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_3__
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
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\pages\\collections\\[collection]\\index.js';

        function Collection({ collection, products }) {
          // console.log('collection223123123', products);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            'div',
            {
              className: '',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  next_head__WEBPACK_IMPORTED_MODULE_0___default(),
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'title',
                        {
                          children: 'Create Next App',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 11,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        'link',
                        {
                          rel: 'icon',
                          href: '/favicon.ico',
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 12,
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
                    lineNumber: 10,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  _components_ProductList__WEBPACK_IMPORTED_MODULE_2__.default,
                  {
                    products: products,
                    collection: collection,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
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
              lineNumber: 9,
              columnNumber: 5,
            },
            this
          );
        }
        async function getStaticPaths() {
          const collections = await (0,
          _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.getCollections)();
          const paths = collections.map((collection) => ({
            params: {
              collection: String(collection.node.handle),
            },
          }));
          return {
            paths,
            fallback: false,
          };
        }
        async function getStaticProps({ params }) {
          // console.log('params collection', params);
          const products = await (0,
          _lib_shopify__WEBPACK_IMPORTED_MODULE_1__.getProductsInCollection)(
            params.collection
          );
          console.log('get products in collection', products);
          return {
            props: {
              collection: params.collection,
              products,
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

    /***/ 'next/router':
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /***/ (module) => {
        'use strict';
        module.exports = require('next/router');

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
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(
    './pages/collections/[collection]/index.js'
  );
  module.exports = __webpack_exports__;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0aW9ucy9bY29sbGVjdGlvbl0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdG9iXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcWWVybWFuXFxEZXNrdG9wXFxkZWVwb2Utb25seVxcZGVlcG9lLW9ubHlcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBmb3JtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IGF0b2IgZnJvbSAnYXRvYic7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7IGNvbGxlY3Rpb24sIHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlLCB0aXRsZSB9ID0gcHJvZHVjdC5ub2RlO1xyXG4gIGNvbnN0IHsgYWx0VGV4dCwgb3JpZ2luYWxTcmMgfSA9IHByb2R1Y3Qubm9kZS5pbWFnZXMuZWRnZXNbMF0ubm9kZTtcclxuICBjb25zdCBwcmljZSA9IHByb2R1Y3Qubm9kZS5wcmljZVJhbmdlLm1pblZhcmlhbnRQcmljZS5hbW91bnQ7XHJcbiAgY29uc3QgYXRvYlVSTCA9IGF0b2IocHJvZHVjdC5ub2RlLmlkKTtcclxuICBjb25zdCBhdG9iSWQgPSBhdG9iVVJMLnNwbGl0KCdQcm9kdWN0LycpWzFdO1xyXG4gIGNvbnNvbGUubG9nKCdhdG9iSWQnLCBhdG9iSWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17YGh0dHBzOi8vZGVlcG9lLW9ubHkudmVyY2VsLmFwcC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb259LyR7aGFuZGxlfWB9XHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgey8qIDxMaW5rIGhyZWY9e2AvY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9ufS8ke2hhbmRsZX1gfT4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcHgtMiBtYXgtdy1tZCBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTEwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17b3JpZ2luYWxTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0yIHRleHQteGwgZm9udC1tb25vIGZvbnQtbGlnaHQgdGV4dC1kZWVwb2VfZGVmYXVsdC1ibGFja1wiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHJldmlld3MtZm9yLWNvbGxlY3Rpb25zXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LW1kIGZvbnQtbW9ubyBmb250LWV4dHJhbGlnaHRcIj5cclxuICAgICAgICAgIHtmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKX17JyAnfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwieW90cG8gYm90dG9tTGluZSBpbmxpbmUtZmxleFwiXHJcbiAgICAgICAgICAgIGRhdGEteW90cG8tcHJvZHVjdC1pZD17YCR7YXRvYklkfWB9XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgey8qIDwvTGluaz4gKi99XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xyXG4iLCJpbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBjb2xsZWN0aW9uLCBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCAgIG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTYwXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3Byb2R1Y3RzLmltYWdlLm9yaWdpbmFsU3JjfVxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtNXhsIHRleHQtd2hpdGUgYWJzb2x1dGUgbGVmdC0wIHJpZ2h0LTAgbWwtYXV0byBtci1hdXRvIHRvcC0yNCBpdGFsaWMgZm9udC1tZWRpdW0gdy04MCBtYi02IHRleHQtY2VudGVyIFxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbGxlY3Rpb24gPT09ICdmcm9udHBhZ2UnID8gJ2FsbCBwcm9kdWN0cycgOiBjb2xsZWN0aW9ufVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG1kOnB4LTggcHQtNiB4bDpweC00IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IGxnOmdyaWQtY29scy0yIHh4bDpncmlkLWNvbHMtMyBcIj5cclxuICAgICAgICAgIHtwcm9kdWN0cy5wcm9kdWN0cy5lZGdlcy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0Lm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG5cclxuLy8gJHtcclxuLy8gICBjb2xsZWN0aW9uLmxlbmd0aCA9PT0gMTAgfHxcclxuLy8gICAoY29sbGVjdGlvbi5sZW5ndGggPT09IDExICYmICdsZWZ0LTE4JylcclxuLy8gfSAke2NvbGxlY3Rpb24ubGVuZ3RoID09PSA5ICYmICdsZWZ0LTE2J31cclxuLy8gICR7Y29sbGVjdGlvbi5sZW5ndGggPT09IDQgJiYgJ2xlZnQtNDAnfSAke1xyXG4vLyAgIGNvbGxlY3Rpb24ubGVuZ3RoID09PSA4ICYmICdsZWZ0LTI0J1xyXG4vLyB9XHJcbi8vICR7XHJcbi8vICAgY29sbGVjdGlvbiA9PT0gJ2Rpbm5lcndhcmUnICYmICdsZWZ0LTI0J1xyXG4vLyB9XHJcbi8vICAke2NvbGxlY3Rpb24ubGVuZ3RoID09PSA3ICYmICdsZWZ0LTI0J31gXHJcbiIsImNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOO1xyXG5jb25zdCBzdG9yZWZyb250QWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU47XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5hc3luYyBmdW5jdGlvbiBTaG9waWZ5RGF0YShxdWVyeSkge1xyXG4gIGNvbnN0IFVSTCA9IGBodHRwczovLyR7ZG9tYWlufS9hcGkvMjAyMS0xMC9ncmFwaHFsLmpzb25gO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZW5kcG9pbnQ6IFVSTCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAvLyBnb3R0ZW4gZnJvbSBodHRwczovL3Nob3BpZnkuZGV2L2FwaS9zdG9yZWZyb250L2dldHRpbmctc3RhcnRlZFxyXG4gICAgICAnWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuJzogc3RvcmVmcm9udEFjY2Vzc1Rva2VuLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5IH0pLFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goVVJMLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3Qgbm90IGZldGNoZWQnICsgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbGxlY3Rpb25zKCkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gIHsgXHJcbiAgICBjb2xsZWN0aW9ucyhmaXJzdDoyNSkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgaGFuZGxlLFxyXG4gICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICBcdHByb2R1Y3RzKGZpcnN0OiAxKXtcclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICAgIGltYWdlcyhmaXJzdDoxKXtcclxuICAgICAgICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfWA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xyXG4gIGNvbnN0IGFsbENvbGxlY3Rpb25zID0gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9ucy5lZGdlc1xyXG4gICAgPyByZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzXHJcbiAgICA6IFtdO1xyXG5cclxuICByZXR1cm4gYWxsQ29sbGVjdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbihoYW5kbGUpIHtcclxuICBjb25zdCBxdWVyeSA9IGBcclxuICAge1xyXG4gICAgICBjb2xsZWN0aW9uQnlIYW5kbGUoaGFuZGxlOiBcIiR7aGFuZGxlfVwiKXtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9kdWN0cyhmaXJzdDogMjUpIHtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgICAgICAgIHByaWNlUmFuZ2V7XHJcbiAgICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiA1KXtcclxuICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICBjb25zdCBhbGxQcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbkJ5SGFuZGxlXHJcbiAgICA/IHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbkJ5SGFuZGxlXHJcbiAgICA6IFtdO1xyXG5cclxuICByZXR1cm4gYWxsUHJvZHVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0RnJvbUNvbGxlY3Rpb25zKCkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gIHsgXHJcbiAgICBjb2xsZWN0aW9ucyhmaXJzdDoyNSkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgaGFuZGxlLFxyXG4gICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICBcdHByb2R1Y3RzKGZpcnN0OiAyNSl7XHJcbiAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9YDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc3QgYWxsQ29sbGVjdGlvbnMgPSByZXNwb25zZS5kYXRhLmNvbGxlY3Rpb25zLmVkZ2VzXHJcbiAgICA/IHJlc3BvbnNlLmRhdGEuY29sbGVjdGlvbnMuZWRnZXNcclxuICAgIDogW107XHJcblxyXG4gIHJldHVybiBhbGxDb2xsZWN0aW9ucztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICB7XHJcbiAgICAgIHByb2R1Y3RzKGZpcnN0OiAyNSkge1xyXG4gICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICBoYW5kbGVcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xyXG4gIGNvbnN0IHNsdWdzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cy5lZGdlc1xyXG4gICAgPyByZXNwb25zZS5kYXRhLnByb2R1Y3RzLmVkZ2VzXHJcbiAgICA6IFtdO1xyXG5cclxuICByZXR1cm4gc2x1Z3M7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KGhhbmRsZSkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICB7XHJcbiAgICAgIHByb2R1Y3QoaGFuZGxlOiBcIiR7aGFuZGxlfVwiKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAzMCkge1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcdFxyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDI0KSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgY3VycmVudGx5Tm90SW5TdG9ja1xyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZUZvclNhbGVcclxuICAgICAgICAgICAgICBjb21wYXJlQXRQcmljZVYye1xyXG4gICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHByaWNlVjIge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc3QgcHJvZHVjdCA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdCA/IHJlc3BvbnNlLmRhdGEucHJvZHVjdCA6IFtdO1xyXG5cclxuICByZXR1cm4gcHJvZHVjdDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrb3V0KGlkLCBxdWFudGl0eSkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gIG11dGF0aW9uIHtcclxuICAgIGNoZWNrb3V0Q3JlYXRlKGlucHV0OiB7XHJcbiAgICAgIGxpbmVJdGVtczogW3t2YXJpYW50SWQ6IFwiJHtpZH1cIiwgcXVhbnRpdHk6ICR7cXVhbnRpdHl9IH1dXHJcbiAgICB9KSB7XHJcbiAgICAgIGNoZWNrb3V0IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHdlYlVybFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgY29uc3QgY2hlY2tvdXQgPSByZXNwb25zZS5kYXRhLmNoZWNrb3V0Q3JlYXRlLmNoZWNrb3V0XHJcbiAgICA/IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRDcmVhdGUuY2hlY2tvdXRcclxuICAgIDogW107XHJcbiAgcmV0dXJuIGNoZWNrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hlY2tvdXQoaWQsIGxpbmVJdGVtcykge1xyXG4gIGNvbnN0IGxpbmVJdGVtc09iamVjdCA9IGxpbmVJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBge1xyXG4gICAgICB2YXJpYW50SWQ6IFwiJHtpdGVtLmlkfVwiLFxyXG4gICAgICBxdWFudGl0eTogJHtpdGVtLnZhcmlhbnRRdWFudGl0eX1cclxuICAgIFxyXG4gICAgfWA7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gIG11dGF0aW9uIHtcclxuICAgIGNoZWNrb3V0TGluZUl0ZW1zUmVwbGFjZShsaW5lSXRlbXM6IFske2xpbmVJdGVtc09iamVjdH1dLCBjaGVja291dElkOlwiJHtpZH1cIil7XHJcbiAgICAgIGNoZWNrb3V0IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHdlYlVybFxyXG4gICAgICAgIGxpbmVJdGVtcyhmaXJzdDoyNSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1gO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNob3BpZnlEYXRhKHF1ZXJ5KTtcclxuICBjb25zdCBjaGVja291dCA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlLmNoZWNrb3V0XHJcbiAgICA/IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlLmNoZWNrb3V0XHJcbiAgICA6IFtdO1xyXG5cclxuICBjb25zb2xlLmxvZygndXBkYXRlQ0hlY2tvdXQnLCBjaGVja291dCk7XHJcbiAgcmV0dXJuIGNoZWNrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3VzdG9tZXJDcmVhdGUoZGF0YSkge1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XHJcbiAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxuICAvLyBjb25zb2xlLmxvZygncXVlcnknLCBxdWVyeSk7XHJcbiAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSk7XHJcbiAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gIC8vIGNvbnN0IHVzZXIgPSByZXNwb25zZS5kYXRhID8gcmVzcG9uc2UuZGF0YSA6IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdXNlcjtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3VzdG9tZXJBY2Nlc3NUb2tlbkNyZWF0ZShjdXN0b21lcklucHV0KSB7XHJcbiAgY29uc3QgcXVlcnkgPSBgXHJcbiAgbXV0YXRpb24gY3VzdG9tZXJBY2Nlc3NUb2tlbkNyZWF0ZSgkaW5wdXQ6ICR7Y3VzdG9tZXJJbnB1dH0pIHtcclxuICAgIGN1c3RvbWVyQWNjZXNzVG9rZW5DcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBjdXN0b21lckFjY2Vzc1Rva2VuIHtcclxuICAgICAgICBhY2Nlc3NUb2tlblxyXG4gICAgICAgIGV4cGlyZXNBdFxyXG4gICAgICB9XHJcbiAgICAgIGN1c3RvbWVyVXNlckVycm9ycyB7XHJcbiAgICAgICAgY29kZVxyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWA7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2hvcGlmeURhdGEocXVlcnkpO1xyXG4gIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YSA/IHJlc3BvbnNlLmRhdGEgOiBbXTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGdldENvbGxlY3Rpb25zLCBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9zaG9waWZ5JztcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxlY3Rpb24oeyBjb2xsZWN0aW9uLCBwcm9kdWN0cyB9KSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2NvbGxlY3Rpb24yMjMxMjMxMjMnLCBwcm9kdWN0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgZ2V0Q29sbGVjdGlvbnMoKTtcclxuICBjb25zdCBwYXRocyA9IGNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4gKHtcclxuICAgIHBhcmFtczogeyBjb2xsZWN0aW9uOiBTdHJpbmcoY29sbGVjdGlvbi5ub2RlLmhhbmRsZSkgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdwYXJhbXMgY29sbGVjdGlvbicsIHBhcmFtcyk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c0luQ29sbGVjdGlvbihwYXJhbXMuY29sbGVjdGlvbik7XHJcbiAgY29uc29sZS5sb2coXCJnZXQgcHJvZHVjdHMgaW4gY29sbGVjdGlvblwiLCBwcm9kdWN0cyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvbGxlY3Rpb246IHBhcmFtcy5jb2xsZWN0aW9uLFxyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiZm9ybWF0dGVyIiwiYXRvYiIsIlByb2R1Y3RDYXJkIiwiY29sbGVjdGlvbiIsInByb2R1Y3QiLCJoYW5kbGUiLCJ0aXRsZSIsIm5vZGUiLCJhbHRUZXh0Iiwib3JpZ2luYWxTcmMiLCJpbWFnZXMiLCJlZGdlcyIsInByaWNlIiwicHJpY2VSYW5nZSIsIm1pblZhcmlhbnRQcmljZSIsImFtb3VudCIsImF0b2JVUkwiLCJpZCIsImF0b2JJZCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImZvcm1hdCIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJpbWFnZSIsIm1hcCIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJTSE9QSUZZX1NUT1JFX0RPTUFJTiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNIT1BJRllfU1RPUkVGUk9OVF9BQ0NFU1NUT0tFTiIsImdxbCIsInVzZU11dGF0aW9uIiwiU2hvcGlmeURhdGEiLCJxdWVyeSIsIlVSTCIsIm9wdGlvbnMiLCJlbmRwb2ludCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsIkVycm9yIiwiZ2V0Q29sbGVjdGlvbnMiLCJhbGxDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24iLCJhbGxQcm9kdWN0cyIsImNvbGxlY3Rpb25CeUhhbmRsZSIsImdldFByb2R1Y3RGcm9tQ29sbGVjdGlvbnMiLCJnZXRBbGxQcm9kdWN0cyIsInNsdWdzIiwiZ2V0UHJvZHVjdCIsImNyZWF0ZUNoZWNrb3V0IiwicXVhbnRpdHkiLCJjaGVja291dCIsImNoZWNrb3V0Q3JlYXRlIiwidXBkYXRlQ2hlY2tvdXQiLCJsaW5lSXRlbXMiLCJsaW5lSXRlbXNPYmplY3QiLCJpdGVtIiwidmFyaWFudFF1YW50aXR5IiwiY2hlY2tvdXRMaW5lSXRlbXNSZXBsYWNlIiwiY3VzdG9tZXJDcmVhdGUiLCJjdXN0b21lckFjY2Vzc1Rva2VuQ3JlYXRlIiwiY3VzdG9tZXJJbnB1dCIsInVzZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInVybCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiSGVhZCIsIkNvbGxlY3Rpb24iLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyJdLCJzb3VyY2VSb290IjoiIn0=
