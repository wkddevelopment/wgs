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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst LehrgangsUES = ()=>{\n    _s();\n    const jahrgang = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.jahrgang.value);\n    const displayNone = {\n        display: \"none\"\n    };\n    // scroll effect\n    const scale = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        const ebene_1_el = document.getElementsByClassName(\"ebene_1\");\n        // calculate scroll direction and apply logic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // if wheelScroll down...\n            if (event.deltaY > 0) {\n                // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)\n                if (scale.current > 1.0) {\n                    scale.current = scale.current - 0.1;\n                }\n            // if wheelScroll up\n            } else {\n                if (scale.current < 1.5) {\n                    scale.current = scale.current + 0.1;\n                } else {\n                    ebene_0_el.style.zIndex = \"-1\";\n                    ebene_0_el.style.color = \"white\";\n                    ebene_0_el.style.outline = \"none\";\n                    Array.from(ebene_1_el).forEach((htmlElement)=>{\n                        htmlElement.setAttribute(\"style\", \"display: block;  outline: solid 2px red; color: red; text-align: center; z-index:2\");\n                    });\n                }\n            }\n            // Apply scale transform\n            element.style.scale = \"\".concat(scale.current);\n            console.log(scale.current);\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    //return () => window.removeEventListener(\"wheel\", onScroll);\n    //window.addEventListener(\"scroll\", onScroll);\n    //return () => window.removeEventListener(\"scroll\", onScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().lehrgangsUES_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Jahrgang \",\n                        jahrgang\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_0),\n                    id: \"ebene_0\",\n                    style: {\n                        transition: \"transform 1000ms ease-in-out\",\n                        scale: \"\".concat(scale.current)\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Ebene 0: Lehrgangs\\xfcbersicht\"\n                    }, void 0, false, {\n                        fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1), \" ebene_1\"),\n                    id: \"ebene_1\",\n                    style: displayNone,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Ebene 1: Jahr 1\"\n                    }, void 0, false, {\n                        fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1), \" ebene_1\"),\n                    id: \"ebene_1\",\n                    style: displayNone,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Ebene 1: Jahr 2\"\n                    }, void 0, false, {\n                        fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(LehrgangsUES, \"M6VGIwUZA6Dlao5vnKJK0/wl8jE=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = LehrgangsUES;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LehrgangsUES);\nvar _c;\n$RefreshReg$(_c, \"LehrgangsUES\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBRVE7QUFFTDtBQUcxRCxNQUFNSyxlQUF5QixJQUFNOztJQUVqQyxNQUFNQyxXQUFXTCw0REFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRCxRQUFRLENBQUNFLEtBQUs7SUFFL0QsTUFBTUMsY0FBYztRQUNsQkMsU0FBUztJQUNYO0lBR0osZ0JBQWdCO0lBQ2QsTUFBTUMsUUFBUVAsNkNBQU1BLENBQUM7SUFFckJELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNUyxhQUEwQkMsU0FBU0MsYUFBYSxDQUFDO1FBQ3ZELE1BQU1DLGFBQThCRixTQUFTRyxzQkFBc0IsQ0FBQztRQUVsRSw4Q0FBOEM7UUFDOUMsU0FBU0MsU0FBVUMsS0FBaUIsRUFBRUMsT0FBb0IsRUFBRztZQUU3REQsTUFBTUUsY0FBYztZQUVwQix5QkFBeUI7WUFDekIsSUFBR0YsTUFBTUcsTUFBTSxHQUFHLEdBQUU7Z0JBQ2xCLGlHQUFpRztnQkFDakcsSUFBR1YsTUFBTVcsT0FBTyxHQUFHLEtBQUk7b0JBQ3JCWCxNQUFNVyxPQUFPLEdBQUdYLE1BQU1XLE9BQU8sR0FBRztnQkFDbEMsQ0FBQztZQUNILG9CQUFvQjtZQUNwQixPQUFPO2dCQUNMLElBQUdYLE1BQU1XLE9BQU8sR0FBRyxLQUFJO29CQUNuQlgsTUFBTVcsT0FBTyxHQUFHWCxNQUFNVyxPQUFPLEdBQUc7Z0JBQ2xDLE9BQU87b0JBQ0xWLFdBQVdXLEtBQUssQ0FBQ0MsTUFBTSxHQUFHO29CQUMxQlosV0FBV1csS0FBSyxDQUFDRSxLQUFLLEdBQUc7b0JBQ3pCYixXQUFXVyxLQUFLLENBQUNHLE9BQU8sR0FBRztvQkFDM0JDLE1BQU1DLElBQUksQ0FBQ2IsWUFBWWMsT0FBTyxDQUFDQyxDQUFBQSxjQUFlO3dCQUM1Q0EsWUFBWUMsWUFBWSxDQUFDLFNBQVM7b0JBQ3BDO2dCQUVGLENBQUM7WUFHTCxDQUFDO1lBRUQsd0JBQXdCO1lBQ3hCWixRQUFRSSxLQUFLLENBQUNaLEtBQUssR0FBSSxHQUFpQixPQUFkQSxNQUFNVyxPQUFPO1lBRXZDVSxRQUFRQyxHQUFHLENBQUN0QixNQUFNVyxPQUFPO1FBRzNCO1FBRUFZLE9BQU9DLGdCQUFnQixDQUFDLFNBQVMsU0FBU0MsQ0FBQyxFQUFDO1lBRTFDbkIsU0FBU21CLEdBQUd4QjtRQUVkO0lBRUEsNkRBQTZEO0lBRTdELDhDQUE4QztJQUM5Qyw4REFBOEQ7SUFDaEUsR0FBRyxFQUFFO0lBR0wscUJBRUk7a0JBQ0UsNEVBQUN5QjtZQUFJQyxXQUFXdEMsZ0dBQTZCOzs4QkFDM0MsOERBQUN3Qzs7d0JBQUc7d0JBQVVsQzs7Ozs7Ozs4QkFDZCw4REFBQytCO29CQUFJQyxXQUFXdEMsaUZBQWM7b0JBQUUwQyxJQUFHO29CQUFVbkIsT0FBTzt3QkFDbERvQixZQUFZO3dCQUNaaEMsT0FBTyxHQUFpQixPQUFkQSxNQUFNVyxPQUFPO29CQUN6Qjs4QkFDRSw0RUFBQ3NCO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ1A7b0JBQUlDLFdBQVcsR0FBa0IsT0FBZnRDLGlGQUFjLEVBQUM7b0JBQVcwQyxJQUFHO29CQUFVbkIsT0FBT2Q7OEJBQzdELDRFQUFDbUM7a0NBQUU7Ozs7Ozs7Ozs7OzhCQUVMLDhEQUFDUDtvQkFBSUMsV0FBVyxHQUFrQixPQUFmdEMsaUZBQWMsRUFBQztvQkFBVzBDLElBQUc7b0JBQVVuQixPQUFPZDs4QkFDL0QsNEVBQUNtQztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBdkZNdkM7O1FBRWVKLHdEQUFjQTs7O0tBRjdCSTtBQXlGTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeD8xMDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xlaHJnYW5nc191ZXMubW9kdWxlLmNzcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vcmVkdXgvaG9va3MnXG5pbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSBmcm9tICcuLi9yZWR1eC9qYWhyZ2FuZ1NsaWNlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdzdHJlYW0nXG5cbmNvbnN0IExlaHJnYW5nc1VFUzogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBqYWhyZ2FuZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuamFocmdhbmcudmFsdWUpXG5cbiAgICBjb25zdCBkaXNwbGF5Tm9uZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9XG5cblxuLy8gc2Nyb2xsIGVmZmVjdFxuICBjb25zdCBzY2FsZSA9IHVzZVJlZigxKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBlYmVuZV8wX2VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmVuZV8wJykgXG4gICAgY29uc3QgZWJlbmVfMV9lbDogSFRNTENvbGxlY3Rpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWJlbmVfMScpXG4gICAgXG4gICAgICAvLyBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbiBhbmQgYXBwbHkgbG9naWMgXG4gICAgICBmdW5jdGlvbiBvblNjcm9sbCAoZXZlbnQ6IFdoZWVsRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCBkb3duLi4uXG4gICAgICBpZihldmVudC5kZWx0YVkgPiAwKXtcbiAgICAgICAgLy8gLi4uY29uc3RyYWluIHNjYWxlIHRvIGF0IGxlYXN0IDEuMCAoZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IHRoZSBlbGVtZW50IGZvciBnZXR0aW5nIHRvIHNtYWxsKVxuICAgICAgICBpZihzY2FsZS5jdXJyZW50ID4gMS4wKXtcbiAgICAgICAgICBzY2FsZS5jdXJyZW50ID0gc2NhbGUuY3VycmVudCAtIDAuMVxuICAgICAgICB9XG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCB1cFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoc2NhbGUuY3VycmVudCA8IDEuNSl7XG4gICAgICAgICAgICBzY2FsZS5jdXJyZW50ID0gc2NhbGUuY3VycmVudCArIDAuMVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYmVuZV8wX2VsLnN0eWxlLnpJbmRleCA9ICctMSdcbiAgICAgICAgICAgIGViZW5lXzBfZWwuc3R5bGUuY29sb3IgPSAnd2hpdGUnXG4gICAgICAgICAgICBlYmVuZV8wX2VsLnN0eWxlLm91dGxpbmUgPSAnbm9uZSdcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWJlbmVfMV9lbCkuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7ICBvdXRsaW5lOiBzb2xpZCAycHggcmVkOyBjb2xvcjogcmVkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHotaW5kZXg6MicpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgc2NhbGUgdHJhbnNmb3JtXG4gICAgICBlbGVtZW50LnN0eWxlLnNjYWxlICA9IGAke3NjYWxlLmN1cnJlbnR9YFxuXG4gICAgICBjb25zb2xlLmxvZyhzY2FsZS5jdXJyZW50KVxuXG4gICAgICBcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgIFxuICAgICAgb25TY3JvbGwoZSwgZWJlbmVfMF9lbClcblxuICAgIH0pXG5cbiAgICAvL3JldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uU2Nyb2xsKTtcbiAgICBcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICAvL3JldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVocmdhbmdzVUVTX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPkphaHJnYW5nIHtqYWhyZ2FuZ308L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWJlbmVfMH0gaWQ9J2ViZW5lXzAnIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNjYWxlOiBgJHtzY2FsZS5jdXJyZW50fWAsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8cD5FYmVuZSAwOiBMZWhyZ2FuZ3PDvGJlcnNpY2h0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZWJlbmVfMX0gZWJlbmVfMWB9IGlkPSdlYmVuZV8xJyBzdHlsZT17ZGlzcGxheU5vbmV9PlxuICAgICAgICAgICAgICA8cD5FYmVuZSAxOiBKYWhyIDE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZWJlbmVfMX0gZWJlbmVfMWB9IGlkPSdlYmVuZV8xJyBzdHlsZT17ZGlzcGxheU5vbmV9PlxuICAgICAgICAgICAgICA8cD5FYmVuZSAxOiBKYWhyIDI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgIFxuICAgICAgPC8+XG4gICkgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlaHJnYW5nc1VFUyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VBcHBTZWxlY3RvciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGVocmdhbmdzVUVTIiwiamFocmdhbmciLCJzdGF0ZSIsInZhbHVlIiwiZGlzcGxheU5vbmUiLCJkaXNwbGF5Iiwic2NhbGUiLCJlYmVuZV8wX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWJlbmVfMV9lbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwiY3VycmVudCIsInN0eWxlIiwiekluZGV4IiwiY29sb3IiLCJvdXRsaW5lIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImh0bWxFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVocmdhbmdzVUVTX2NvbnRhaW5lciIsImgxIiwiZWJlbmVfMCIsImlkIiwidHJhbnNpdGlvbiIsInAiLCJlYmVuZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/lehrgangsuebersicht.tsx\n"));

/***/ })

});