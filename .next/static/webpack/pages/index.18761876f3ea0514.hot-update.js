"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        if (userInput) {\n            setTodoList([\n                userInput\n            ].concat(_toConsumableArray(todoList)));\n            setUserInput('');\n        }\n    };\n    var handleDelete = function(index) {\n        var updatedArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList(updatedArr);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"NextJS Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        placeholder: \"Enter a todo item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 111\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 52\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 32\n                    }, _this1));\n                }) : 'Enter a todo item'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this));\n};\n_s(Index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxHQUFLLENBQUNHLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBRWpCLEdBQUssQ0FBNkJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXRDSSxTQUFTLEdBQWtCSixHQUFZLEtBQTVCSyxZQUFZLEdBQUlMLEdBQVk7SUFFOUMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ00sUUFBUSxHQUFpQk4sSUFBWSxLQUEzQk8sV0FBVyxHQUFJUCxJQUFZO0lBRTVDLEdBQUssQ0FBQ1EsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDekJBLENBQUMsQ0FBQ0MsY0FBYztRQUVoQkwsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQixDQUFDO0lBRUQsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQSixDQUFDLEVBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO1FBRWhCLEVBQUUsRUFBQ04sU0FBUyxFQUFDLENBQUM7WUFDVkcsV0FBVyxDQUFDLENBQUM7Z0JBQ1RILFNBQVM7WUFFYixDQUFDLENBSFcsTUFHWCxvQkFETUUsUUFBUTtZQUdmRCxZQUFZLENBQUMsQ0FBRTtRQUNuQixDQUFDO0lBRUwsQ0FBQztJQUVELEdBQUssQ0FBQ1MsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDN0IsR0FBSyxDQUFDQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSVosTUFBTSxDQUFOQSxRQUFRLENBQUNhLE9BQU8sQ0FBQ0QsUUFBUSxLQUFLWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0MsSUFBSTs7UUFFbEdiLFdBQVcsQ0FBQ1MsVUFBVTtJQUMxQixDQUFDO0lBRUQsTUFBTSw2RUFDREssQ0FBRzs7d0ZBQ0NDLENBQUU7MEJBQUMsQ0FBZ0I7Ozs7Ozt3RkFDbkJDLENBQUk7O2dHQUNBQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ2IsS0FBSyxFQUFFUixTQUFTO3dCQUFFc0IsV0FBVyxFQUFDLENBQW1CO3dCQUFDQyxRQUFRLEVBQUVuQixZQUFZOzs7Ozs7Z0dBQUlvQixDQUFNO3dCQUFDQyxPQUFPLEVBQUVoQixZQUFZO2tDQUFFLENBQU07Ozs7Ozs7Ozs7Ozt3RkFFdElpQixDQUFFOzBCQUVLeEIsUUFBUSxDQUFDeUIsTUFBTSxJQUFHLENBQUMsR0FBR3pCLFFBQVEsQ0FBQzBCLEdBQUcsQ0FBQyxRQUFRLENBQVBaLElBQUksRUFBRWEsR0FBRyxFQUFLLENBQUM7b0JBQy9DLE1BQU0sNkVBQUVDLENBQUU7OzRCQUFZZCxJQUFJO3dHQUFFUSxDQUFNO2dDQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQcEIsQ0FBQyxFQUFLLENBQUM7b0NBQ2hEQSxDQUFDLENBQUNDLGNBQWM7b0NBQ2hCSSxZQUFZLENBQUNNLElBQUk7Z0NBQ3JCLENBQUM7MENBQUUsQ0FBTTs7Ozs7Ozt1QkFIT2EsR0FBRzs7Ozs7Z0JBSXZCLENBQUMsSUFDQyxDQUFtQjs7Ozs7Ozs7Ozs7O0FBS3pDLENBQUM7R0FuREs5QixLQUFLO0tBQUxBLEtBQUs7QUFxRFgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZih1c2VySW5wdXQpe1xyXG4gICAgICAgICAgICBzZXRUb2RvTGlzdChbXHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgICAgICAuLi50b2RvTGlzdFxyXG4gICAgICAgICAgICBdKTtcclxuICAgIFxyXG4gICAgICAgICAgICBzZXRVc2VySW5wdXQoJycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvTGlzdC5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0xpc3QuaW5kZXhPZih0b2RvSXRlbSkgIT0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICAgICAgc2V0VG9kb0xpc3QodXBkYXRlZEFycilcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+TmV4dEpTIFRvZG8gTGlzdDwvaDM+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJJbnB1dH0gcGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5sZW5ndGggPj0xID8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99PGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ0VudGVyIGEgdG9kbyBpdGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJpbmRleCIsInVwZGF0ZWRBcnIiLCJmaWx0ZXIiLCJ0b2RvSXRlbSIsImluZGV4T2YiLCJ0b2RvIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});