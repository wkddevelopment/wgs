/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/lehrgangsuebersicht";
exports.ids = ["pages/lehrgangsuebersicht"];
exports.modules = {

/***/ "./styles/Lehrgangs_ues.module.css":
/*!*****************************************!*\
  !*** ./styles/Lehrgangs_ues.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"lehrgangsUES_container\": \"Lehrgangs_ues_lehrgangsUES_container__ejXOW\",\n\t\"ebene_0\": \"Lehrgangs_ues_ebene_0__LKa78\",\n\t\"ebene_1\": \"Lehrgangs_ues_ebene_1__EE8OP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTGVocmdhbmdzX3Vlcy5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dnc19sZWhycGxhbl9tYWtlci8uL3N0eWxlcy9MZWhyZ2FuZ3NfdWVzLm1vZHVsZS5jc3M/OTZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsZWhyZ2FuZ3NVRVNfY29udGFpbmVyXCI6IFwiTGVocmdhbmdzX3Vlc19sZWhyZ2FuZ3NVRVNfY29udGFpbmVyX19lalhPV1wiLFxuXHRcImViZW5lXzBcIjogXCJMZWhyZ2FuZ3NfdWVzX2ViZW5lXzBfX0xLYTc4XCIsXG5cdFwiZWJlbmVfMVwiOiBcIkxlaHJnYW5nc191ZXNfZWJlbmVfMV9fRUU4T1BcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Lehrgangs_ues.module.css\n");

/***/ }),

/***/ "./components/Ebene_1.tsx":
/*!********************************!*\
  !*** ./components/Ebene_1.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Ebene_1 = ()=>{\n    const wheelScaleValue = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.wheelScale.value);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        // calculate scroll direction and apply zoom effectlogic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // Apply scale transform\n            element.style.scale = `${wheelScaleValue}`;\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `${(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_0)} ebene_0`,\n            id: \"ebene_0\",\n            style: {\n                transition: \"transform 1000ms ease-in-out\",\n                scale: `${wheelScaleValue}`\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Ebene 0: Lehrgangs\\xfcbersicht\"\n            }, void 0, false, {\n                fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_1.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_1.tsx\",\n            lineNumber: 31,\n            columnNumber: 15\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ebene_1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ViZW5lXzEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUVSO0FBQ1A7QUFFeEMsTUFBTUksVUFBb0IsSUFBTTtJQUU5QixNQUFNQyxrQkFBa0JKLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLFVBQVUsQ0FBQ0MsS0FBSztJQUV4RUwsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLE1BQU1NLGFBQTBCQyxTQUFTQyxhQUFhLENBQUM7UUFFckQseURBQXlEO1FBQ3pELFNBQVNDLFNBQVVDLEtBQWlCLEVBQUVDLE9BQW9CLEVBQUc7WUFFM0RELE1BQU1FLGNBQWM7WUFDcEIsd0JBQXdCO1lBQ3hCRCxRQUFRRSxLQUFLLENBQUNDLEtBQUssR0FBSSxDQUFDLEVBQUVaLGdCQUFnQixDQUFDO1FBRTdDO1FBRUZhLE9BQU9DLGdCQUFnQixDQUFDLFNBQVMsU0FBU0MsQ0FBQyxFQUFDO1lBQzFDUixTQUFTUSxHQUFHWDtRQUNkO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ1U7a0JBQ0UsNEVBQUNZO1lBQUlDLFdBQVcsQ0FBQyxFQUFFdEIsaUZBQWMsQ0FBQyxRQUFRLENBQUM7WUFBRXdCLElBQUc7WUFBVVIsT0FBTztnQkFDN0RTLFlBQVk7Z0JBQ1pSLE9BQU8sQ0FBQyxFQUFFWixnQkFBZ0IsQ0FBQztZQUM3QjtzQkFDQSw0RUFBQ3FCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJbkI7QUFFQSxpRUFBZ0J0QixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2dzX2xlaHJwbGFuX21ha2VyLy4vY29tcG9uZW50cy9FYmVuZV8xLnRzeD8yZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xlaHJnYW5nc191ZXMubW9kdWxlLmNzcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9ob29rcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBFYmVuZV8xOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICBjb25zdCB3aGVlbFNjYWxlVmFsdWUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndoZWVsU2NhbGUudmFsdWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGViZW5lXzBfZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ViZW5lXzAnKSBcbiAgICBcbiAgICAgIC8vIGNhbGN1bGF0ZSBzY3JvbGwgZGlyZWN0aW9uIGFuZCBhcHBseSB6b29tIGVmZmVjdGxvZ2ljIFxuICAgICAgZnVuY3Rpb24gb25TY3JvbGwgKGV2ZW50OiBXaGVlbEV2ZW50LCBlbGVtZW50OiBIVE1MRWxlbWVudCApIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBBcHBseSBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgZWxlbWVudC5zdHlsZS5zY2FsZSAgPSBgJHt3aGVlbFNjYWxlVmFsdWV9YFxuICAgICAgICBcbiAgICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24oZSl7XG4gICAgICBvblNjcm9sbChlLCBlYmVuZV8wX2VsKVxuICAgIH0pXG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmViZW5lXzB9IGViZW5lXzBgfSBpZD0nZWJlbmVfMCcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgICAgICAgc2NhbGU6IGAke3doZWVsU2NhbGVWYWx1ZX1gLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxwPkViZW5lIDA6IExlaHJnYW5nc8O8YmVyc2ljaHQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgIEViZW5lXzEiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlQXBwU2VsZWN0b3IiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkViZW5lXzEiLCJ3aGVlbFNjYWxlVmFsdWUiLCJzdGF0ZSIsIndoZWVsU2NhbGUiLCJ2YWx1ZSIsImViZW5lXzBfZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJzY2FsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZWJlbmVfMCIsImlkIiwidHJhbnNpdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Ebene_1.tsx\n");

/***/ }),

