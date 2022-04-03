"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myCollection",{

/***/ "./pages/myCollection.js":
/*!*******************************!*\
  !*** ./pages/myCollection.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ \"./components/header.js\");\n/* harmony import */ var _components_Collections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Collections.js */ \"./components/Collections.js\");\n/* harmony import */ var _components_design_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/design.js */ \"./components/design.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ \"./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n// import { nftaddress, nftmarketaddress, rpc_url } from '../config.js'\n//importing abis\n// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'\n// import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'\n\n\nvar _s = $RefreshSig$();\nvar MyCollection = function() {\n    var listNFT = function listNFT(nft) {\n        console.log(\"nft:\", nft);\n        router.push(\"/resell-nft?id=\".concat(nft.tokenId, \"&tokenURI=\").concat(nft.tokenURI));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    function loadNFTs() {\n        return _loadNFTs.apply(this, arguments);\n    }\n    function _loadNFTs() {\n        _loadNFTs = _asyncToGenerator(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3modal, connection, provider, signer, marketplaceContract, data, items;\n            return C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_7___default())({\n                            network: \"mainnet\",\n                            cacheProvider: true\n                        });\n                        _ctx1.next = 3;\n                        return web3modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketplaceContract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__.abi, signer);\n                        _ctx1.next = 9;\n                        return marketplaceContract.fetchMyNFTs();\n                    case 9:\n                        data = _ctx1.sent;\n                        _ctx1.next = 12;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var price, item;\n                                return C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                image: i.tokenURI\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 3:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 12:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 15:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _loadNFTs.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n            sx: {\n                backgroundColor: \"#F7FFFE\",\n                margin: \"-0.4%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                sx: {\n                    backgroundColor: \"#F7FFFE\",\n                    margin: \"-0.4%\",\n                    marginRight: \"-0.3%\",\n                    marginBottom: \"-2%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        page: 3\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Collections_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"My NFT Collections\",\n                        nfts: nfts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this),\n                    !nfts.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"No assets owned.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                            lineNumber: 107,\n                            columnNumber: 36\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                        lineNumber: 107,\n                        columnNumber: 28\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_design_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\myCollection.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, _this);\n};\n_s(MyCollection, \"tZQqWsB6a3tlmIWr5tsZK11RClg=\");\n_c = MyCollection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyCollection);\nvar _c;\n$RefreshReg$(_c, \"MyCollection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeEIsbURBQUc7a0JBQ0YsNEVBQUNBLG1EQUFHO1lBQUNzRCxFQUFFLEVBQUU7Z0JBQUVDLGVBQWUsRUFBRSxTQUFTO2dCQUFFQyxNQUFNLEVBQUUsT0FBTzthQUFFO3NCQUN0RCw0RUFBQ3hELG1EQUFHO2dCQUNGc0QsRUFBRSxFQUFFO29CQUNGQyxlQUFlLEVBQUUsU0FBUztvQkFDMUJDLE1BQU0sRUFBRSxPQUFPO29CQUNmQyxXQUFXLEVBQUUsT0FBTztvQkFDcEJDLFlBQVksRUFBRSxLQUFLO2lCQUNwQjs7a0NBRUQsOERBQUN6RCw2REFBTTt3QkFBQzBELElBQUksRUFBRSxDQUFDOzs7Ozs2QkFBSTtrQ0FDbkIsOERBQUN6RCxrRUFBVzt3QkFBQzBELEtBQUssRUFBQyxvQkFBb0I7d0JBQUN4QyxJQUFJLEVBQUVBLElBQUk7Ozs7OzZCQUFHO29CQUNwRCxDQUFDQSxJQUFJLENBQUN5QyxNQUFNLGtCQUFJLDhEQUFDQyxRQUFNO2tDQUFDLDRFQUFDQyxJQUFFO3NDQUFDLGtCQUFnQjs7Ozs7aUNBQUs7Ozs7OzZCQUFTO2tDQUMzRCw4REFBQzVELDZEQUFNOzs7OzZCQUFHOzs7Ozs7cUJBQ047Ozs7O2lCQUNGOzs7OzthQUNGLENBQ1A7Q0FDRjtHQTFGS1EsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBNEZsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teUNvbGxlY3Rpb24uanM/OGQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qcydcclxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sbGVjdGlvbnMuanMnXHJcbmltcG9ydCBEZXNpZ24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNpZ24uanMnXHJcblxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCdcclxuXHJcbi8vIGltcG9ydCB7IG5mdGFkZHJlc3MsIG5mdG1hcmtldGFkZHJlc3MsIHJwY191cmwgfSBmcm9tICcuLi9jb25maWcuanMnXHJcblxyXG4vL2ltcG9ydGluZyBhYmlzXHJcbi8vIGltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uJ1xyXG4vLyBpbXBvcnQgTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvbidcclxuXHJcbmltcG9ydCB7XHJcbiAgbWFya2V0cGxhY2VBZGRyZXNzXHJcbn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IE5GVE1hcmtldHBsYWNlIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0cGxhY2Uuc29sL05GVE1hcmtldHBsYWNlLmpzb24nXHJcblxyXG5jb25zdCBNeUNvbGxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKCdub3QtbG9hZGVkJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRORlRzKClcclxuICB9LCBbXSlcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XHJcbiAgICAvL3RoaXMgd2lsbCBsb29rIGZvciBhIGluc3RhbmNlIG9mIGV0aGVyZXVtIGluamVjdGVkIGludG8gdGhlIGJyb3dzZXJcclxuICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xyXG4gICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIixcclxuICAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAvL2lmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCwgdGhlbiB3ZSB3aWxsIGhhdmUgYSBjb25uZWN0aW9uIHRoYXQgd2UgY2FuIHdvcmsgd2l0aFxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KClcclxuXHJcbiAgICAvL2NyZWF0aW5nIGEgcHJvdmlkZXIgd2l0aCB0aGUgdXNlcidzIGFkZHJlZGQvY29ubmVjdGlvblxyXG4gICAgLy93ZSBhcmUgdXNpbmcgV2ViM1Byb3ZpZGVyIGhlcmVcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXHJcblxyXG4gICAgLy93ZSBuZWVkIHRoZSB1c2VyIHRvIHNpZ24gaW4gdG8gZXhlY3V0ZSBhbiBhY3R1YWwgdHJhbnNhY3Rpb25cclxuICAgIC8vdGh1cyB3ZSBhcmUgY3JlYXRpbmcgYSBzaWduZXJcclxuXHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG4gICAgLy90YWtpbmcgcmVmZXJlbmNlIHRvIHRoZSBNYXJrZXQgY29udHJhY3RcclxuICAgIC8vIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgIC8vICAgbmZ0bWFya2V0YWRkcmVzcyxcclxuICAgIC8vICAgTWFya2V0LmFiaSxcclxuICAgIC8vICAgc2lnbmVyLFxyXG4gICAgLy8gKVxyXG4gICAgY29uc3QgbWFya2V0cGxhY2VDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobWFya2V0cGxhY2VBZGRyZXNzLCBORlRNYXJrZXRwbGFjZS5hYmksIHNpZ25lcilcclxuICAgXHJcblxyXG4gICAgLy8gY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0YWRkcmVzcywgTkZULmFiaSwgcHJvdmlkZXIpXHJcblxyXG4gICAgLy9nZXR0aW5nIHRoZSBkYXRhXHJcbiAgICAvL2dldHRpbmcgYWxsIHRoZSB1bnNvbGQgaXRlbXMgdGhyb3VnaCBjYWxsaW5nIGEgZnVuY3Rpb24gb2Ygb3VyIGNvbnRyYWN0XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFya2V0cGxhY2VDb250cmFjdC5mZXRjaE15TkZUcygpXHJcblxyXG4gICAgLy9tYXBwaW5nIG92ZXIgYWxsIHRoZSBpdGVtc1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcclxuICAgICAgICAvL2NhbGxpbmcgdGhlIHRva2VuQ29udHJhY3QgYW5kIGdldHRpbmcgdGhlIHRva2VuVXJpXHJcblxyXG4gICAgICAgIC8vaW4gaXBmcywgd2Ugd2lsbCBiZSBzdG9yaW5nIG91ciB0b2tlbiBpbiBqc29uIGZvcm1hdCwgd2l0aCB0aGVpciBuYW1lcywgZGVzY3JpcHRpb25zLCBldGNcclxuICAgICAgICAvL0xldCdzIGdldCB0aGF0IGRhdGE6XHJcbiAgICAgICAgLy8gY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSlcclxuICAgICAgICAvL2NyZWF0aW5nIGEgdmFsdWUgcHJpY2UsIGFuZCBmb3JtYXR0aW5nIGl0IHRvIGEgZGVzaXJhYmxlIGZvcm1hdFxyXG4gICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXHJcblxyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgIGltYWdlOiBpLnRva2VuVVJJLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgfSksXHJcbiAgICApXHJcblxyXG4gICAgc2V0TmZ0cyhpdGVtcylcclxuICAgIHNldExvYWRpbmdTdGF0ZSgnbG9hZGVkJylcclxuICB9XHJcbiAgZnVuY3Rpb24gbGlzdE5GVChuZnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCduZnQ6JywgbmZ0KVxyXG4gICAgcm91dGVyLnB1c2goYC9yZXNlbGwtbmZ0P2lkPSR7bmZ0LnRva2VuSWR9JnRva2VuVVJJPSR7bmZ0LnRva2VuVVJJfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGRkZFJywgbWFyZ2luOiAnLTAuNCUnIH19PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0ZGRkUnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICctMC40JScsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLTAuMyUnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICctMiUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhZ2U9ezN9IC8+XHJcbiAgICAgICAgICA8Q29sbGVjdGlvbnMgdGl0bGU9XCJNeSBORlQgQ29sbGVjdGlvbnNcIiBuZnRzPXtuZnRzfS8+XHJcbiAgICAgICAgICB7IW5mdHMubGVuZ3RoICYmIDxjZW50ZXI+PGgxPk5vIGFzc2V0cyBvd25lZC48L2gxPjwvY2VudGVyPn1cclxuICAgICAgICAgIDxEZXNpZ24gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29sbGVjdGlvblxyXG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGVyIiwiQ29sbGVjdGlvbnMiLCJEZXNpZ24iLCJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiV2ViM01vZGFsIiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTkZUTWFya2V0cGxhY2UiLCJNeUNvbGxlY3Rpb24iLCJsaXN0TkZUIiwibmZ0IiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInB1c2giLCJ0b2tlbklkIiwidG9rZW5VUkkiLCJuZnRzIiwic2V0TmZ0cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsImxvYWRORlRzIiwid2ViM21vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwibWFya2V0cGxhY2VDb250cmFjdCIsImRhdGEiLCJpdGVtcyIsIm5ldHdvcmsiLCJjYWNoZVByb3ZpZGVyIiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZmV0Y2hNeU5GVHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInByaWNlIiwiaXRlbSIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJwYWdlIiwidGl0bGUiLCJsZW5ndGgiLCJjZW50ZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/myCollection.js\n");

/***/ })

});