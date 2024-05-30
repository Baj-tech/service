"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kinde-oss/kinde-auth-nextjs/server */ \"(middleware)/./node_modules/@kinde-oss/kinde-auth-nextjs/dist/server/index.js\");\n\n\n// This function can be marked `async` if using `await` inside\nasync function middleware(request) {\n    const { isAuthenticated } = (0,_kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.getKindeServerSession)();\n    if (!await isAuthenticated()) {\n        // redirect(\"/api/auth/login\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/api/auth/login?post_login_redirect_url=/\", request.url));\n    }\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/details/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ2tDO0FBQzVFLDhEQUE4RDtBQUN2RCxlQUFlRSxXQUFXQyxPQUFPO0lBQ3BDLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdILDBGQUFxQkE7SUFDakQsSUFBSSxDQUFFLE1BQU1HLG1CQUFvQjtRQUM3QiwrQkFBK0I7UUFDcEMsT0FBT0oscURBQVlBLENBQUNLLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLDZDQUE2Q0gsUUFBUUksR0FBRztJQUUzRjtBQUNKO0FBRUEsMkNBQTJDO0FBQ3BDLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFrQjtBQUM5QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IGdldEtpbmRlU2VydmVyU2Vzc2lvbiB9IGZyb20gXCJAa2luZGUtb3NzL2tpbmRlLWF1dGgtbmV4dGpzL3NlcnZlclwiO1xuLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgbWFya2VkIGBhc3luY2AgaWYgdXNpbmcgYGF3YWl0YCBpbnNpZGVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gZ2V0S2luZGVTZXJ2ZXJTZXNzaW9uKCk7XG4gICAgaWYgKCEoYXdhaXQgaXNBdXRoZW50aWNhdGVkKCkpKSB7XG4gICAgICAgLy8gcmVkaXJlY3QoXCIvYXBpL2F1dGgvbG9naW5cIik7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2FwaS9hdXRoL2xvZ2luP3Bvc3RfbG9naW5fcmVkaXJlY3RfdXJsPS8nLCByZXF1ZXN0LnVybCkpXG5cbiAgICB9XG59XG4gXG4vLyBTZWUgXCJNYXRjaGluZyBQYXRoc1wiIGJlbG93IHRvIGxlYXJuIG1vcmVcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnL2RldGFpbHMvOnBhdGgqJ10sXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEtpbmRlU2VydmVyU2Vzc2lvbiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiaXNBdXRoZW50aWNhdGVkIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});