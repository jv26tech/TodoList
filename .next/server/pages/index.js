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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);\nuuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Index = ()=>{\n    const { 0: userInput , 1: setUserInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: todoList , 1: setTodoList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (userInput) {\n            setTodoList([\n                userInput,\n                ...todoList\n            ]);\n            setUserInput('');\n        }\n    };\n    const handleDelete = (todo)=>{\n        const updatedArr = todoList.filter((todoItem)=>todoList.indexOf(todoItem) != todoList.indexOf(todo)\n        );\n        setTodoList(updatedArr);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"NextJS Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        placeholder: \"Enter a todo item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 111\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>{\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 52\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 32\n                    }, undefined));\n                }) : 'Enter a todo item'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0c7QUFFbkMsS0FBSyxDQUFDRyxLQUFLLE9BQVMsQ0FBQztJQUVqQixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJTCwrQ0FBUSxDQUFDLENBQUU7SUFFN0MsS0FBSyxNQUFFTSxRQUFRLE1BQUVDLFdBQVcsTUFBSVAsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFM0MsS0FBSyxDQUFDUSxZQUFZLElBQUlDLENBQUMsR0FBSyxDQUFDO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWM7UUFFaEJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxJQUFJSixDQUFDLEdBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO1FBRWhCLEVBQUUsRUFBQ04sU0FBUyxFQUFDLENBQUM7WUFDVkcsV0FBVyxDQUFDLENBQUM7Z0JBQ1RILFNBQVM7bUJBQ05FLFFBQVE7WUFDZixDQUFDO1lBRURELFlBQVksQ0FBQyxDQUFFO1FBQ25CLENBQUM7SUFFTCxDQUFDO0lBRUQsS0FBSyxDQUFDUyxZQUFZLElBQUlDLElBQUksR0FBSyxDQUFDO1FBQzVCLEtBQUssQ0FBQ0MsVUFBVSxHQUFHVixRQUFRLENBQUNXLE1BQU0sRUFBQ0MsUUFBUSxHQUFJWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0QsUUFBUSxLQUFLWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0osSUFBSTs7UUFFbEdSLFdBQVcsQ0FBQ1MsVUFBVTtJQUMxQixDQUFDO0lBRUQsTUFBTSw2RUFDREksQ0FBRzs7d0ZBQ0NDLENBQUU7MEJBQUMsQ0FBZ0I7Ozs7Ozt3RkFDbkJDLENBQUk7O2dHQUNBQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ1osS0FBSyxFQUFFUixTQUFTO3dCQUFFcUIsV0FBVyxFQUFDLENBQW1CO3dCQUFDQyxRQUFRLEVBQUVsQixZQUFZOzs7Ozs7Z0dBQUltQixDQUFNO3dCQUFDQyxPQUFPLEVBQUVmLFlBQVk7a0NBQUUsQ0FBTTs7Ozs7Ozs7Ozs7O3dGQUV0SWdCLENBQUU7MEJBRUt2QixRQUFRLENBQUN3QixNQUFNLElBQUcsQ0FBQyxHQUFHeEIsUUFBUSxDQUFDeUIsR0FBRyxFQUFFaEIsSUFBSSxFQUFFaUIsR0FBRyxHQUFLLENBQUM7b0JBQy9DLE1BQU0sNkVBQUVDLENBQUU7OzRCQUFZbEIsSUFBSTt3R0FBRVksQ0FBTTtnQ0FBQ0MsT0FBTyxHQUFHbkIsQ0FBQyxHQUFLLENBQUM7b0NBQ2hEQSxDQUFDLENBQUNDLGNBQWM7b0NBQ2hCSSxZQUFZLENBQUNDLElBQUk7Z0NBQ3JCLENBQUM7MENBQUUsQ0FBTTs7Ozs7Ozt1QkFIT2lCLEdBQUc7Ozs7O2dCQUl2QixDQUFDLElBQ0MsQ0FBbUI7Ozs7Ozs7Ozs7OztBQUt6QyxDQUFDO0FBRUQsaUVBQWU3QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmKHVzZXJJbnB1dCl7XHJcbiAgICAgICAgICAgIHNldFRvZG9MaXN0KFtcclxuICAgICAgICAgICAgICAgIHVzZXJJbnB1dCxcclxuICAgICAgICAgICAgICAgIC4uLnRvZG9MaXN0XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNldFVzZXJJbnB1dCgnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpXHJcblxyXG4gICAgICAgIHNldFRvZG9MaXN0KHVwZGF0ZWRBcnIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPk5leHRKUyBUb2RvIExpc3Q8L2gzPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VySW5wdXR9IHBsYWNlaG9sZGVyPSdFbnRlciBhIHRvZG8gaXRlbScgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPjxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49MSA/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpZHh9Pnt0b2RvfTxidXR0b24gb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciBhIHRvZG8gaXRlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ2NCIsInV1aWR2NCIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZWRBcnIiLCJmaWx0ZXIiLCJ0b2RvSXRlbSIsImluZGV4T2YiLCJkaXYiLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();