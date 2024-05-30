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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kinde-oss/kinde-auth-nextjs/server */ \"(middleware)/./node_modules/@kinde-oss/kinde-auth-nextjs/dist/server/index.js\");\n\n\n// This function can be marked `async` if using `await` inside\nasync function middleware(request) {\n    const { isAuthenticated } = (0,_kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.getKindeServerSession)();\n    if (!await isAuthenticated()) {\n        // redirect(\"/api/auth/login\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/api/auth/login?post_login_redirect_url=/\", request.url));\n    }\n} // See \"Matching Paths\" below to learn more\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDa0M7QUFDNUUsOERBQThEO0FBQ3ZELGVBQWVFLFdBQVdDLE9BQU87SUFDcEMsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0gsMEZBQXFCQTtJQUNqRCxJQUFJLENBQUUsTUFBTUcsbUJBQW9CO1FBQzdCLCtCQUErQjtRQUNwQyxPQUFPSixxREFBWUEsQ0FBQ0ssUUFBUSxDQUFDLElBQUlDLElBQUksNkNBQTZDSCxRQUFRSSxHQUFHO0lBRTNGO0FBQ0osRUFFQSwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0S2luZGVTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIkBraW5kZS1vc3Mva2luZGUtYXV0aC1uZXh0anMvc2VydmVyXCI7XG4vLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBtYXJrZWQgYGFzeW5jYCBpZiB1c2luZyBgYXdhaXRgIGluc2lkZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSBnZXRLaW5kZVNlcnZlclNlc3Npb24oKTtcbiAgICBpZiAoIShhd2FpdCBpc0F1dGhlbnRpY2F0ZWQoKSkpIHtcbiAgICAgICAvLyByZWRpcmVjdChcIi9hcGkvYXV0aC9sb2dpblwiKTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYXBpL2F1dGgvbG9naW4/cG9zdF9sb2dpbl9yZWRpcmVjdF91cmw9LycsIHJlcXVlc3QudXJsKSlcblxuICAgIH1cbn1cbiBcbi8vIFNlZSBcIk1hdGNoaW5nIFBhdGhzXCIgYmVsb3cgdG8gbGVhcm4gbW9yZVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEtpbmRlU2VydmVyU2Vzc2lvbiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiaXNBdXRoZW50aWNhdGVkIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});