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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst LehrgangsUES = ()=>{\n    _s();\n    const jahrgang = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.jahrgang.value);\n    const displayNone = {\n        display: \"none\"\n    };\n    // scroll effect\n    const scale = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        const ebene_1_el = document.getElementsByClassName(\".ebene_1\");\n        console.log(ebene_1_el);\n        // calculate scroll direction and apply logic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // if wheelScroll down...\n            if (event.deltaY > 0) {\n                // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)\n                if (scale.current > 1.0) {\n                    scale.current = scale.current - 0.1;\n                }\n            // if wheelScroll up\n            } else {\n                if (scale.current < 1.5) {\n                    scale.current = scale.current + 0.1;\n                } else {\n                    ebene_0_el.style.display = \"none\";\n                    Array.from(ebene_1_el).forEach((htmlElement)=>{\n                        htmlElement.setAttribute(\"style\", \"display: block\");\n                    });\n                }\n            }\n            // Apply scale transform\n            element.style.scale = \"\".concat(scale.current);\n            console.log(scale.current);\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    //return () => window.removeEventListener(\"wheel\", onScroll);\n    //window.addEventListener(\"scroll\", onScroll);\n    //return () => window.removeEventListener(\"scroll\", onScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().lehrgangsUES_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Jahrgang \",\n                        jahrgang\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_0),\n                    id: \"ebene_0\",\n                    style: {\n                        transition: \"transform 1000ms ease-in-out\",\n                        scale: \"\".concat(scale.current)\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Ebene 0: Lehrgangs\\xfcbersicht\"\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ebene_1\",\n                            id: \"ebene_1\",\n                            style: displayNone,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ebene 1: Jahr 1\"\n                            }, void 0, false, {\n                                fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ebene_1\",\n                            id: \"ebene_1\",\n                            style: displayNone,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ebene 1: Jahr 2\"\n                            }, void 0, false, {\n                                fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(LehrgangsUES, \"M6VGIwUZA6Dlao5vnKJK0/wl8jE=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = LehrgangsUES;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LehrgangsUES);\nvar _c;\n$RefreshReg$(_c, \"LehrgangsUES\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBRVE7QUFFTDtBQUcxRCxNQUFNSyxlQUF5QixJQUFNOztJQUVqQyxNQUFNQyxXQUFXTCw0REFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRCxRQUFRLENBQUNFLEtBQUs7SUFFL0QsTUFBTUMsY0FBYztRQUNsQkMsU0FBUztJQUNYO0lBR0osZ0JBQWdCO0lBQ2QsTUFBTUMsUUFBUVAsNkNBQU1BLENBQUM7SUFFckJELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNUyxhQUEwQkMsU0FBU0MsYUFBYSxDQUFDO1FBQ3ZELE1BQU1DLGFBQThCRixTQUFTRyxzQkFBc0IsQ0FBQztRQUNwRUMsUUFBUUMsR0FBRyxDQUFDSDtRQUVWLDhDQUE4QztRQUM5QyxTQUFTSSxTQUFVQyxLQUFpQixFQUFFQyxPQUFvQixFQUFHO1lBRTdERCxNQUFNRSxjQUFjO1lBRXBCLHlCQUF5QjtZQUN6QixJQUFHRixNQUFNRyxNQUFNLEdBQUcsR0FBRTtnQkFDbEIsaUdBQWlHO2dCQUNqRyxJQUFHWixNQUFNYSxPQUFPLEdBQUcsS0FBSTtvQkFDckJiLE1BQU1hLE9BQU8sR0FBR2IsTUFBTWEsT0FBTyxHQUFHO2dCQUNsQyxDQUFDO1lBQ0gsb0JBQW9CO1lBQ3BCLE9BQU87Z0JBQ0wsSUFBR2IsTUFBTWEsT0FBTyxHQUFHLEtBQUk7b0JBQ25CYixNQUFNYSxPQUFPLEdBQUdiLE1BQU1hLE9BQU8sR0FBRztnQkFDbEMsT0FBTztvQkFDTFosV0FBV2EsS0FBSyxDQUFDZixPQUFPLEdBQUc7b0JBQzNCZ0IsTUFBTUMsSUFBSSxDQUFDWixZQUFZYSxPQUFPLENBQUNDLENBQUFBLGNBQWU7d0JBQzVDQSxZQUFZQyxZQUFZLENBQUMsU0FBUztvQkFDcEM7Z0JBRUYsQ0FBQztZQUdMLENBQUM7WUFFRCx3QkFBd0I7WUFDeEJULFFBQVFJLEtBQUssQ0FBQ2QsS0FBSyxHQUFJLEdBQWlCLE9BQWRBLE1BQU1hLE9BQU87WUFFdkNQLFFBQVFDLEdBQUcsQ0FBQ1AsTUFBTWEsT0FBTztRQUczQjtRQUVBTyxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVNDLENBQUMsRUFBQztZQUUxQ2QsU0FBU2MsR0FBR3JCO1FBRWQ7SUFFQSw2REFBNkQ7SUFFN0QsOENBQThDO0lBQzlDLDhEQUE4RDtJQUNoRSxHQUFHLEVBQUU7SUFHTCxxQkFFSTtrQkFDRSw0RUFBQ3NCO1lBQUlDLFdBQVduQyxnR0FBNkI7OzhCQUMzQyw4REFBQ3FDOzt3QkFBRzt3QkFBVS9COzs7Ozs7OzhCQUNkLDhEQUFDNEI7b0JBQUlDLFdBQVduQyxpRkFBYztvQkFBRXVDLElBQUc7b0JBQVVkLE9BQU87d0JBQ2xEZSxZQUFZO3dCQUNaN0IsT0FBTyxHQUFpQixPQUFkQSxNQUFNYSxPQUFPO29CQUN6Qjs7c0NBQ0UsOERBQUNpQjtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDUDs0QkFBSUMsV0FBVTs0QkFBVUksSUFBRzs0QkFBVWQsT0FBT2hCO3NDQUMzQyw0RUFBQ2dDOzBDQUFFOzs7Ozs7Ozs7OztzQ0FFTCw4REFBQ1A7NEJBQUlDLFdBQVU7NEJBQVVJLElBQUc7NEJBQVVkLE9BQU9oQjtzQ0FDM0MsNEVBQUNnQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBdEZNcEM7O1FBRWVKLHdEQUFjQTs7O0tBRjdCSTtBQXdGTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeD8xMDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xlaHJnYW5nc191ZXMubW9kdWxlLmNzcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vcmVkdXgvaG9va3MnXG5pbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSBmcm9tICcuLi9yZWR1eC9qYWhyZ2FuZ1NsaWNlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdzdHJlYW0nXG5cbmNvbnN0IExlaHJnYW5nc1VFUzogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBqYWhyZ2FuZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuamFocmdhbmcudmFsdWUpXG5cbiAgICBjb25zdCBkaXNwbGF5Tm9uZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9XG5cblxuLy8gc2Nyb2xsIGVmZmVjdFxuICBjb25zdCBzY2FsZSA9IHVzZVJlZigxKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBlYmVuZV8wX2VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmVuZV8wJykgXG4gICAgY29uc3QgZWJlbmVfMV9lbDogSFRNTENvbGxlY3Rpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLmViZW5lXzEnKVxuICAgIGNvbnNvbGUubG9nKGViZW5lXzFfZWwpXG4gICAgXG4gICAgICAvLyBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbiBhbmQgYXBwbHkgbG9naWMgXG4gICAgICBmdW5jdGlvbiBvblNjcm9sbCAoZXZlbnQ6IFdoZWVsRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCBkb3duLi4uXG4gICAgICBpZihldmVudC5kZWx0YVkgPiAwKXtcbiAgICAgICAgLy8gLi4uY29uc3RyYWluIHNjYWxlIHRvIGF0IGxlYXN0IDEuMCAoZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IHRoZSBlbGVtZW50IGZvciBnZXR0aW5nIHRvIHNtYWxsKVxuICAgICAgICBpZihzY2FsZS5jdXJyZW50ID4gMS4wKXtcbiAgICAgICAgICBzY2FsZS5jdXJyZW50ID0gc2NhbGUuY3VycmVudCAtIDAuMVxuICAgICAgICB9XG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCB1cFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoc2NhbGUuY3VycmVudCA8IDEuNSl7XG4gICAgICAgICAgICBzY2FsZS5jdXJyZW50ID0gc2NhbGUuY3VycmVudCArIDAuMVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYmVuZV8wX2VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWJlbmVfMV9lbCkuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIH1cblxuXG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IHNjYWxlIHRyYW5zZm9ybVxuICAgICAgZWxlbWVudC5zdHlsZS5zY2FsZSAgPSBgJHtzY2FsZS5jdXJyZW50fWBcblxuICAgICAgY29uc29sZS5sb2coc2NhbGUuY3VycmVudClcblxuICAgICAgXG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24oZSl7XG4gICAgICBcbiAgICAgIG9uU2Nyb2xsKGUsIGViZW5lXzBfZWwpXG5cbiAgICB9KVxuXG4gICAgLy9yZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvblNjcm9sbCk7XG4gICAgXG4gICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgLy9yZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlaHJnYW5nc1VFU19jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT5KYWhyZ2FuZyB7amFocmdhbmd9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmViZW5lXzB9IGlkPSdlYmVuZV8wJyBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICBzY2FsZTogYCR7c2NhbGUuY3VycmVudH1gLFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPHA+RWJlbmUgMDogTGVocmdhbmdzw7xiZXJzaWNodDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlYmVuZV8xJyBpZD0nZWJlbmVfMScgc3R5bGU9e2Rpc3BsYXlOb25lfT5cbiAgICAgICAgICAgICAgPHA+RWJlbmUgMTogSmFociAxPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWJlbmVfMScgaWQ9J2ViZW5lXzEnIHN0eWxlPXtkaXNwbGF5Tm9uZX0+XG4gICAgICAgICAgICAgIDxwPkViZW5lIDE6IEphaHIgMjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICAgXG4gICAgICA8Lz5cbiAgKSBcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVocmdhbmdzVUVTIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUFwcFNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMZWhyZ2FuZ3NVRVMiLCJqYWhyZ2FuZyIsInN0YXRlIiwidmFsdWUiLCJkaXNwbGF5Tm9uZSIsImRpc3BsYXkiLCJzY2FsZSIsImViZW5lXzBfZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYmVuZV8xX2VsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwiY3VycmVudCIsInN0eWxlIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImh0bWxFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXYiLCJjbGFzc05hbWUiLCJsZWhyZ2FuZ3NVRVNfY29udGFpbmVyIiwiaDEiLCJlYmVuZV8wIiwiaWQiLCJ0cmFuc2l0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/lehrgangsuebersicht.tsx\n"));

/***/ })

});