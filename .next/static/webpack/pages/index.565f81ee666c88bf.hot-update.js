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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1234,\n            message: 'buy milk',\n            done: false\n        }\n    ]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        if (userInput) {\n            setTodoList([\n                {\n                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n                    message: userInput,\n                    done: false\n                }\n            ].concat(_toConsumableArray(todoList)));\n            setUserInput('');\n        }\n    };\n    var handleDelete = function(todo) {\n        var updatedArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList(updatedArr);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"NextJS Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        placeholder: \"Enter a todo item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 111\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 52\n                            }, _this1)\n                        ]\n                    }, idx, true, {\n                        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 32\n                    }, _this1));\n                }) : 'Enter a todo item'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jvict\\\\Documents\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, _this));\n};\n_s(Index, \"UYQDw1Sb94RrYgKdkt2o+MdN96Y=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFDRyxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUVqQixHQUFLLENBQTZCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF0Q0ksU0FBUyxHQUFrQkosR0FBWSxLQUE1QkssWUFBWSxHQUFJTCxHQUFZO0lBRTlDLEdBQUssQ0FBMkJBLElBTzlCLEdBUDhCQSwrQ0FBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQztZQUNHTSxFQUFFLEVBQUUsSUFBSTtZQUNSQyxPQUFPLEVBQUUsQ0FBVTtZQUNuQkMsSUFBSSxFQUFFLEtBQUs7UUFFZixDQUFDO0lBQ0wsQ0FBQyxHQVBNQyxRQUFRLEdBQWlCVCxJQU85QixLQVBlVSxXQUFXLEdBQUlWLElBTzlCO0lBRUYsR0FBSyxDQUFDVyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO1FBRWhCUixZQUFZLENBQUNPLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO0lBQy9CLENBQUM7SUFFRCxHQUFLLENBQUNDLFlBQVksR0FBRyxRQUFRLENBQVBKLENBQUMsRUFBSyxDQUFDO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWM7UUFFaEIsRUFBRSxFQUFDVCxTQUFTLEVBQUMsQ0FBQztZQUNWTSxXQUFXLENBQUMsQ0FBQztnQkFDVCxDQUFDO29CQUNHSixFQUFFLEVBQUVKLHdDQUFNO29CQUNWSyxPQUFPLEVBQUVILFNBQVM7b0JBQ2xCSSxJQUFJLEVBQUUsS0FBSztnQkFFZixDQUFDO1lBRUwsQ0FBQyxDQVJXLE1BUVgsb0JBRE1DLFFBQVE7WUFHZkosWUFBWSxDQUFDLENBQUU7UUFDbkIsQ0FBQztJQUVMLENBQUM7SUFFRCxHQUFLLENBQUNZLFlBQVksR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzVCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHVixRQUFRLENBQUNXLE1BQU0sQ0FBQ0MsUUFBUSxDQUFSQSxRQUFRO1lBQUlaLE1BQU0sQ0FBTkEsUUFBUSxDQUFDYSxPQUFPLENBQUNELFFBQVEsS0FBS1osUUFBUSxDQUFDYSxPQUFPLENBQUNKLElBQUk7O1FBRWxHUixXQUFXLENBQUNTLFVBQVU7SUFDMUIsQ0FBQztJQUVELE1BQU0sNkVBQ0RJLENBQUc7O3dGQUNDQyxDQUFFOzBCQUFDLENBQWdCOzs7Ozs7d0ZBQ25CQyxDQUFJOztnR0FDQUMsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQU07d0JBQUNaLEtBQUssRUFBRVgsU0FBUzt3QkFBRXdCLFdBQVcsRUFBQyxDQUFtQjt3QkFBQ0MsUUFBUSxFQUFFbEIsWUFBWTs7Ozs7O2dHQUFJbUIsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFZixZQUFZO2tDQUFFLENBQU07Ozs7Ozs7Ozs7Ozt3RkFFdElnQixDQUFFOzBCQUVLdkIsUUFBUSxDQUFDd0IsTUFBTSxJQUFHLENBQUMsR0FBR3hCLFFBQVEsQ0FBQ3lCLEdBQUcsQ0FBQyxRQUFRLENBQVBoQixJQUFJLEVBQUVpQixHQUFHLEVBQUssQ0FBQztvQkFDL0MsTUFBTSw2RUFBRUMsQ0FBRTs7NEJBQVlsQixJQUFJO3dHQUFFWSxDQUFNO2dDQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQbkIsQ0FBQyxFQUFLLENBQUM7b0NBQ2hEQSxDQUFDLENBQUNDLGNBQWM7b0NBQ2hCSSxZQUFZLENBQUNDLElBQUk7Z0NBQ3JCLENBQUM7MENBQUUsQ0FBTTs7Ozs7Ozt1QkFIT2lCLEdBQUc7Ozs7O2dCQUl2QixDQUFDLElBQ0MsQ0FBbUI7Ozs7Ozs7Ozs7OztBQUt6QyxDQUFDO0dBL0RLaEMsS0FBSztLQUFMQSxLQUFLO0FBaUVYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMjM0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnYnV5IG1pbGsnLFxyXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYodXNlcklucHV0KXtcclxuICAgICAgICAgICAgc2V0VG9kb0xpc3QoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4udG9kb0xpc3RcclxuICAgICAgICAgICAgXSk7XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0VXNlcklucHV0KCcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvTGlzdC5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0xpc3QuaW5kZXhPZih0b2RvSXRlbSkgIT0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICAgICAgc2V0VG9kb0xpc3QodXBkYXRlZEFycilcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+TmV4dEpTIFRvZG8gTGlzdDwvaDM+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJJbnB1dH0gcGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5sZW5ndGggPj0xID8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99PGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ0VudGVyIGEgdG9kbyBpdGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJpZCIsIm1lc3NhZ2UiLCJkb25lIiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZWRBcnIiLCJmaWx0ZXIiLCJ0b2RvSXRlbSIsImluZGV4T2YiLCJkaXYiLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});