/***/ "./components/Ebene_2.tsx":
/*!********************************!*\
  !*** ./components/Ebene_2.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Ebene_2 = ()=>{\n    // an wheelScaale angepasster EElement-scalee für Ebene_1\n    const ajustedScale = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.wheelScale.value) - 0.5;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ebene_1_el = document.getElementsByClassName(\"ebene_1\");\n        // calculate scroll direction and apply zoom effectlogic \n        function onScroll(event, elements) {\n            event.preventDefault();\n            // Apply scale transform\n            Array.from(elements).forEach((element)=>{\n                element.setAttribute(\"styles\", `scale: ${ajustedScale}; outline: solid green 2px; color: green;`);\n            });\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_1_el);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1)} ebene_1`,\n                id: \"ebene_1\",\n                style: {\n                    transition: \"transform 1000ms ease-in-out\",\n                    scale: `${ajustedScale}`\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Ebene 1: Jahr 1\"\n                }, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_2.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_2.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_3___default().ebene_1)} ebene_1`,\n                id: \"ebene_1\",\n                style: {\n                    transition: \"transform 1000ms ease-in-out\",\n                    scale: `${ajustedScale}`\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Ebene 1: Jahr 2\"\n                }, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_2.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/wkd-development/wkd-development/wgs/components/Ebene_2.tsx\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ebene_2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ViZW5lXzIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUVSO0FBQ1I7QUFHdkMsTUFBTUksVUFBb0IsSUFBTTtJQUU1Qix5REFBeUQ7SUFDekQsTUFBTUMsZUFBZUosNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsVUFBVSxDQUFDQyxLQUFLLElBQUk7SUFFekVMLGdEQUFTQSxDQUFDLElBQU07UUFFWixNQUFNTSxhQUE4QkMsU0FBU0Msc0JBQXNCLENBQUM7UUFFaEUseURBQXlEO1FBQ3pELFNBQVNDLFNBQVVDLEtBQWlCLEVBQUVDLFFBQXdCLEVBQUc7WUFFakVELE1BQU1FLGNBQWM7WUFDcEIsd0JBQXdCO1lBQ3hCQyxNQUFNQyxJQUFJLENBQUNILFVBQVVJLE9BQU8sQ0FBQ0MsQ0FBQUEsVUFBVztnQkFDeENBLFFBQVFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFZixhQUFhLHlDQUF5QyxDQUFDO1lBQ2hHO1FBRUo7UUFFQWdCLE9BQU9DLGdCQUFnQixDQUFDLFNBQVMsU0FBU0MsQ0FBQyxFQUFDO1lBQ3hDWCxTQUFTVyxHQUFHZDtRQUNoQjtJQUVKLEdBQUcsRUFBRTtJQUVMLHFCQUNROzswQkFDSSw4REFBQ2U7Z0JBQUlDLFdBQVcsQ0FBQyxFQUFFekIsaUZBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBQUUyQixJQUFHO2dCQUFVQyxPQUFPO29CQUM3REMsWUFBWTtvQkFDWkMsT0FBTyxDQUFDLEVBQUV6QixhQUFhLENBQUM7Z0JBQzVCOzBCQUNBLDRFQUFDMEI7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUdILDhEQUFDUDtnQkFBSUMsV0FBVyxDQUFDLEVBQUV6QixpRkFBYyxDQUFDLFFBQVEsQ0FBQztnQkFBRTJCLElBQUc7Z0JBQVVDLE9BQU87b0JBQzdEQyxZQUFZO29CQUNaQyxPQUFPLENBQUMsRUFBRXpCLGFBQWEsQ0FBQztnQkFDNUI7MEJBQ0EsNEVBQUMwQjs4QkFBRTs7Ozs7Ozs7Ozs7OztBQUluQjtBQUVBLGlFQUFnQjNCLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93Z3NfbGVocnBsYW5fbWFrZXIvLi9jb21wb25lbnRzL0ViZW5lXzIudHN4PzZiZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGVocmdhbmdzX3Vlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L2hvb2tzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBFYmVuZV8yOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICAgIC8vIGFuIHdoZWVsU2NhYWxlIGFuZ2VwYXNzdGVyIEVFbGVtZW50LXNjYWxlZSBmw7xyIEViZW5lXzFcbiAgICBjb25zdCBhanVzdGVkU2NhbGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndoZWVsU2NhbGUudmFsdWUpIC0gMC41XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGViZW5lXzFfZWw6IEhUTUxDb2xsZWN0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ViZW5lXzEnKVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBzY3JvbGwgZGlyZWN0aW9uIGFuZCBhcHBseSB6b29tIGVmZmVjdGxvZ2ljIFxuICAgICAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwgKGV2ZW50OiBXaGVlbEV2ZW50LCBlbGVtZW50czogSFRNTENvbGxlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBBcHBseSBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGVzJywgYHNjYWxlOiAke2FqdXN0ZWRTY2FsZX07IG91dGxpbmU6IHNvbGlkIGdyZWVuIDJweDsgY29sb3I6IGdyZWVuO2ApXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIG9uU2Nyb2xsKGUsIGViZW5lXzFfZWwpXG4gICAgICAgIH0pXG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmViZW5lXzF9IGViZW5lXzFgfSBpZD0nZWJlbmVfMScgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBgJHthanVzdGVkU2NhbGV9YCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8cD5FYmVuZSAxOiBKYWhyIDE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmViZW5lXzF9IGViZW5lXzFgfSBpZD0nZWJlbmVfMScgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBgJHthanVzdGVkU2NhbGV9YCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8cD5FYmVuZSAxOiBKYWhyIDI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICBFYmVuZV8yIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUFwcFNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJFYmVuZV8yIiwiYWp1c3RlZFNjYWxlIiwic3RhdGUiLCJ3aGVlbFNjYWxlIiwidmFsdWUiLCJlYmVuZV8xX2VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25TY3JvbGwiLCJldmVudCIsImVsZW1lbnRzIiwicHJldmVudERlZmF1bHQiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiZWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZWJlbmVfMSIsImlkIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwic2NhbGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Ebene_2.tsx\n");

/***/ }),

