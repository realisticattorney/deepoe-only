'use strict';
self['webpackHotUpdate_N_E']('pages/index', {
  /***/ './components/HomeMain.js':
    /*!********************************!*\
  !*** ./components/HomeMain.js ***!
  \********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! react */ './node_modules/react/index.js');
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./ProductList */ './components/ProductList.js');
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
          /*! react/jsx-dev-runtime */ './node_modules/react/jsx-dev-runtime.js'
        );
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
        );
      /* module decorator */ module = __webpack_require__.hmd(module);
      var _jsxFileName =
          'C:\\Users\\Yerman\\Desktop\\deepoe-only\\deepoe-only\\components\\HomeMain.js',
        _this = undefined,
        _s = $RefreshSig$();

      var HomeMain = function HomeMain(_ref) {
        _s();

        var products = _ref.products,
          carouselProducts = _ref.carouselProducts;

        var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(9),
          selectedItem = _useState[0],
          setSelectedItem = _useState[1];

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
                      _this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'h2',
                      {
                        className:
                          'text-3xl md:text-4xl  text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 mb-6 md:w-145 text-center \n            ',
                        children: 'Considered materials, lively design.',
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 9,
                      },
                      _this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'a',
                      {
                        href: 'https://deepoe.com/collections/frontpage',
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
                          _this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 25,
                        columnNumber: 9,
                      },
                      _this
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
                _this
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
                      _this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'button',
                      {
                        className: 'absolute top-2/5 lg:top-3/7 left-1/13 ',
                        onClick: function onClick() {
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
                          _this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 9,
                      },
                      _this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'button',
                      {
                        className: 'absolute top-1/9 md:top-1/11 left-3/7 ',
                        onClick: function onClick() {
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
                          _this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 9,
                      },
                      _this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                      'button',
                      {
                        className: 'absolute top-2/3 left-2/3 ',
                        onClick: function onClick() {
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
                          _this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 9,
                      },
                      _this
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
                _this
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
                _this
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
                _this
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
                _this
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
                _this
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
                _this
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
                                  _this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 109,
                                columnNumber: 13,
                              },
                              _this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 11,
                          },
                          _this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 9,
                      },
                      _this
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
                            _this
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
                                    _this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 126,
                                  columnNumber: 13,
                                },
                                _this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 125,
                              columnNumber: 11,
                            },
                            _this
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
                      _this
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
                _this
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
          _this
        );
      };

      _s(HomeMain, 'q9jLUmaBD/M3TQiCr6tfvBtuZvw=');

      _c = HomeMain;
      /* harmony default export */ __webpack_exports__['default'] = HomeMain;

      var _c;

      $RefreshReg$(_c, 'HomeMain');

      var _a, _b;
      // Legacy CSS implementations will `eval` browser code in a Node.js context
      // to extract CSS. For backwards compatibility, we need to check we're in a
      // browser context before continuing.
      if (
        typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self
      ) {
        var currentExports = module.__proto__.exports;
        var prevExports =
          (_b =
            (_a = module.hot.data) === null || _a === void 0
              ? void 0
              : _a.prevExports) !== null && _b !== void 0
            ? _b
            : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(
          currentExports,
          module.id
        );
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
          // Save the previous exports on update so we can compare the boundary
          // signatures.
          module.hot.dispose(function (data) {
            data.prevExports = currentExports;
          });
          // Unconditionally accept an update to this module, we'll check if it's
          // still a Refresh Boundary later.
          module.hot.accept();
          // This field is set when the previous version of this module was a
          // Refresh Boundary, letting us know we need to check for invalidation or
          // enqueue an update.
          if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (
              self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                prevExports,
                currentExports
              )
            ) {
              module.hot.invalidate();
            } else {
              self.$RefreshHelpers$.scheduleUpdate();
            }
          }
        } else {
          // Since we just executed the code for the module, it's possible that the
          // new exports made it ineligible for being a boundary.
          // We only care about the case when we were _previously_ a boundary,
          // because we already accepted this update (accidental side effect).
          var isNoLongerABoundary = prevExports !== null;
          if (isNoLongerABoundary) {
            module.hot.invalidate();
          }
        }
      }

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2MwMzYxY2Y3MTU1YmMyYTc4NTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFvQztBQUFBOztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7O0FBQ25ELGtCQUF3Q0gsK0NBQVEsQ0FBQyxDQUFELENBQWhEO0FBQUEsTUFBT0ksWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBQyxzQkFETjtBQUVFLGNBQU0sRUFBQyxNQUZUO0FBR0UsaUJBQVMsRUFBQyxPQUhaO0FBSUUsZUFBTyxFQUFFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFDRSxpQkFBUyxvSkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBYUU7QUFDRSxZQUFJLHdEQUROO0FBRUUsV0FBRyxFQUFDLFlBRk47QUFBQSwrQkFJRTtBQUFHLG1CQUFTLEVBQUMsMkhBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF1QkU7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBQyxrQkFETjtBQUVFLGNBQU0sRUFBQyxZQUZUO0FBR0UsYUFBSyxFQUFFLEdBSFQ7QUFJRSxjQUFNLEVBQUUsR0FKVjtBQUtFLGVBQU8sRUFBRSxHQUxYO0FB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QUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBRyxFQUFDLGFBRE47QUFFRSxvQkFBTSxFQUFDLE1BRlQ7QUFHRSx1QkFBUyxFQUFDLFNBSFo7QUFJRSw0QkFBYyxFQUFDO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxzSEFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQywwQkFBZjtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxlQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEhELENBaklEOztHQUFNSjs7S0FBQUE7QUFtSU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdCc7XHJcbmltcG9ydCBIb21lQ2Fyb3VzZWwgZnJvbSAnLi9Ib21lQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBIb21lTWFpbiA9ICh7IHByb2R1Y3RzLCBjYXJvdXNlbFByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoOSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02NVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2hvbWVwYWdlQmFubmVyMi5wbmdcIlxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtM3hsIG1kOnRleHQtNHhsICB0ZXh0LXdoaXRlIGFic29sdXRlIGxlZnQtMCByaWdodC0wIG1sLWF1dG8gbXItYXV0byB0b3AtMTYgaXRhbGljIGZvbnQtbWVkaXVtIHctODAgbWItNiBtZDp3LTE0NSB0ZXh0LWNlbnRlciBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb25zaWRlcmVkIG1hdGVyaWFscywgbGl2ZWx5IGRlc2lnbi5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kZWVwb2Utb25seS52ZXJjZWwuYXBwL2NvbGxlY3Rpb25zL2Zyb250cGFnZWB9XHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gYWJzb2x1dGUgIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgcmlnaHQtMCBtci1hdXRvIG1iLTYgYm90dG9tLTAgbGVmdC0wIG1sLWF1dG8gdy00MCB1bmRlcmxpbmUgZm9udC1tb25vXCI+XHJcbiAgICAgICAgICAgIFNob3AgQWxsIFByb2R1Y3RzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IG15LTYgbWQ6bXktOSB3LWZ1bGwgcmVsYXRpdmUgbWQ6dy0xNDUgbWQ6bXgtYXV0b1wiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2RlZXBvZUhvbWUzLmpwZ1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHdpZHRoPXszNzh9XHJcbiAgICAgICAgICBoZWlnaHQ9ezI4NH1cclxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yLzUgbGc6dG9wLTMvNyBsZWZ0LTEvMTMgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDAgfHwgc2VsZWN0ZWRJdGVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDIgfHwgc2VsZWN0ZWRJdGVtID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzkgbWQ6dG9wLTEvMTEgbGVmdC0zLzcgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDAgfHwgc2VsZWN0ZWRJdGVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDEgfHwgc2VsZWN0ZWRJdGVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yLzMgbGVmdC0yLzMgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDEgfHwgc2VsZWN0ZWRJdGVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSAlIDMgPT09IDIgfHwgc2VsZWN0ZWRJdGVtID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKHNlbGVjdGVkSXRlbSArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiBmb250LXRoaW4gcC00IGJnLW9wYWNpdHktNjAgYmctZ3JheS03MDAgIGZvbnQtbW9ubyByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHNoYWRvdy14bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlblwiPjwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1tb25vIHRleHQteGwgLW10LTEuNSBtZDp0ZXh0LTJ4bCBtZDpteS0yIG1kOi1tdC0yIG1kOmZvbnQtbGlnaHQgdGV4dC1kZWVwb2VfZGVmYXVsdC1ibGFja1wiPlxyXG4gICAgICAgIFNob3AgdGhpcyB0YWJsZVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8SG9tZUNhcm91c2VsXHJcbiAgICAgICAgY2Fyb3VzZWxQcm9kdWN0cz17Y2Fyb3VzZWxQcm9kdWN0c31cclxuICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cclxuICAgICAgICBzZXRTZWxlY3RlZEl0ZW09e3NldFNlbGVjdGVkSXRlbX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LXNjcmVlbiB4bDpoaWRkZW5cIj48L2Rpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctNjQgbGc6dy0xMzAgbGc6dGV4dC0zeGwgbGc6Zm9udC1leHRyYWxpZ2h0IG14LWF1dG8gZm9udC1saWdodCBmb250LW1vbm8gdGV4dC14bCBsZzpweC0yMFwiPlxyXG4gICAgICAgIFdlIGNyZWF0ZSBhbmQgY3VyYXRlIGRlc2lnbnMgZm9yIHlvdXIgaG9tZSBhbmQgb3VyIHNoYXJlZCBvbmVcclxuICAgICAgPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOm1heC13LXNjcmVlbi1sZyAgbXgtNiBsZzptYi00IGxnOnctMTQ1IGxnOnB4LTQgbGc6bXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiBtdC0xMCBsZzpwci0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctOTYgdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHplcm86aC04MCBmb3VyeHM6aC05NiAgIHh4czpoLTEwNVwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3Blb3BsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwidG9wXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgZm9udC1saWdodCB4czp3LTk2IHhzOm14LWF1dG8gbGVhZGluZy02IGxnOnRleHQtbGVmdCBsZzptdC0xNCAgZm9udC1tb25vIHRleHQtbGcgbGc6cGwtMTAgbGc6cHItN1wiPlxyXG4gICAgICAgICAgICBBdCBkZWVwb2UsIHdlIHN0cml2ZSB0byBjcmVhdGUgYW4gb3BlbiBhbmQgaG9uZXN0IGV4cGVyaWVuY2UgZm9yIG91clxyXG4gICAgICAgICAgICBjdXN0b21lcnMuIFdlIHJlY29nbml6ZSB0aGUgY2hhbGxlbmdlcyBzdXJyb3VuZGluZyBzdXN0YWluYWJpbGl0eVxyXG4gICAgICAgICAgICBhbmQgYXJlIHdvcmtpbmcgZGFpbHkgdG8gcmVkdWNlIG91ciBmb290cHJpbnQuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgbXktNiBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZWVwb2UvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlZXBvZV9kZWZhdWx0LWJsYWNrIGZvbnQtbW9ubyB1bmRlcmxpbmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVNYWluO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0TGlzdCIsIkhvbWVDYXJvdXNlbCIsIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwiSG9tZU1haW4iLCJwcm9kdWN0cyIsImNhcm91c2VsUHJvZHVjdHMiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
