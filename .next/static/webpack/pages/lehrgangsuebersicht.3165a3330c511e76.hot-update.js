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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Ebene_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Ebene_1 */ \"./components/Ebene_1.tsx\");\n/* harmony import */ var _components_Ebene_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Ebene_2 */ \"./components/Ebene_2.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LehrgangsUES = ()=>{\n    _s();\n    const jahrgang = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.jahrgang.value);\n    const wheelScaleValue = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.wheelScale.value);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const displayNone = {\n        display: \"none\"\n    };\n    //                                                +++ scroll effect +++\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        const ebene_1_el = document.getElementsByClassName(\"ebene_1\");\n        // calculate scroll direction and apply logic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // if wheelScroll down...\n            if (event.deltaY > 0) {\n                // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)\n                dispatch({\n                    type: \"wheelScale/increment\",\n                    payload: 0.1\n                });\n            // if wheelScroll up\n            } else {\n                dispatch({\n                    type: \"wheelScale/decrement\",\n                    payload: 0.1\n                });\n            }\n            // Apply scale transform\n            console.log(wheelScaleValue);\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    }, []);\n    // return (\n    //     <>\n    //       <div className={styles.lehrgangsUES_container}>\n    //         <h1>Jahrgang {jahrgang}</h1>\n    //         <div className={styles.ebene_0} id='ebene_0' style={{\n    //           transition: \"transform 1000ms ease-in-out\",\n    //           scale: `${wheelScaleValue}`,\n    //         }}>\n    //           <p>Ebene 0: Lehrgangsübersicht</p>\n    //         </div>\n    //         <div className={`${styles.ebene_1} ebene_1`} id='ebene_1' style={displayNone}>\n    //             <p>Ebene 1: Jahr 1</p>\n    //           </div>\n    //           <div className={`${styles.ebene_1} ebene_1`} id='ebene_1' style={displayNone}>\n    //             <p>Ebene 1: Jahr 2</p>\n    //           </div>\n    //       </div>       \n    //     </>\n    // ) \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5___default().lehrgangsUES_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Jahrgang \",\n                        jahrgang\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, undefined),\n                wheelScaleValue < 1.5 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ebene_1__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 36\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ebene_2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 50\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(LehrgangsUES, \"J71818i5g9Ok4PVINOTB7vxDYdU=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = LehrgangsUES;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LehrgangsUES);\nvar _c;\n$RefreshReg$(_c, \"LehrgangsUES\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDWjtBQUNBO0FBR29CO0FBQ3RCO0FBRXpDLE1BQU1NLGVBQXlCLElBQU07O0lBR2pDLE1BQU1DLFdBQVdKLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1ELFFBQVEsQ0FBQ0UsS0FBSztJQUMvRCxNQUFNQyxrQkFBa0JQLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1HLFVBQVUsQ0FBQ0YsS0FBSztJQUN4RSxNQUFNRyxXQUFXUiw0REFBY0E7SUFFL0IsTUFBTVMsY0FBYztRQUNsQkMsU0FBUztJQUNYO0lBR0osdUVBQXVFO0lBR3JFVCxnREFBU0EsQ0FBQyxJQUFNO1FBRWQsTUFBTVUsYUFBMEJDLFNBQVNDLGFBQWEsQ0FBQztRQUN2RCxNQUFNQyxhQUE4QkYsU0FBU0csc0JBQXNCLENBQUM7UUFFbEUsOENBQThDO1FBQzlDLFNBQVNDLFNBQVVDLEtBQWlCLEVBQUVDLE9BQW9CLEVBQUc7WUFFN0RELE1BQU1FLGNBQWM7WUFFcEIseUJBQXlCO1lBQ3pCLElBQUdGLE1BQU1HLE1BQU0sR0FBRyxHQUFFO2dCQUNsQixpR0FBaUc7Z0JBRS9GWixTQUFTO29CQUFFYSxNQUFNO29CQUF3QkMsU0FBUztnQkFBSTtZQUMxRCxvQkFBb0I7WUFDcEIsT0FBTztnQkFFSGQsU0FBUztvQkFBRWEsTUFBTTtvQkFBd0JDLFNBQVM7Z0JBQUk7WUFFMUQsQ0FBQztZQUNELHdCQUF3QjtZQUN4QkMsUUFBUUMsR0FBRyxDQUFDbEI7UUFDZDtRQUVBbUIsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxTQUFTQyxDQUFDLEVBQUM7WUFDMUNYLFNBQVNXLEdBQUdoQjtRQUNkO0lBRUYsR0FBRyxFQUFFO0lBR0wsV0FBVztJQUVYLFNBQVM7SUFDVCx3REFBd0Q7SUFDeEQsdUNBQXVDO0lBQ3ZDLGdFQUFnRTtJQUNoRSx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCwrQ0FBK0M7SUFDL0MsaUJBQWlCO0lBQ2pCLHlGQUF5RjtJQUN6RixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLDJGQUEyRjtJQUMzRixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsS0FBSztJQUVMLHFCQUNFO2tCQUNFLDRFQUFDaUI7WUFBSUMsV0FBV2pDLGdHQUE2Qjs7OEJBQ3pDLDhEQUFDbUM7O3dCQUFHO3dCQUFVNUI7Ozs7Ozs7Z0JBQ2JHLGtCQUFrQixvQkFBTSw4REFBQ1QsMkRBQU9BOzs7OzhDQUFNLDhEQUFDQywyREFBT0E7Ozs7NkJBQUc7Ozs7Ozs7O0FBSzVEO0dBN0VNSTs7UUFHZUgsd0RBQWNBO1FBQ1BBLHdEQUFjQTtRQUNyQkMsd0RBQWNBOzs7S0FMN0JFO0FBK0VOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlaHJnYW5nc3VlYmVyc2ljaHQudHN4PzEwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGVocmdhbmdzX3Vlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IEViZW5lXzEgZnJvbSAnLi4vY29tcG9uZW50cy9FYmVuZV8xJ1xuaW1wb3J0IEViZW5lXzIgZnJvbSAnLi4vY29tcG9uZW50cy9FYmVuZV8yJ1xuXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3JlZHV4L2hvb2tzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBMZWhyZ2FuZ3NVRVM6IE5leHRQYWdlID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBqYWhyZ2FuZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuamFocmdhbmcudmFsdWUpXG4gICAgY29uc3Qgd2hlZWxTY2FsZVZhbHVlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aGVlbFNjYWxlLnZhbHVlKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuICAgIFxuICAgIGNvbnN0IGRpc3BsYXlOb25lID0ge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH1cblxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrKyBzY3JvbGwgZWZmZWN0ICsrK1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGViZW5lXzBfZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ViZW5lXzAnKSBcbiAgICBjb25zdCBlYmVuZV8xX2VsOiBIVE1MQ29sbGVjdGlvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlYmVuZV8xJylcbiAgICBcbiAgICAgIC8vIGNhbGN1bGF0ZSBzY3JvbGwgZGlyZWN0aW9uIGFuZCBhcHBseSBsb2dpYyBcbiAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsIChldmVudDogV2hlZWxFdmVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmIHdoZWVsU2Nyb2xsIGRvd24uLi5cbiAgICAgIGlmKGV2ZW50LmRlbHRhWSA+IDApe1xuICAgICAgICAvLyAuLi5jb25zdHJhaW4gc2NhbGUgdG8gYXQgbGVhc3QgMS4wIChkZWZhdWx0IHZhbHVlIHRvIHByZXZlbnQgdGhlIGVsZW1lbnQgZm9yIGdldHRpbmcgdG8gc21hbGwpXG5cbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICd3aGVlbFNjYWxlL2luY3JlbWVudCcsIHBheWxvYWQ6IDAuMSB9KVxuICAgICAgLy8gaWYgd2hlZWxTY3JvbGwgdXBcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICd3aGVlbFNjYWxlL2RlY3JlbWVudCcsIHBheWxvYWQ6IDAuMSB9KVxuXG4gICAgICB9XG4gICAgICAvLyBBcHBseSBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgIGNvbnNvbGUubG9nKHdoZWVsU2NhbGVWYWx1ZSkgICAgICBcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgb25TY3JvbGwoZSwgZWJlbmVfMF9lbClcbiAgICB9KVxuXG4gIH0sIFtdKTtcblxuXG4gIC8vIHJldHVybiAoXG5cbiAgLy8gICAgIDw+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVocmdhbmdzVUVTX2NvbnRhaW5lcn0+XG4gIC8vICAgICAgICAgPGgxPkphaHJnYW5nIHtqYWhyZ2FuZ308L2gxPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWJlbmVfMH0gaWQ9J2ViZW5lXzAnIHN0eWxlPXt7XG4gIC8vICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXRcIixcbiAgLy8gICAgICAgICAgIHNjYWxlOiBgJHt3aGVlbFNjYWxlVmFsdWV9YCxcbiAgLy8gICAgICAgICB9fT5cbiAgLy8gICAgICAgICAgIDxwPkViZW5lIDA6IExlaHJnYW5nc8O8YmVyc2ljaHQ8L3A+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5lYmVuZV8xfSBlYmVuZV8xYH0gaWQ9J2ViZW5lXzEnIHN0eWxlPXtkaXNwbGF5Tm9uZX0+XG4gIC8vICAgICAgICAgICAgIDxwPkViZW5lIDE6IEphaHIgMTwvcD5cbiAgLy8gICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5lYmVuZV8xfSBlYmVuZV8xYH0gaWQ9J2ViZW5lXzEnIHN0eWxlPXtkaXNwbGF5Tm9uZX0+XG4gIC8vICAgICAgICAgICAgIDxwPkViZW5lIDE6IEphaHIgMjwvcD5cbiAgLy8gICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICA8L2Rpdj4gICAgICAgXG4gIC8vICAgICA8Lz5cbiAgLy8gKSBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlaHJnYW5nc1VFU19jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT5KYWhyZ2FuZyB7amFocmdhbmd9PC9oMT5cbiAgICAgICAgICB7d2hlZWxTY2FsZVZhbHVlIDwgMS41ID8gPEViZW5lXzEgLz4gOiA8RWJlbmVfMiAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlaHJnYW5nc1VFUyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJFYmVuZV8xIiwiRWJlbmVfMiIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJMZWhyZ2FuZ3NVRVMiLCJqYWhyZ2FuZyIsInN0YXRlIiwidmFsdWUiLCJ3aGVlbFNjYWxlVmFsdWUiLCJ3aGVlbFNjYWxlIiwiZGlzcGF0Y2giLCJkaXNwbGF5Tm9uZSIsImRpc3BsYXkiLCJlYmVuZV8wX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWJlbmVfMV9lbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwidHlwZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXYiLCJjbGFzc05hbWUiLCJsZWhyZ2FuZ3NVRVNfY29udGFpbmVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/lehrgangsuebersicht.tsx\n"));

/***/ })

});