/***/ "./pages/lehrgangsuebersicht.tsx":
/*!***************************************!*\
  !*** ./pages/lehrgangsuebersicht.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Lehrgangs_ues.module.css */ \"./styles/Lehrgangs_ues.module.css\");\n/* harmony import */ var _styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Ebene_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Ebene_1 */ \"./components/Ebene_1.tsx\");\n/* harmony import */ var _components_Ebene_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Ebene_2 */ \"./components/Ebene_2.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst LehrgangsUES = ()=>{\n    const jahrgang = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.jahrgang.value);\n    const wheelScaleValue = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.wheelScale.value);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    //                                                +++ scroll effect +++\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const ebene_0_el = document.querySelector(\"#ebene_0\");\n        // calculate scroll direction and apply logic \n        function onScroll(event, element) {\n            event.preventDefault();\n            // if wheelScroll down...\n            if (event.deltaY < 0) {\n                // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)\n                dispatch({\n                    type: \"wheelScale/increment\",\n                    payload: 0.1\n                });\n            // if wheelScroll up\n            } else {\n                dispatch({\n                    type: \"wheelScale/decrement\",\n                    payload: -0.1\n                });\n            }\n        }\n        window.addEventListener(\"wheel\", function(e) {\n            onScroll(e, ebene_0_el);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Lehrgangs_ues_module_css__WEBPACK_IMPORTED_MODULE_5___default().lehrgangsUES_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Jahrgang \",\n                        jahrgang\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined),\n                wheelScaleValue < 1.5 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ebene_1__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 36\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Ebene_2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 50\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wkd-development/wkd-development/wgs/pages/lehrgangsuebersicht.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LehrgangsUES);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNaO0FBQ0E7QUFHb0I7QUFDOUI7QUFFakMsTUFBTU0sZUFBeUIsSUFBTTtJQUVqQyxNQUFNQyxXQUFXSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRCxRQUFRLENBQUNFLEtBQUs7SUFDL0QsTUFBTUMsa0JBQWtCUCw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRyxVQUFVLENBQUNGLEtBQUs7SUFDeEUsTUFBTUcsV0FBV1IsNERBQWNBO0lBRW5DLHVFQUF1RTtJQUVyRUMsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLE1BQU1RLGFBQTBCQyxTQUFTQyxhQUFhLENBQUM7UUFFckQsOENBQThDO1FBQzlDLFNBQVNDLFNBQVVDLEtBQWlCLEVBQUVDLE9BQW9CLEVBQUc7WUFFN0RELE1BQU1FLGNBQWM7WUFFcEIseUJBQXlCO1lBQ3pCLElBQUdGLE1BQU1HLE1BQU0sR0FBRyxHQUFFO2dCQUNsQixpR0FBaUc7Z0JBQy9GUixTQUFTO29CQUFFUyxNQUFNO29CQUF3QkMsU0FBUztnQkFBSTtZQUMxRCxvQkFBb0I7WUFDcEIsT0FBTztnQkFDSFYsU0FBUztvQkFBRVMsTUFBTTtvQkFBd0JDLFNBQVMsQ0FBRTtnQkFBSTtZQUM1RCxDQUFDO1FBRUg7UUFFQUMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxTQUFTQyxDQUFDLEVBQUM7WUFDMUNULFNBQVNTLEdBQUdaO1FBQ2Q7SUFFRixHQUFHLEVBQUU7SUFFTCxxQkFFRTtrQkFDRSw0RUFBQ2E7WUFBSUMsV0FBVzNCLGdHQUE2Qjs7OEJBQ3pDLDhEQUFDNkI7O3dCQUFHO3dCQUFVdEI7Ozs7Ozs7Z0JBQ2JHLGtCQUFrQixvQkFBTSw4REFBQ1QsMkRBQU9BOzs7OzhDQUFNLDhEQUFDQywyREFBT0E7Ozs7NkJBQUc7Ozs7Ozs7O0FBSzVEO0FBRUEsaUVBQWVJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93Z3NfbGVocnBsYW5fbWFrZXIvLi9wYWdlcy9sZWhyZ2FuZ3N1ZWJlcnNpY2h0LnRzeD8xMDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xlaHJnYW5nc191ZXMubW9kdWxlLmNzcydcbmltcG9ydCBFYmVuZV8xIGZyb20gJy4uL2NvbXBvbmVudHMvRWJlbmVfMSdcbmltcG9ydCBFYmVuZV8yIGZyb20gJy4uL2NvbXBvbmVudHMvRWJlbmVfMidcblxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9yZWR1eC9ob29rcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IExlaHJnYW5nc1VFUzogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBqYWhyZ2FuZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuamFocmdhbmcudmFsdWUpXG4gICAgY29uc3Qgd2hlZWxTY2FsZVZhbHVlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aGVlbFNjYWxlLnZhbHVlKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrKyBzY3JvbGwgZWZmZWN0ICsrK1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBlYmVuZV8wX2VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYmVuZV8wJykgXG4gICAgXG4gICAgICAvLyBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbiBhbmQgYXBwbHkgbG9naWMgXG4gICAgICBmdW5jdGlvbiBvblNjcm9sbCAoZXZlbnQ6IFdoZWVsRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCBkb3duLi4uXG4gICAgICBpZihldmVudC5kZWx0YVkgPCAwKXtcbiAgICAgICAgLy8gLi4uY29uc3RyYWluIHNjYWxlIHRvIGF0IGxlYXN0IDEuMCAoZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IHRoZSBlbGVtZW50IGZvciBnZXR0aW5nIHRvIHNtYWxsKVxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3doZWVsU2NhbGUvaW5jcmVtZW50JywgcGF5bG9hZDogMC4xIH0pXG4gICAgICAvLyBpZiB3aGVlbFNjcm9sbCB1cFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICd3aGVlbFNjYWxlL2RlY3JlbWVudCcsIHBheWxvYWQ6IC0gMC4xIH0pXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgb25TY3JvbGwoZSwgZWJlbmVfMF9lbClcbiAgICB9KVxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVocmdhbmdzVUVTX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPkphaHJnYW5nIHtqYWhyZ2FuZ308L2gxPlxuICAgICAgICAgIHt3aGVlbFNjYWxlVmFsdWUgPCAxLjUgPyA8RWJlbmVfMSAvPiA6IDxFYmVuZV8yIC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVocmdhbmdzVUVTIl0sIm5hbWVzIjpbInN0eWxlcyIsIkViZW5lXzEiLCJFYmVuZV8yIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkxlaHJnYW5nc1VFUyIsImphaHJnYW5nIiwic3RhdGUiLCJ2YWx1ZSIsIndoZWVsU2NhbGVWYWx1ZSIsIndoZWVsU2NhbGUiLCJkaXNwYXRjaCIsImViZW5lXzBfZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblNjcm9sbCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwidHlwZSIsInBheWxvYWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpdiIsImNsYXNzTmFtZSIsImxlaHJnYW5nc1VFU19jb250YWluZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/lehrgangsuebersicht.tsx\n");

/***/ }),

/***/ "./redux/hooks.ts":
/*!************************!*\
  !*** ./redux/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRFO0FBRzVFLDJFQUEyRTtBQUNwRSxNQUFNRSxpQkFBb0NGLG9EQUFXQSxDQUFBO0FBQ3JELE1BQU1HLGlCQUFrREYsb0RBQVdBLENBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93Z3NfbGVocnBsYW5fbWFrZXIvLi9yZWR1eC9ob29rcy50cz82NTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0eXBlIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gJy4vc3RvcmUnXG5cbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoOiAoKSA9PiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvciJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/hooks.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/lehrgangsuebersicht.tsx"));
module.exports = __webpack_exports__;

})();