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
exports.id = "pages/api/tempo";
exports.ids = ["pages/api/tempo"];
exports.modules = {

/***/ "(api)/./pages/api/tempo.js":
/*!****************************!*\
  !*** ./pages/api/tempo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function tempo(request, response) {\n    const apiSecret = process.env.CONVERTKIT_API_SECRET;\n    const dynamicDate = new Date();\n    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);\n    const subscribersResponseJson = await subscribersResponse.json();\n    const inscritos = subscribersResponseJson.total_subscribers;\n    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');\n    response.json({\n        date: dynamicDate.toGMTString(),\n        inscritos: inscritos\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVtcG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztlQUFlQSxLQUFLLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLENBQUM7SUFDckMsS0FBSyxDQUFDQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUI7SUFDbkQsS0FBSyxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDQyxJQUFJO0lBRTVCLEtBQUssQ0FBQ0MsbUJBQW1CLEdBQUcsS0FBSyxDQUFDQyxLQUFLLEVBQUUscURBQXFELEVBQUVQLFNBQVM7SUFDekcsS0FBSyxDQUFDUSx1QkFBdUIsR0FBRyxLQUFLLENBQUNGLG1CQUFtQixDQUFDRyxJQUFJO0lBQzlELEtBQUssQ0FBQ0MsU0FBUyxHQUFHRix1QkFBdUIsQ0FBQ0csaUJBQWlCO0lBRTNEWixRQUFRLENBQUNhLFNBQVMsQ0FBQyxDQUFlLGdCQUFFLENBQXFDO0lBRXpFYixRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ1hJLElBQUksRUFBRVQsV0FBVyxDQUFDVSxXQUFXO1FBQzdCSixTQUFTLEVBQUVBLFNBQVM7SUFDeEIsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC10ZXN0LWphdmEvLi9wYWdlcy9hcGkvdGVtcG8uanM/ODVkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiB0ZW1wbyhyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgY29uc3QgYXBpU2VjcmV0ID0gcHJvY2Vzcy5lbnYuQ09OVkVSVEtJVF9BUElfU0VDUkVUO1xyXG4gICAgY29uc3QgZHluYW1pY0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHN1YnNjcmliZXJzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY29udmVydGtpdC5jb20vdjMvc3Vic2NyaWJlcnM/YXBpX3NlY3JldD0ke2FwaVNlY3JldH1gKTtcclxuICAgIGNvbnN0IHN1YnNjcmliZXJzUmVzcG9uc2VKc29uID0gYXdhaXQgc3Vic2NyaWJlcnNSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBpbnNjcml0b3MgPSBzdWJzY3JpYmVyc1Jlc3BvbnNlSnNvbi50b3RhbF9zdWJzY3JpYmVycztcclxuXHJcbiAgICByZXNwb25zZS5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAncy1tYXhhZ2U9MTAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGUnKTtcclxuXHJcbiAgICByZXNwb25zZS5qc29uKHtcclxuICAgICAgICBkYXRlOiBkeW5hbWljRGF0ZS50b0dNVFN0cmluZygpLFxyXG4gICAgICAgIGluc2NyaXRvczogaW5zY3JpdG9zXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVtcG87Il0sIm5hbWVzIjpbInRlbXBvIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYXBpU2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkNPTlZFUlRLSVRfQVBJX1NFQ1JFVCIsImR5bmFtaWNEYXRlIiwiRGF0ZSIsInN1YnNjcmliZXJzUmVzcG9uc2UiLCJmZXRjaCIsInN1YnNjcmliZXJzUmVzcG9uc2VKc29uIiwianNvbiIsImluc2NyaXRvcyIsInRvdGFsX3N1YnNjcmliZXJzIiwic2V0SGVhZGVyIiwiZGF0ZSIsInRvR01UU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tempo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tempo.js"));
module.exports = __webpack_exports__;

})();