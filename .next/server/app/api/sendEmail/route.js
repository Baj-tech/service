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
exports.id = "app/api/sendEmail/route";
exports.ids = ["app/api/sendEmail/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_baj_Desktop_service_booking_hack_maximum_app_api_sendEmail_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sendEmail/route.js */ \"(rsc)/./app/api/sendEmail/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sendEmail/route\",\n        pathname: \"/api/sendEmail\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendEmail/route\"\n    },\n    resolvedPagePath: \"/home/baj/Desktop/service-booking/hack/maximum/app/api/sendEmail/route.js\",\n    nextConfigOutput,\n    userland: _home_baj_Desktop_service_booking_hack_maximum_app_api_sendEmail_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sendEmail/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kRW1haWwlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYmFqJTJGRGVza3RvcCUyRnNlcnZpY2UtYm9va2luZyUyRmhhY2slMkZtYXhpbXVtJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYmFqJTJGRGVza3RvcCUyRnNlcnZpY2UtYm9va2luZyUyRmhhY2slMkZtYXhpbXVtJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF0dG9vLWFwcG9pbnRtZW50LWZyb250ZW5kLz9jM2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2Jhai9EZXNrdG9wL3NlcnZpY2UtYm9va2luZy9oYWNrL21heGltdW0vYXBwL2FwaS9zZW5kRW1haWwvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmRFbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmRFbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZEVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvYmFqL0Rlc2t0b3Avc2VydmljZS1ib29raW5nL2hhY2svbWF4aW11bS9hcHAvYXBpL3NlbmRFbWFpbC9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kRW1haWwvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/sendEmail/route.js":
/*!************************************!*\
  !*** ./app/api/sendEmail/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _emails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/emails */ \"(rsc)/./emails/index.jsx\");\n\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    const response = await req.json();\n    const result = response.data;\n    try {\n        const data = await resend.emails.send({\n            from: \"Services-Booking@resend.dev\",\n            to: \"speshies@gmail.com\",\n            subject: \"Appointment Booking Confirmation\",\n            react: (0,_emails__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                result\n            })\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            data\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmRFbWFpbC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ1c7QUFDTjtBQUVyQyxNQUFNRyxTQUFTLElBQUlILDBDQUFNQSxDQUFDSSxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFFN0MsZUFBZUMsS0FBS0MsR0FBRztJQUUxQixNQUFNQyxXQUFTLE1BQU1ELElBQUlFLElBQUk7SUFDN0IsTUFBTUMsU0FBT0YsU0FBU0csSUFBSTtJQUMxQixJQUFHO1FBRUMsTUFBTUEsT0FBSyxNQUFNVCxPQUFPVSxNQUFNLENBQUNDLElBQUksQ0FBQztZQUNoQ0MsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsT0FBT2hCLG1EQUFhQSxDQUFDO2dCQUFDUztZQUFNO1FBQzlCO1FBQ0YsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFDRTtRQUFJO0lBQ2xDLEVBQ0EsT0FBTU8sT0FDTjtRQUNJLE9BQU9sQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUNTO1FBQUs7SUFDbkM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhdHRvby1hcHBvaW50bWVudC1mcm9udGVuZC8uL2FwcC9hcGkvc2VuZEVtYWlsL3JvdXRlLmpzP2E4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBFbWFpbFRlbXBsYXRlIGZyb20gJ0AvZW1haWxzJztcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSl7XG5cbiAgICBjb25zdCByZXNwb25zZT1hd2FpdCByZXEuanNvbigpXG4gICAgY29uc3QgcmVzdWx0PXJlc3BvbnNlLmRhdGE7XG4gICAgdHJ5e1xuXG4gICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgICAgICAgIGZyb206ICdTZXJ2aWNlcy1Cb29raW5nQHJlc2VuZC5kZXYnLFxuICAgICAgICAgICAgdG86ICdzcGVzaGllc0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgc3ViamVjdDogJ0FwcG9pbnRtZW50IEJvb2tpbmcgQ29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgIHJlYWN0OiBFbWFpbFRlbXBsYXRlKHtyZXN1bHR9KVxuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2RhdGF9KVxuICAgIH1cbiAgICBjYXRjaChlcnJvcilcbiAgICB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3J9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXNlbmQiLCJOZXh0UmVzcG9uc2UiLCJFbWFpbFRlbXBsYXRlIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcSIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInJlYWN0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sendEmail/route.js\n");

/***/ }),

