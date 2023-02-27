"use strict";
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
exports.id = "pages/bolos/[id]";
exports.ids = ["pages/bolos/[id]"];
exports.modules = {

/***/ "./pages/bolos/[id].js":
/*!*****************************!*\
  !*** ./pages/bolos/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bolos),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"1\"\n                }\n            },\n            {\n                params: {\n                    id: \"2\"\n                }\n            },\n            {\n                params: {\n                    id: \"3\"\n                }\n            },\n            {\n                params: {\n                    id: \"4\"\n                }\n            }, \n        ],\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const res = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/${params.id}`);\n    const bolo = await res.json();\n    return {\n        props: {\n            bolo\n        }\n    };\n}\nfunction Bolos({ bolo  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"cards\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: bolo.image,\n                alt: \"Imagem de receita\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\agust\\\\OneDrive\\\\Escritorio\\\\FrontEnd3\\\\front\\\\ctd-esp-front3-aula4-mesa-base\\\\pages\\\\bolos\\\\[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: bolo.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\agust\\\\OneDrive\\\\Escritorio\\\\FrontEnd3\\\\front\\\\ctd-esp-front3-aula4-mesa-base\\\\pages\\\\bolos\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: bolo.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\agust\\\\OneDrive\\\\Escritorio\\\\FrontEnd3\\\\front\\\\ctd-esp-front3-aula4-mesa-base\\\\pages\\\\bolos\\\\[id].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\agust\\\\OneDrive\\\\Escritorio\\\\FrontEnd3\\\\front\\\\ctd-esp-front3-aula4-mesa-base\\\\pages\\\\bolos\\\\[id].js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2xvcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBTyxlQUFlQSxjQUFjLEdBQUc7SUFDckMsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDTDtnQkFBRUMsTUFBTSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsR0FBRztpQkFBRTthQUFDO1lBQ3RCO2dCQUFFRCxNQUFNLEVBQUU7b0JBQUVDLEVBQUUsRUFBRSxHQUFHO2lCQUFFO2FBQUM7WUFDdEI7Z0JBQUVELE1BQU0sRUFBRTtvQkFBRUMsRUFBRSxFQUFFLEdBQUc7aUJBQUU7YUFBQztZQUN0QjtnQkFBRUQsTUFBTSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsR0FBRztpQkFBRTthQUFDO1NBQ3ZCO1FBQ0RDLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7Q0FDSDtBQUVNLGVBQWVDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFO0lBRTVDLE1BQU0sRUFBRUosTUFBTSxHQUFFLEdBQUdJLE9BQU87SUFDMUIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLGtEQUFrRCxFQUFFTixNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsTUFBTU0sSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQzdCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xGLElBQUk7U0FDTDtLQUNGLENBQUM7Q0FDSDtBQUVjLFNBQVNHLEtBQUssQ0FBQyxFQUFDSCxJQUFJLEdBQUMsRUFBRTtJQUNwQyxxQkFDRSw4REFBQ0ksU0FBTztRQUFDQyxTQUFTLEVBQUMsT0FBTzs7MEJBQ3hCLDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsS0FBSztnQkFBRUMsR0FBRyxFQUFDLG1CQUFtQjs7Ozs7b0JBQUc7MEJBQ2hELDhEQUFDQyxJQUFFOzBCQUFFVixJQUFJLENBQUNXLEtBQUs7Ozs7O29CQUFNOzBCQUNyQiw4REFBQ0MsR0FBQzswQkFBRVosSUFBSSxDQUFDYSxXQUFXOzs7OztvQkFBSzs7Ozs7O1lBQ2pCLENBQ1g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21lc2EwNC8uL3BhZ2VzL2JvbG9zL1tpZF0uanM/OGM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHsgXHJcbiAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcxJyB9fSxcclxuICAgICAgICB7IHBhcmFtczogeyBpZDogJzInIH19LFxyXG4gICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnMycgfX0sXHJcbiAgICAgICAgeyBwYXJhbXM6IHsgaWQ6ICc0JyB9fSxcclxuICAgICAgXSwgXHJcbiAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH07XHJcbn1cclxuIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovLzYyYjRkYzMzNTMwYjI2ZGE0Y2M2MDc5MS5tb2NrYXBpLmlvL2JvbG9zLyR7cGFyYW1zLmlkfWApO1xyXG4gIGNvbnN0IGJvbG8gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBib2xvLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2xvcyh7Ym9sb30pIHtcclxuICByZXR1cm4oXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICA8aW1nIHNyYz17Ym9sby5pbWFnZX0gYWx0PVwiSW1hZ2VtIGRlIHJlY2VpdGFcIiAvPlxyXG4gICAgICA8aDI+e2JvbG8udGl0bGV9PC9oMj5cclxuICAgICAgPHA+e2JvbG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJwYXJhbXMiLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJib2xvIiwianNvbiIsInByb3BzIiwiQm9sb3MiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bolos/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/bolos/[id].js"));
module.exports = __webpack_exports__;

})();