"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lehrgangsuebersicht",{

/***/ "./pages/lehrgangsuebersicht.tsx":
/*!***************************************!*\
  !*** ./pages/lehrgangsuebersicht.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst LehrgangsUES = ()=>{\n    _s();\n    const jahrgang = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.jahrgang.value);\n    const displayNone = {\n        display: \"none\"\n    };\n    // scroll effect\n    const preScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const scale = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        const ebene_1_el = document.querySelectorAll(\"#ebene_1\");\n        // calculate scroll direction and apply logic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // if wheelScroll down\n            if (event.deltaY > 0) {\n                // constrain scale to 1.0 (default) to prevent element get to small\n                if (scale.current > 1.0) {\n                    scale.current = scale.current / 2;\n                }\n            // if wheelScroll up\n            } else {\n                scale.current = scale.current * 2;\n            }\n            // Apply scale transform\n            element.style.scale = \"\".concat(scale.current);\n            console.log(scale.current);\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    //return () => window.removeEventListener(\"wheel\", onScroll);\n    //window.addEventListener(\"scroll\", onScroll);\n    //return () => window.removeEventListener(\"scroll\", onScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().lehrgangsUES_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Jahrgang \",\n                        jahrgang\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_0),\n                    id: \"ebene_0\",\n                    style: {\n                        transition: \"transform 1000ms ease-in-out\",\n                        scale: \"\".concat(scale.current)\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Ebene 0: Lehrgangs\\xfcbersicht\"\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1),\n                            id: \"ebene_1\",\n                            style: displayNone,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ebene 1: Jahr 1\"\n                            }, void 0, false, {\n                                fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1),\n                            id: \"ebene_1\",\n                            style: displayNone,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ebene 1: Jahr 2\"\n                            }, void 0, false, {\n                                fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(LehrgangsUES, \"gD3Yl1sH9DfQBB102ol+pvWemhA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = LehrgangsUES;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LehrgangsUES);\nvar _c;\n$RefreshReg$(_c, \"LehrgangsUES\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdEO0FBRVE7QUFFTDtBQUUzRCxNQUFNSyxlQUF5QixJQUFNOztJQUVqQyxNQUFNQyxXQUFXTCw0REFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRCxRQUFRLENBQUNFLEtBQUs7SUFFL0QsTUFBTUMsY0FBYztRQUNsQkMsU0FBUztJQUNYO0lBRUosZ0JBQWdCO0lBRWQsTUFBTUMsWUFBWVAsNkNBQU1BLENBQUMsSUFBSTtJQUM3QixNQUFNUSxRQUFRUiw2Q0FBTUEsQ0FBQztJQUdyQkQsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLE1BQU1VLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztRQUMxQyxNQUFNQyxhQUFhRixTQUFTRyxnQkFBZ0IsQ0FBQztRQUUzQyw4Q0FBOEM7UUFDOUMsU0FBU0MsU0FBVUMsS0FBWSxFQUFFQyxPQUF3QixFQUFHO1lBRTVERCxNQUFNRSxjQUFjO1lBRXBCLHNCQUFzQjtZQUN0QixJQUFHRixNQUFNRyxNQUFNLEdBQUcsR0FBRTtnQkFDbEIsbUVBQW1FO2dCQUNuRSxJQUFHVixNQUFNVyxPQUFPLEdBQUcsS0FBSTtvQkFDckJYLE1BQU1XLE9BQU8sR0FBR1gsTUFBTVcsT0FBTyxHQUFHO2dCQUNsQyxDQUFDO1lBQ0gsb0JBQW9CO1lBQ3BCLE9BQU87Z0JBQ0xYLE1BQU1XLE9BQU8sR0FBR1gsTUFBTVcsT0FBTyxHQUFHO1lBQ2xDLENBQUM7WUFFRCx3QkFBd0I7WUFDeEJILFFBQVFJLEtBQUssQ0FBQ1osS0FBSyxHQUFJLEdBQWlCLE9BQWRBLE1BQU1XLE9BQU87WUFFdkNFLFFBQVFDLEdBQUcsQ0FBQ2QsTUFBTVcsT0FBTztRQUczQjtRQUVBSSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVNDLENBQUMsRUFBQztZQUUxQ1gsU0FBU1csR0FBR2hCO1FBRWQ7SUFFQSw2REFBNkQ7SUFFN0QsOENBQThDO0lBQzlDLDhEQUE4RDtJQUNoRSxHQUFHLEVBQUU7SUFHTCxxQkFFSTtrQkFDRSw0RUFBQ2lCO1lBQUlDLFdBQVcvQixnR0FBNkI7OzhCQUMzQyw4REFBQ2lDOzt3QkFBRzt3QkFBVTNCOzs7Ozs7OzhCQUNkLDhEQUFDd0I7b0JBQUlDLFdBQVcvQixpRkFBYztvQkFBRW1DLElBQUc7b0JBQVVYLE9BQU87d0JBQ2xEWSxZQUFZO3dCQUNaeEIsT0FBTyxHQUFpQixPQUFkQSxNQUFNVyxPQUFPO29CQUN6Qjs7c0NBQ0UsOERBQUNjO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNQOzRCQUFJQyxXQUFXL0IsaUZBQWM7NEJBQUVtQyxJQUFHOzRCQUFVWCxPQUFPZjtzQ0FDbEQsNEVBQUM0QjswQ0FBRTs7Ozs7Ozs7Ozs7c0NBRUwsOERBQUNQOzRCQUFJQyxXQUFXL0IsaUZBQWM7NEJBQUVtQyxJQUFHOzRCQUFVWCxPQUFPZjtzQ0FDbEQsNEVBQUM0QjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBN0VNaEM7O1FBRWVKLHdEQUFjQTs7O0tBRjdCSTtBQStFTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeD8xMDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xlaHJnYW5nc191ZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9yZWR1eC9ob29rcyc7XG5pbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSBmcm9tICcuLi9yZWR1eC9qYWhyZ2FuZ1NsaWNlJzsgXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExlaHJnYW5nc1VFUzogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBqYWhyZ2FuZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuamFocmdhbmcudmFsdWUpXG5cbiAgICBjb25zdCBkaXNwbGF5Tm9uZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9XG5cbi8vIHNjcm9sbCBlZmZlY3RcblxuICBjb25zdCBwcmVTY3JvbGwgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNjYWxlID0gdXNlUmVmKDEpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgZWJlbmVfMF9lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmVuZV8wJylcbiAgICBjb25zdCBlYmVuZV8xX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ViZW5lXzEnKVxuXG4gICAgICAvLyBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbiBhbmQgYXBwbHkgbG9naWMgXG4gICAgICBmdW5jdGlvbiBvblNjcm9sbCAoZXZlbnQ6IEV2ZW50LCBlbGVtZW50OiBIVE1MSHRtbEVsZW1lbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmIHdoZWVsU2Nyb2xsIGRvd25cbiAgICAgIGlmKGV2ZW50LmRlbHRhWSA+IDApe1xuICAgICAgICAvLyBjb25zdHJhaW4gc2NhbGUgdG8gMS4wIChkZWZhdWx0KSB0byBwcmV2ZW50IGVsZW1lbnQgZ2V0IHRvIHNtYWxsXG4gICAgICAgIGlmKHNjYWxlLmN1cnJlbnQgPiAxLjApe1xuICAgICAgICAgIHNjYWxlLmN1cnJlbnQgPSBzY2FsZS5jdXJyZW50IC8gMlxuICAgICAgICB9XG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCB1cFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGUuY3VycmVudCA9IHNjYWxlLmN1cnJlbnQgKiAyXG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHNjYWxlIHRyYW5zZm9ybVxuICAgICAgZWxlbWVudC5zdHlsZS5zY2FsZSAgPSBgJHtzY2FsZS5jdXJyZW50fWA7XG5cbiAgICAgIGNvbnNvbGUubG9nKHNjYWxlLmN1cnJlbnQpO1xuXG4gICAgICBcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgIFxuICAgICAgb25TY3JvbGwoZSwgZWJlbmVfMF9lbClcblxuICAgIH0pXG5cbiAgICAvL3JldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uU2Nyb2xsKTtcbiAgICBcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICAvL3JldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVocmdhbmdzVUVTX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPkphaHJnYW5nIHtqYWhyZ2FuZ308L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWJlbmVfMH0gaWQ9J2ViZW5lXzAnIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNjYWxlOiBgJHtzY2FsZS5jdXJyZW50fWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8cD5FYmVuZSAwOiBMZWhyZ2FuZ3PDvGJlcnNpY2h0PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lYmVuZV8xfSBpZD0nZWJlbmVfMScgc3R5bGU9e2Rpc3BsYXlOb25lfT5cbiAgICAgICAgICAgICAgPHA+RWJlbmUgMTogSmFociAxPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmViZW5lXzF9IGlkPSdlYmVuZV8xJyBzdHlsZT17ZGlzcGxheU5vbmV9PlxuICAgICAgICAgICAgICA8cD5FYmVuZSAxOiBKYWhyIDI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgPC8+XG4gICkgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlaHJnYW5nc1VFUyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VBcHBTZWxlY3RvciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGVocmdhbmdzVUVTIiwiamFocmdhbmciLCJzdGF0ZSIsInZhbHVlIiwiZGlzcGxheU5vbmUiLCJkaXNwbGF5IiwicHJlU2Nyb2xsIiwic2NhbGUiLCJlYmVuZV8wX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWJlbmVfMV9lbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwiY3VycmVudCIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVocmdhbmdzVUVTX2NvbnRhaW5lciIsImgxIiwiZWJlbmVfMCIsImlkIiwidHJhbnNpdGlvbiIsInAiLCJlYmVuZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/lehrgangsuebersicht.tsx\n"));

/***/ })

});