/***/ "(rsc)/./emails/index.jsx":
/*!**************************!*\
  !*** ./emails/index.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailTemplate: () => (/* binding */ EmailTemplate),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/html/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/head/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/preview/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/body/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/container/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/img/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/text/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/hr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"http://localhost:3000\";\nconst EmailTemplate = ({ UserName, Email, Time, Date, service, Note })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_3__.Head, {}, void 0, false, {\n                fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_4__.Preview, {\n                children: \"The sales intelligence platform that helps you uncover qualified leads.\"\n            }, void 0, false, {\n                fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_5__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                            src: `${baseUrl}/logo.svg`,\n                            width: \"170\",\n                            height: \"50\",\n                            alt: \"Koala\",\n                            style: logo\n                        }, void 0, false, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: [\n                                \"Hi \",\n                                UserName,\n                                \",\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: [\n                                \"Customer has just booked for a service, on \",\n                                Date,\n                                \" at \",\n                                Time\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: [\n                                \"Review!,\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"I Service\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_9__.Hr, {\n                            style: hr\n                        }, void 0, false, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: footer,\n                            children: \"Developed by Baj Tech!\"\n                        }, void 0, false, {\n                            fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/baj/Desktop/service-booking/hack/maximum/emails/index.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailTemplate);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    fontFamily: '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif'\n};\nconst container = {\n    margin: \"0 auto\",\n    padding: \"20px 0 48px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst paragraph = {\n    fontSize: \"16px\",\n    lineHeight: \"26px\"\n};\nconst btnContainer = {\n    textAlign: \"center\"\n};\nconst button = {\n    backgroundColor: \"#5F51E8\",\n    borderRadius: \"3px\",\n    color: \"#fff\",\n    fontSize: \"16px\",\n    textDecoration: \"none\",\n    textAlign: \"center\",\n    display: \"block\",\n    padding: \"12px\"\n};\nconst hr = {\n    borderColor: \"#cccccc\",\n    margin: \"20px 0\"\n};\nconst footer = {\n    color: \"#8898aa\",\n    fontSize: \"12px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9lbWFpbHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdtQztBQUNGO0FBSS9CLE1BQU1XLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxHQUNsQyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxHQUNuQztBQUVHLE1BQU1DLGdCQUFnQixDQUFDLEVBQzVCQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsSUFBSSxFQUNMLGlCQUNDLDhEQUFDaEIseURBQUlBOzswQkFDSCw4REFBQ0YseURBQUlBOzs7OzswQkFDTCw4REFBQ0ksNERBQU9BOzBCQUFDOzs7Ozs7MEJBR1QsOERBQUNQLHlEQUFJQTtnQkFBQ3NCLE9BQU9DOzBCQUNYLDRFQUFDckIsOERBQVNBO29CQUFDb0IsT0FBT0U7O3NDQUNoQiw4REFBQ2xCLHdEQUFHQTs0QkFDRm1CLEtBQUssQ0FBQyxFQUFFZCxRQUFRLFNBQVMsQ0FBQzs0QkFDMUJlLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUk7NEJBQ0pOLE9BQU9POzs7Ozs7c0NBRVQsOERBQUNwQix5REFBSUE7NEJBQUNhLE9BQU9ROztnQ0FBVztnQ0FBSWQ7Z0NBQVM7Ozs7Ozs7c0NBQ3JDLDhEQUFDUCx5REFBSUE7NEJBQUNhLE9BQU9ROztnQ0FBVztnQ0FDc0JYO2dDQUFLO2dDQUFLRDs7Ozs7OztzQ0FPeEQsOERBQUNULHlEQUFJQTs0QkFBQ2EsT0FBT1E7O2dDQUFXOzhDQUV0Qiw4REFBQ0M7Ozs7O2dDQUFLOzs7Ozs7O3NDQUdSLDhEQUFDM0IsdURBQUVBOzRCQUFDa0IsT0FBT1U7Ozs7OztzQ0FDWCw4REFBQ3ZCLHlEQUFJQTs0QkFBQ2EsT0FBT1c7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBTTNCO0FBSUYsaUVBQWVsQixhQUFhQSxFQUFDO0FBRTdCLE1BQU1RLE9BQU87SUFDWFcsaUJBQWlCO0lBQ2pCQyxZQUNFO0FBQ0o7QUFFQSxNQUFNWCxZQUFZO0lBQ2hCWSxRQUFRO0lBQ1JDLFNBQVM7QUFDWDtBQUVBLE1BQU1SLE9BQU87SUFDWE8sUUFBUTtBQUNWO0FBRUEsTUFBTU4sWUFBWTtJQUNoQlEsVUFBVTtJQUNWQyxZQUFZO0FBQ2Q7QUFFQSxNQUFNQyxlQUFlO0lBQ25CQyxXQUFXO0FBQ2I7QUFFQSxNQUFNQyxTQUFTO0lBQ2JSLGlCQUFpQjtJQUNqQlMsY0FBYztJQUNkQyxPQUFPO0lBQ1BOLFVBQVU7SUFDVk8sZ0JBQWdCO0lBQ2hCSixXQUFXO0lBQ1hLLFNBQVM7SUFDVFQsU0FBUztBQUNYO0FBRUEsTUFBTUwsS0FBSztJQUNUZSxhQUFhO0lBQ2JYLFFBQVE7QUFDVjtBQUVBLE1BQU1ILFNBQVM7SUFDYlcsT0FBTztJQUNQTixVQUFVO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXR0b28tYXBwb2ludG1lbnQtZnJvbnRlbmQvLi9lbWFpbHMvaW5kZXguanN4P2M0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCb2R5LFxuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgSGVhZCxcbiAgICBIcixcbiAgICBIdG1sLFxuICAgIEltZyxcbiAgICBQcmV2aWV3LFxuICAgIFNlY3Rpb24sXG4gICAgVGV4dCxcbiAgfSBmcm9tIFwiQHJlYWN0LWVtYWlsL2NvbXBvbmVudHNcIjtcbiAgaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4gIFxuIFxuICBcbiAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZFUkNFTF9VUkxcbiAgICA/IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gXG4gICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuICBcbiAgZXhwb3J0IGNvbnN0IEVtYWlsVGVtcGxhdGUgPSAoe1xuICAgIFVzZXJOYW1lLFxuICAgIEVtYWlsLFxuICAgIFRpbWUsXG4gICAgRGF0ZSxcbiAgICBzZXJ2aWNlLFxuICAgIE5vdGVcbiAgfSkgPT4gKFxuICAgIDxIdG1sPlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxQcmV2aWV3PlxuICAgICAgICBUaGUgc2FsZXMgaW50ZWxsaWdlbmNlIHBsYXRmb3JtIHRoYXQgaGVscHMgeW91IHVuY292ZXIgcXVhbGlmaWVkIGxlYWRzLlxuICAgICAgPC9QcmV2aWV3PlxuICAgICAgPEJvZHkgc3R5bGU9e21haW59PlxuICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXtjb250YWluZXJ9PlxuICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgIHNyYz17YCR7YmFzZVVybH0vbG9nby5zdmdgfVxuICAgICAgICAgICAgd2lkdGg9XCIxNzBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxuICAgICAgICAgICAgYWx0PVwiS29hbGFcIlxuICAgICAgICAgICAgc3R5bGU9e2xvZ299XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5IaSB7VXNlck5hbWV9LDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICAgIEN1c3RvbWVyIGhhcyBqdXN0IGJvb2tlZCBmb3IgYSBzZXJ2aWNlLCBvbiB7RGF0ZX0gYXQge1RpbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHsvKiA8U2VjdGlvbiBzdHlsZT17YnRuQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e2J1dHRvbn0gaHJlZj1cImh0dHBzOi8vZ2V0a29hbGEuY29tXCI+XG4gICAgICAgICAgICAgIEdldCBzdGFydGVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1NlY3Rpb24+ICovfVxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuICAgICAgICAgICAgUmV2aWV3ISxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSSBTZXJ2aWNlIFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8SHIgc3R5bGU9e2hyfSAvPlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtmb290ZXJ9PlxuICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IEJhaiBUZWNoIVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xuICBcblxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRW1haWxUZW1wbGF0ZTtcbiAgXG4gIGNvbnN0IG1haW4gPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICBmb250RmFtaWx5OlxuICAgICAgJy1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZicsXG4gIH07XG4gIFxuICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMjBweCAwIDQ4cHhcIixcbiAgfTtcbiAgXG4gIGNvbnN0IGxvZ28gPSB7XG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICB9O1xuICBcbiAgY29uc3QgcGFyYWdyYXBoID0ge1xuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjI2cHhcIixcbiAgfTtcbiAgXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH07XG4gIFxuICBjb25zdCBidXR0b24gPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1RjUxRThcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBwYWRkaW5nOiBcIjEycHhcIixcbiAgfTtcbiAgXG4gIGNvbnN0IGhyID0ge1xuICAgIGJvcmRlckNvbG9yOiBcIiNjY2NjY2NcIixcbiAgICBtYXJnaW46IFwiMjBweCAwXCIsXG4gIH07XG4gIFxuICBjb25zdCBmb290ZXIgPSB7XG4gICAgY29sb3I6IFwiIzg4OThhYVwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgfTtcbiAgIl0sIm5hbWVzIjpbIkJvZHkiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkIiwiSHIiLCJIdG1sIiwiSW1nIiwiUHJldmlldyIsIlNlY3Rpb24iLCJUZXh0IiwiUmVhY3QiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJFbWFpbFRlbXBsYXRlIiwiVXNlck5hbWUiLCJFbWFpbCIsIlRpbWUiLCJEYXRlIiwic2VydmljZSIsIk5vdGUiLCJzdHlsZSIsIm1haW4iLCJjb250YWluZXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxvZ28iLCJwYXJhZ3JhcGgiLCJiciIsImhyIiwiZm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJidG5Db250YWluZXIiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiZGlzcGxheSIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./emails/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@react-email","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbaj%2FDesktop%2Fservice-booking%2Fhack%2Fmaximum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();