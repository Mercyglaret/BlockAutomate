(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blockautomated';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_network_network_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/network/network.component */ "./src/app/dashboard/network/network.component.ts");
/* harmony import */ var _dashboard_networkview_networkview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/networkview/networkview.component */ "./src/app/dashboard/networkview/networkview.component.ts");
/* harmony import */ var _dashboard_setup_org_setup_org_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/setup-org/setup-org.component */ "./src/app/dashboard/setup-org/setup-org.component.ts");
/* harmony import */ var _dashboard_orgview_orgview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/orgview/orgview.component */ "./src/app/dashboard/orgview/orgview.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _dashboard_network_network_component__WEBPACK_IMPORTED_MODULE_11__["NetworkComponent"],
                _dashboard_networkview_networkview_component__WEBPACK_IMPORTED_MODULE_12__["NetworkviewComponent"],
                _dashboard_setup_org_setup_org_component__WEBPACK_IMPORTED_MODULE_13__["SetupOrgComponent"],
                _dashboard_orgview_orgview_component__WEBPACK_IMPORTED_MODULE_14__["OrgviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'login' },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                        children: [
                            { path: 'setup_myorg', component: _dashboard_setup_org_setup_org_component__WEBPACK_IMPORTED_MODULE_13__["SetupOrgComponent"] },
                            { path: 'network', component: _dashboard_network_network_component__WEBPACK_IMPORTED_MODULE_11__["NetworkComponent"] },
                            { path: 'networkview/:id', component: _dashboard_networkview_networkview_component__WEBPACK_IMPORTED_MODULE_12__["NetworkviewComponent"] },
                            { path: 'orgview', component: _dashboard_orgview_orgview_component__WEBPACK_IMPORTED_MODULE_14__["OrgviewComponent"] }
                        ] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n    background-color: #262626;\r\n}\r\n.col{\r\n    color: green;\r\n    margin-left: -10px !important;\r\n    font-weight: bolder;\r\n}\r\n.btn {\r\n    background-color: #262626;\r\n    border: 2px solid white !important;\r\n    color: white;\r\n    outline: none !important;\r\n    padding: 5px 8px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n.navigation {\r\n    width: 100%;\r\n    background-color: black;\r\n  }\r\nimg {\r\n    width: 25px;\r\n    border-radius: 50px;\r\n    float: left;\r\n  }\r\n.logout {\r\n    font-size: .8em;\r\n    font-family: 'Oswald', sans-serif;\r\n      position: relative;\r\n    right: -18px;\r\n    bottom: -4px;\r\n    overflow: hidden;\r\n    letter-spacing: 3px;\r\n    opacity: 0;\r\n    transition: opacity .45s;\r\n    -webkit-transition: opacity .35s;\r\n    \r\n  }\r\n.button {\r\n      text-decoration: none;\r\n      float: right;\r\n    padding: 12px;\r\n    margin: 0px;\r\n    color: white;\r\n    width: 50px;\r\n    background-color: black;\r\n    transition: width .35s;\r\n    -webkit-transition: width .35s;\r\n    overflow: hidden\r\n  }\r\na.button:hover {\r\n    width: 150px;\r\n  }\r\na:hover .logout{\r\n    opacity: .9;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n.nav-link{\r\nmargin-top: 5px;\r\nmargin-right: 20px;\r\n}  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixpQ0FBaUM7TUFDL0Isa0JBQWtCO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGdDQUFnQzs7RUFFbEM7QUFFQTtNQUNJLHFCQUFxQjtNQUNyQixZQUFZO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCO0VBQ0Y7QUFFRDtJQUNHLFlBQVk7RUFDZDtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFFRjtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbn1cclxuLmNvbHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm5hdmlnYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAubG9nb3V0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC0xOHB4O1xyXG4gICAgYm90dG9tOiAtNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXM7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4zNXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgfVxyXG4gIFxyXG4gYS5idXR0b246aG92ZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyIC5sb2dvdXR7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4ubmF2LWxpbmt7XHJcbm1hcmdpbi10b3A6IDVweDtcclxubWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59ICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg back navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Block<span class=\"col\">Automate</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"navbar-brand\" href=\"#\"></a></li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/network\">Networks</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"findval()\">My Organization</a>\n        </li>\n      <li class=\"nav-item\">\n        <!-- <a routerLink=\"/signup\"><button class=\"btn\">Logout<i class=\"fa fa-sign-in ml-2\"></i></button></a> -->\n        <div class=\"navigation\">\n            <a class=\"button\" routerLink=\"/login\">\n              <img src=\"https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg\">\n            <div class=\"logout\">LOGOUT</div>\n            </a>\n          </div>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_dataService, route) {
        this._dataService = _dataService;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.findval = function () {
        var _this = this;
        this._dataService.getOrg().subscribe(function (res) {
            _this.orgdetail = res;
            console.log(_this.orgdetail);
            if (_this.orgdetail.length > 0) {
                _this.route.navigate(["dashboard/orgview"]);
            }
            else {
                _this.route.navigate(["dashboard/setup_myorg"]);
            }
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/network/network.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/network/network.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    color: green;\r\n}\r\n.btn-dark{\r\n    background-color: #262626 !important;\r\n}\r\n.modal {\r\n        position: fixed;\r\n        top: 100px;\r\n        left: 0;\r\n        z-index: 1050;\r\n        display: none;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n        outline: 0;\r\n}\r\nh3{\r\n    font-weight: bolder;\r\n}\r\n.disabled-link {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n}\r\na{\r\n      color: black;\r\n      text-decoration: underline;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25ldHdvcmsvbmV0d29yay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0M7UUFDTyxlQUFlO1FBQ2YsVUFBVTtRQUNWLE9BQU87UUFDUCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFHRTtNQUNJLFlBQVk7TUFDWiwwQkFBMEI7O0VBRTlCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25ldHdvcmsvbmV0d29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uYnRuLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5tb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmRpc2FibGVkLWxpbmsge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcblxyXG4gIGF7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/network/network.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/network/network.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <br>\n        <br>\n          <h3>My<span> Network</span></h3>\n    </div>\n    <div class=\"col-lg-5\">\n    </div>\n    <div class=\"col-lg-3 text-center\">\n        <br>\n        <br>\n        <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">Add<span> Network</span></h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"addNetwork(data.value)\">\n            <div class=\"modal-body mx-5\">\n              <div class=\"md-form mb-3 mt-3\">\n                <input type=\"text\"  class=\"form-control\" placeholder=\"Network Name\" name=\"netname\" #netname=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n              </div>\n              <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"Purpose Of Network\" name=\"type\" #type=\"ngModel\" ngModel>\n                  <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                </div>\n              <div class=\"md-form mb-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Number Of Orgnization\" name=\"norg\" #norg=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-pass\">Your password</label> -->\n              </div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n              <!-- <button class=\"btn btn-dark\">Submit</button> -->\n            <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n              <!-- <a class=\"btn btn-dark\" routerLink=\"/dashboard/peer\">Submit</a> -->\n            </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalLoginForm\">Add New</a>\n      </div>\n      </div>\n  </div>\n\n<br>\n<div class=\"container table-responsive\">\n<table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>S.No</th>\n        <th>Network Name</th>\n        <th>Purposr Of Network</th>\n        <th>No of Orgnization</th>\n        <th>Action</th>\n      </tr> \n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of detail\">\n        <td  class=\"hover\">{{data.id}}</td>\n        <td class=\"text-capitalize\"><a routerLink=\"/dashboard/networkview/{{data.id}}\"><b>{{data.netname}}</b></a></td>\n        <td class=\"text-capitalize\">{{data.type}}</td>\n        <td>{{data.norg}}</td>\n        <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"deleteNetworkData(data.id)\"><i class=\"material-icons text-success\">delete</i></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/network/network.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/network/network.component.ts ***!
  \********************************************************/
/*! exports provided: NetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkComponent", function() { return NetworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var NetworkComponent = /** @class */ (function () {
    function NetworkComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.data = {};
        this.base = {};
        this.isSubmittingForm = false;
    }
    NetworkComponent.prototype.ngOnInit = function () {
        this.getNetworkData();
    };
    NetworkComponent.prototype.getNetworkData = function () {
        var _this = this;
        this.dataService.getNet().subscribe(function (data5) {
            _this.detail = data5;
        });
    };
    NetworkComponent.prototype.addNetwork = function (value) {
        var _this = this;
        this.isSubmittingForm = true;
        //  console.log(value.peer);
        //  this.dataService.postnet(value);
        this.dataService.postnet(value).then(function (data1) {
            //  this.base=data1;
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.getNetworkData();
            _this.data = {};
            //  this.route.navigate(["/dashboard/peer"]);
        }).catch(function () {
            // Handle error here id anything wrong with the network
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.data = {};
        });
    };
    NetworkComponent.prototype.deleteNetworkData = function (value) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                _this.isSubmittingForm = true;
                _this.dataService.deletenet(value).subscribe(function (res) {
                    _this.isSubmittingForm = false;
                    _this.getNetworkData();
                });
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    // ViewNetworkData(value){
    //   this.dataService.getNet().subscribe(data5 => { 
    //     this.detail = data5
    //     console.log(this.detail)
    //     this.route.navigate(["/dashboard/networkview"])
    //   });
    //  }
    NetworkComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NetworkComponent.prototype, "closeBtn", void 0);
    NetworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! ./network.component.html */ "./src/app/dashboard/network/network.component.html"),
            styles: [__webpack_require__(/*! ./network.component.css */ "./src/app/dashboard/network/network.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NetworkComponent);
    return NetworkComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/networkview/networkview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/networkview/networkview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .back{\r\n    background-color: #262626;\r\n}\r\n.col{\r\n    color: green;\r\n    margin-left: -10px !important;\r\n    font-weight: bolder;\r\n}\r\ni{\r\n    font-size: 50px;\r\n}\r\nb{\r\n    font-size: 22px;\r\n}\r\n.card{\r\n    border: 2px solid #262626;\r\n    border-radius: 15px;\r\n}\r\nimg{\r\n    border-radius: 14px 14px 0 0;\r\n    border: 2px solid #262626;\r\n\r\n} */\r\n.features-5 .info {\r\n   text-align: center;\r\n   max-width: 310px;\r\n   min-height: 150px;\r\n}\r\n.info {\r\n   max-width: 360px;\r\n   margin: 0 auto;\r\n   padding: 50px 0 30px;\r\n}\r\n.features-5 .container [class*=\"col-\"]:last-child {\r\n   border-right: 0;\r\n}\r\n.features-5 .container .row:last-child [class*=\"col-\"]:nth-last-child(2) {\r\n   border-top: 1px solid rgba(255, 255, 255, 0.35);\r\n}\r\nspan{\r\n    color: green;\r\n}\r\ni{\r\n    font-size: 40px;\r\n    \r\n}\r\nspan{\r\n    color: green;\r\n}\r\n.btn-dark{\r\n    background-color: #262626 !important;\r\n}\r\n.modal {\r\n        position: fixed;\r\n        top: 100px;\r\n        left: 0;\r\n        z-index: 1050;\r\n        display: none;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n        outline: 0;\r\n}\r\nh3{\r\n    font-weight: bolder;\r\n}\r\n.disabled-link {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n}\r\na{\r\n      color: black;\r\n      text-decoration: underline;\r\n\r\n  }\r\n.font{\r\n    font-size:22px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25ldHdvcmt2aWV3L25ldHdvcmt2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFDSDtHQUNHLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsY0FBYztHQUNkLG9CQUFvQjtBQUN2QjtBQUNBO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csK0NBQStDO0FBQ2xEO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0M7UUFDTyxlQUFlO1FBQ2YsVUFBVTtRQUNWLE9BQU87UUFDUCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFFRTtNQUNJLFlBQVk7TUFDWiwwQkFBMEI7O0VBRTlCO0FBQ0E7SUFDRSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbmV0d29ya3ZpZXcvbmV0d29ya3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxufVxyXG4uY29se1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbml7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuYntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uY2FyZHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjI2MjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMTRweCAwIDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjYyNjI2O1xyXG5cclxufSAqL1xyXG4uZmVhdHVyZXMtNSAuaW5mbyB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWF4LXdpZHRoOiAzMTBweDtcclxuICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgcGFkZGluZzogNTBweCAwIDMwcHg7XHJcbn1cclxuLmZlYXR1cmVzLTUgLmNvbnRhaW5lciBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcbi5mZWF0dXJlcy01IC5jb250YWluZXIgLnJvdzpsYXN0LWNoaWxkIFtjbGFzcyo9XCJjb2wtXCJdOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5pe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgXHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uYnRuLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5tb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmRpc2FibGVkLWxpbmsge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbiAgYXtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgfVxyXG4gIC5mb250e1xyXG4gICAgZm9udC1zaXplOjIycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/networkview/networkview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/networkview/networkview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"features-5\">\n\n    \n\n    <div class=\"container\">\n      <!-- <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <h3 class=\"title\">About <span></span>Network:</span></h3>\n        </div>\n      </div> -->\n\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">view_carousel</i>\n                    </div>\n                    <h4 class=\"info-title\">Network<span> Name</span></h4>\n                    <p>{{result.Netname}}</p>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">format_paint</i>\n                    </div>\n                    <h4 class=\"info-title\">Purpose<span> Of Network</span></h4>\n                    <p>{{result.Type}}</p>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"info\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">dashboard</i>\n                    </div>\n                    <h4 class=\"info-title\">No<span> Of Organization</span></h4>\n                    <p>{{result.Norg}}</p>\n                </div>\n            </div>\n\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-lg-1\">\n            </div>\n            <div class=\"col-lg-8\">\n                <h3 class=\"title\"><span>Organization</span></h3>\n            </div>\n            <div class=\"col-lg-3\">\n              </div>\n            \n          </div>\n          <br>\n          <div class=\"row\">\n              <div class=\"col-lg-2\">\n              </div>\n              <div class=\"col-lg-8\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th>Organization Name</th>\n                          <th>No Of Peer</th>\n                          <th>No Of User</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let data of Bind\">\n                          <td>{{data.myorgname}}</td>\n                          <td>{{data.peer}}</td>\n                          <td>{{data.user}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n              </div>\n              <div class=\"col-lg-2\">\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-1\">\n                  </div>\n                  <div class=\"col-lg-8\">\n                      <h3 class=\"title\"><span>Other Organization</span></h3>\n                  </div>\n                  <div class=\"col-lg-3 text-center\">\n                      <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                      aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header text-center\">\n                            <h4 class=\"modal-title w-100 font-weight-bold\">Add Other<span> Organization</span></h4>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"AddOrg(data.value)\">\n                          <div class=\"modal-body mx-5\">\n                            <div class=\"md-form mb-3 mt-3\">\n                              <input type=\"text\"  class=\"form-control\" placeholder=\"Other Organization Name\" name=\"Aorgname\" #Aorgname=\"ngModel\" ngModel>\n                              <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                            </div>\n                            <div class=\"md-form mb-3 mt-3\">\n                                <input type=\"text\"  class=\"form-control\" placeholder=\"Number Of Peer\" name=\"Apeer\" #Apeer=\"ngModel\" ngModel>\n                                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                              </div>\n                            <div class=\"md-form mb-3\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Number Of User\" name=\"Auser\" #Auser=\"ngModel\" ngModel>\n                              <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-pass\">Your password</label> -->\n                            </div>\n                          </div>\n                          <div class=\"modal-footer d-flex justify-content-center\">\n                            <!-- <button class=\"btn btn-dark\">Submit</button> -->\n                          <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n                            <!-- <a class=\"btn btn-dark\" routerLink=\"/dashboard/peer\">Submit</a> -->\n                          </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"text-center\">\n                      <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalLoginForm\">Add New</a>\n                    </div>\n                    </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-2\">\n                </div>\n                <div class=\"col-lg-8\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                          <tr>\n                            <th>Organization Name</th>\n                            <th>No Of Peer</th>\n                            <th>No Of User</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let data of otherorg\">\n                            <td>{{data.Aorgname}}</td>\n                            <td>{{data.Apeer}}</td>\n                            <td>{{data.Auser}}</td>\n                            <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"delAorg(data.id)\"><i class=\"material-icons text-success font\">delete</i></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n                <div class=\"col-lg-2\">\n                </div>\n              </div>\n    </div>\n</div>\n\n  "

/***/ }),

/***/ "./src/app/dashboard/networkview/networkview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/networkview/networkview.component.ts ***!
  \****************************************************************/
/*! exports provided: NetworkviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkviewComponent", function() { return NetworkviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");






var NetworkviewComponent = /** @class */ (function () {
    function NetworkviewComponent(routing, dataService, route) {
        this.routing = routing;
        this.dataService = dataService;
        this.route = route;
        this.result = {
            Id: '',
            Netname: '',
            Type: '',
            Norg: ''
        };
        this.isSubmittingForm = false;
    }
    NetworkviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.dataService.getNet().subscribe(function (data5) {
            _this.bind = data5;
            console.log(_this.bind);
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    _this.result.Id = _this.bind[i].id;
                    _this.result.Netname = _this.bind[i].netname;
                    _this.result.Type = _this.bind[i].type;
                    _this.result.Norg = _this.bind[i].norg;
                }
            }
        });
        this.dataService.getOrg().subscribe(function (data5) {
            _this.Bind = data5;
            console.log(_this.Bind);
        });
        this.dataService.getAOrg().subscribe(function (data6) {
            _this.otherorg = data6;
            console.log(_this.otherorg);
        });
    };
    NetworkviewComponent.prototype.AddOrg = function (value) {
        var _this = this;
        this.isSubmittingForm = true;
        this.dataService.postAorg(value).then(function (data1) {
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.ngOnInit();
            _this.data = {};
        }).catch(function () {
            // Handle error here id anything wrong with the network
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.data = {};
        });
    };
    NetworkviewComponent.prototype.delAorg = function (value) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                _this.isSubmittingForm = true;
                _this.dataService.deleteAorg(value).subscribe(function (res) {
                    _this.isSubmittingForm = false;
                    _this.ngOnInit();
                });
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    NetworkviewComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NetworkviewComponent.prototype, "closeBtn", void 0);
    NetworkviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-networkview',
            template: __webpack_require__(/*! ./networkview.component.html */ "./src/app/dashboard/networkview/networkview.component.html"),
            styles: [__webpack_require__(/*! ./networkview.component.css */ "./src/app/dashboard/networkview/networkview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NetworkviewComponent);
    return NetworkviewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/orgview/orgview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/orgview/orgview.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n    background-color: #262626;\r\n}\r\n.col{\r\n    color: green;\r\n    margin-left: -10px !important;\r\n    font-weight: bolder;\r\n}\r\ni{\r\n    font-size: 50px;\r\n}\r\n.modal {\r\n    position: fixed;\r\n    top: 100px;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    outline: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL29yZ3ZpZXcvb3Jndmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvb3Jndmlldy9vcmd2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbn1cclxuLmNvbHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5pe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwNTA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/orgview/orgview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/orgview/orgview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-4\">\n          <br>\n          <br>\n            <h3>My<span class=\"col\">Organization :</span></h3>\n      </div>\n      <div class=\"col-lg-5\">\n      </div>\n    <div class=\"col-lg-3 text-center\">\n        <br>\n        <br>\n        <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">Edit<span class=\"col\"> Organization</span></h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"update(data.value)\">\n            <div class=\"modal-body mx-5\" *ngFor=\"let data of bind\"> \n                    <div class=\"md-form mb-3 mt-3\">\n                      <input type=\"text\"  class=\"form-control validate\" placeholder=\"Organization Name\" name=\"myorgname\" [(ngModel)]='data.myorgname' >\n                      <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                    </div>\n                    <div class=\"md-form mb-3 mt-3\">\n                        <input type=\"text\"  class=\"form-control validate\" placeholder=\"Number Of Peer\" name=\"peer\" [(ngModel)]='data.peer'>\n                        <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                      </div>\n                    <div class=\"md-form mb-3\">\n                      <input type=\"text\" class=\"form-control validate\" placeholder=\"Number Of User\" name=\"user\" [(ngModel)]='data.user'>\n                      <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-pass\">Your password</label> -->\n                    </div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n              <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n            </div>\n          </form>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"text-center\">\n        <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalLoginForm\">Edit Org</a>\n      </div>\n  \n      </div>\n\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n    </div>\n    <div class=\"col-lg-8\">\n        <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Organization Name</th>\n                <th>No Of Peer</th>\n                <th>No Of User</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let detail of bind\">\n                <td>{{detail.myorgname}}</td>\n                <td>{{detail.peer}}</td>\n                <td>{{detail.user}}</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    <div class=\"col-lg-2\">\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/orgview/orgview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/orgview/orgview.component.ts ***!
  \********************************************************/
/*! exports provided: OrgviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgviewComponent", function() { return OrgviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");





var OrgviewComponent = /** @class */ (function () {
    function OrgviewComponent(routing, dataService, route) {
        this.routing = routing;
        this.dataService = dataService;
        this.route = route;
    }
    OrgviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.id=this.routing.snapshot.params['id'];
        // console.log(this.id)
        this.dataService.getOrg().subscribe(function (data5) {
            _this.bind = data5;
            console.log(_this.bind);
        });
    };
    OrgviewComponent.prototype.update = function (value) {
        var _this = this;
        this.dataService.updated(value).subscribe(function (res) {
            _this.edit = res;
        });
        this.closemodal();
    };
    OrgviewComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OrgviewComponent.prototype, "closeBtn", void 0);
    OrgviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orgview',
            template: __webpack_require__(/*! ./orgview.component.html */ "./src/app/dashboard/orgview/orgview.component.html"),
            styles: [__webpack_require__(/*! ./orgview.component.css */ "./src/app/dashboard/orgview/orgview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrgviewComponent);
    return OrgviewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/setup-org/setup-org.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/setup-org/setup-org.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n  color: green;\r\n}\r\n.btn-dark{\r\n  background-color: #262626 !important;\r\n}\r\n.modal {\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  outline: 0;\r\n}\r\nh3{\r\nfont-weight: bolder;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NldHVwLW9yZy9zZXR1cC1vcmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3NldHVwLW9yZy9zZXR1cC1vcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5idG4tZGFya3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcbmgze1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/setup-org/setup-org.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/setup-org/setup-org.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-4\">\n          <br>\n          <br>\n            <h3>My<span> Organization :</span></h3>\n      </div>\n      <div class=\"col-lg-5\">\n      </div>\n    <div class=\"col-lg-3 text-center\">\n        <br>\n        <br>\n        <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">Setup<span> Organization</span></h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"setup(data.value)\">\n            <div class=\"modal-body mx-5\"> \n              <div class=\"md-form mb-3 mt-3\">\n                <input type=\"text\"  class=\"form-control validate\" placeholder=\"Organization Name\" name=\"myorgname\" #myorgname=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n              </div>\n              <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control validate\" placeholder=\"Number Of Peer\" name=\"peer\" #peer=\"ngModel\" ngModel>\n                  <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                </div>\n              <div class=\"md-form mb-3\">\n                <input type=\"text\" class=\"form-control validate\" placeholder=\"Number Of User\" name=\"user\" #user=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-pass\">Your password</label> -->\n              </div>\n      \n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n              <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n            </div>\n          </form>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"text-center\">\n        <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalLoginForm\">Add Org</a>\n      </div>\n  \n      </div>\n\n  </div>\n  <br>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/setup-org/setup-org.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/setup-org/setup-org.component.ts ***!
  \************************************************************/
/*! exports provided: SetupOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupOrgComponent", function() { return SetupOrgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var SetupOrgComponent = /** @class */ (function () {
    function SetupOrgComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.isSubmittingForm = false;
    }
    SetupOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getOrg()
            .subscribe(function (data6) { _this.orgdetail = data6; });
    };
    SetupOrgComponent.prototype.setup = function (value) {
        var _this = this;
        this.isSubmittingForm = true;
        this.dataService.postorg(value).then(function (data1) {
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.ngOnInit();
            _this.route.navigate(["dashboard/orgview"]);
            _this.detail = {};
        }).catch(function () {
            // Handle error here id anything wrong with the network
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.detail = {};
        });
        // this.dataService.postorg(value).then((data6)=>{this.db=data6;});
    };
    SetupOrgComponent.prototype.delorg = function (value) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                _this.isSubmittingForm = true;
                _this.dataService.deleteorg(value).subscribe(function (res) {
                    _this.isSubmittingForm = false;
                    _this.ngOnInit();
                });
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    SetupOrgComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SetupOrgComponent.prototype, "closeBtn", void 0);
    SetupOrgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup-org',
            template: __webpack_require__(/*! ./setup-org.component.html */ "./src/app/dashboard/setup-org/setup-org.component.html"),
            styles: [__webpack_require__(/*! ./setup-org.component.css */ "./src/app/dashboard/setup-org/setup-org.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SetupOrgComponent);
    return SetupOrgComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataService = /** @class */ (function () {
    function DataService(_httpClient) {
        this._httpClient = _httpClient;
    }
    DataService.prototype.postData = function (value) {
        return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails", value).toPromise()
            .then(function (data) {
            Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(data);
        });
    };
    DataService.prototype.getData = function () {
        var _this = this;
        return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/organizationdetails")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // console.log('res --------------------------', res)
            _this.data1 = res;
            return _this.data1;
        }));
    };
    DataService.prototype.postorg = function (value) {
        return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup", value).toPromise()
            .then(function (data2) { return data2; /* NOTE: use 'return data2' if  u r using multiline */ });
    };
    DataService.prototype.postnet = function (value) {
        return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network", value).toPromise()
            .then(function (data3) { return data3; /* NOTE: use 'return data3' if  u r using multiline */ });
    };
    DataService.prototype.getNet = function () {
        var _this = this;
        return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/network")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.data5 = res;
            return _this.data5;
            console.log(_this.data5);
        }));
    };
    DataService.prototype.getOrg = function () {
        var _this = this;
        return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.data6 = res;
            return _this.data6;
        }));
    };
    DataService.prototype.deleteorg = function (value) {
        var _this = this;
        return this._httpClient.delete("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup/" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.mydata = res;
            return _this.mydata;
        }));
    };
    DataService.prototype.deletenet = function (value) {
        var _this = this;
        return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/network/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.deldata = res;
            return _this.deldata;
        }));
    };
    DataService.prototype.updated = function (value) {
        var _this = this;
        return this._httpClient.put("https://5cc150a90e53350014908c16.mockapi.io/api/v1/myorg_setup/1", value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editdata = res;
            return _this.editdata;
        }));
    };
    DataService.prototype.postAorg = function (value) {
        return this._httpClient.post("https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization", value).toPromise()
            .then(function (data8) { return data8; /* NOTE: use 'return data2' if  u r using multiline */ });
    };
    DataService.prototype.getAOrg = function () {
        var _this = this;
        return this._httpClient.get("https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.data8 = res;
            return _this.data8;
        }));
    };
    DataService.prototype.deleteAorg = function (value) {
        var _this = this;
        return this._httpClient.delete('https://5cc150a90e53350014908c16.mockapi.io/api/v1/otherorganization/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.del = res;
            return _this.del;
        }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n    background-color: #262626;\r\n}\r\n.col{\r\n    color: green;\r\n    margin-left: -10px !important;\r\n    font-weight: bolder;\r\n}\r\n.btn {\r\n    background-color: #262626;\r\n    border: 2px solid white !important;\r\n    color: white;\r\n    outline: none !important;\r\n    padding: 5px 8px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n.form-signin\r\n  {\r\n      max-width: 330px;\r\n      padding: 15px;\r\n      margin: 0 auto;\r\n  }\r\n.form-signin .form-signin-heading, .form-signin .checkbox\r\n  {\r\n      margin-bottom: 10px;\r\n  }\r\n.form-signin .checkbox\r\n  {\r\n      font-weight: normal;\r\n  }\r\n.form-signin .form-control\r\n  {\r\n      position: relative;\r\n      font-size: 16px;\r\n      height: auto;\r\n      padding: 10px;\r\n      box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus\r\n  {\r\n      z-index: 2;\r\n  }\r\n.form-signin input[type=\"text\"]\r\n  {\r\n      margin-bottom: -1px;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n  }\r\n.form-signin input[type=\"password\"]\r\n  {\r\n      margin-bottom: 10px;\r\n      border-top-left-radius: 0;\r\n      border-top-right-radius: 0;\r\n  }\r\n.account-wall\r\n  {\r\n      margin-top: 20px;\r\n      padding: 40px 0px 30px 0px;\r\n      background-color: #f7f7f7;\r\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.login-title\r\n  {\r\n      color: #555;\r\n      font-size: 18px;\r\n      font-weight: 400;\r\n      display: block;\r\n  }\r\n.profile-img\r\n  {\r\n      width: 96px;\r\n      height: 96px;\r\n      margin: 0 auto 10px;\r\n      display: block;\r\n      border-radius: 50%;\r\n  }\r\n.need-help\r\n  {\r\n      margin-top: 10px;\r\n  }\r\n.new-account\r\n  {\r\n      display: block;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDQTs7TUFFSSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGNBQWM7RUFDbEI7QUFDQTs7TUFFSSxtQkFBbUI7RUFDdkI7QUFDQTs7TUFFSSxtQkFBbUI7RUFDdkI7QUFDQTs7TUFFSSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFlBQVk7TUFDWixhQUFhO01BR2Isc0JBQXNCO0VBQzFCO0FBQ0E7O01BRUksVUFBVTtFQUNkO0FBQ0E7O01BRUksbUJBQW1CO01BQ25CLDRCQUE0QjtNQUM1Qiw2QkFBNkI7RUFDakM7QUFDQTs7TUFFSSxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLDBCQUEwQjtFQUM5QjtBQUNBOztNQUVJLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIseUJBQXlCO01BR3pCLDBDQUEwQztFQUM5QztBQUNBOztNQUVJLFdBQVc7TUFDWCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7RUFDbEI7QUFDQTs7TUFFSSxXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixjQUFjO01BR2Qsa0JBQWtCO0VBQ3RCO0FBQ0E7O01BRUksZ0JBQWdCO0VBQ3BCO0FBQ0E7O01BRUksY0FBYztNQUNkLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbn1cclxuLmNvbHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluXHJcbiAge1xyXG4gICAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbiAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbiAge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbFxyXG4gIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzXHJcbiAge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl1cclxuICB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXHJcbiAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiAgLmFjY291bnQtd2FsbFxyXG4gIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZzogNDBweCAwcHggMzBweCAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICAubG9naW4tdGl0bGVcclxuICB7XHJcbiAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucHJvZmlsZS1pbWdcclxuICB7XHJcbiAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLm5lZWQtaGVscFxyXG4gIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLm5ldy1hY2NvdW50XHJcbiAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg back navbar-dark\">\n<div class=\"container\">\n  <a class=\"navbar-brand\" href=\"#\">Block<span class=\"col\">Automate</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"navbar-brand\" href=\"#\"></a></li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li> -->\n      <li class=\"nav-item\">\n        <a routerLink=\"/signup\"><button class=\"btn\">Sign up<i class=\"fa fa-sign-in ml-2\"></i></button></a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n<div class=\"container\">\n    <br>\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <br>\n      <br>\n      <img class=\"img-fluid\" src=\"/assets/img/connect.jpg\" width=\"100%\" height=\"430px\">\n    </div>\n    <div class=\"col-sm-4\">\n      <br>\n      <div class=\"account-wall\">\n      <h4 class=\"text-center\">Block<span class=\"col\">Automate</span></h4>\n        <img class=\"profile-img\"\n          src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\n          alt=\"\">\n      <h4 class=\"text-center\"><span class=\"col\">Login</span></h4>\n        <form class=\"form-signin\" name=\"logindata\" #logindata=\"ngForm\" (ngSubmit)=\"logfun(logindata.value)\">\n          <input class=\"form-control\" placeholder=\"Email\" required autofocus  type=\"email\" name=\"email\" #email=\"ngModel\" ngModel>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required autofocus name=\"password\" #password=\"ngModel\" ngModel>\n          <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" >Sign in</button>\n        </form>\n      </div>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_dataService, _routing) {
        this._dataService = _dataService;
        this._routing = _routing;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._dataService.getData()
        //   .subscribe(data1 => { this.detail = data1 });
        //   console.log(this.detail)
        this._dataService.getData().subscribe(function (data1) {
            _this.detail = data1;
            console.log(_this.detail);
        });
    };
    LoginComponent.prototype.logfun = function (value) {
        // this.logindata=value;
        for (var i = 0; i < this.detail.length; i++) {
            if (value.email !== this.detail[i].email) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: 'incorrect...',
                    text: 'Email incorrect!',
                });
            }
            else if (value.password !== this.detail[i].password) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: 'incorrect...',
                    text: 'Password incorrect!',
                });
            }
            else {
                this._routing.navigate(['/dashboard/network']);
                break;
            }
            //   if(value.email==this.detail[i].email){
            //     if(value.password==this.detail[i].password){
            //       this._routing.navigate(['/dashboard/network']);
            //     }else{
            //       Swal.fire({
            //             type: 'error',
            //             title: 'incorrect...',
            //             text: 'Password incorrect!',
            //           });
            //     }
            //   }else{
            //     Swal.fire({
            //           type: 'error',
            //           title: 'incorrect...',
            //           text: 'Email incorrect!',
            //         });
            //   }
            // if (!this.detail) {
            //   Swal.fire({
            //               type: 'error',
            //               title: 'incorrect...',
            //               text: 'Email incorrect!',
            //             });
            // } else if(this.detail){
            //   if(value.password !== this.detail[i].password){
            //     Swal.fire({
            //                   type: 'error',
            //                   title: 'incorrect...',
            //                   text: 'Password incorrect!',
            //                 });
            //   } else{
            //     this._routing.navigate(['/dashboard/network']);
            //     break;
            //   }
            // }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n    background-color: #262626;\r\n}\r\n.col{\r\n    color: green;\r\n    margin-left: -10px !important;\r\n    font-weight: bolder;\r\n}\r\n.btn {\r\n    background-color: #262626;\r\n    border: 2px solid white !important;\r\n    color: white;\r\n    outline: none !important;\r\n    padding: 5px 8px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n.account-wall\r\n  {\r\n      margin-top: 20px;\r\n      padding: 40px 0px 20px 0px;\r\n      background-color: #f7f7f7;\r\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.form-signin\r\n  {\r\n      max-width: 330px;\r\n      padding: 15px;\r\n      margin: 0 auto;\r\n  }\r\n.form-signin .form-signin-heading, .form-signin .checkbox\r\n  {\r\n      margin-bottom: 10px;\r\n  }\r\n.form-signin .checkbox\r\n  {\r\n      font-weight: normal;\r\n  }\r\n.form-signin .form-control\r\n  {\r\n      position: relative;\r\n      font-size: 16px;\r\n      height: auto;\r\n      padding: 10px;\r\n      box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus\r\n  {\r\n      z-index: 2;\r\n  }\r\n.form-signin input[type=\"text\"]\r\n  {\r\n      margin-bottom: -1px;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n  }\r\n.form-signin input[name=\"cpassword\"]\r\n  {\r\n      margin-bottom: 10px;\r\n      border-top-left-radius: 0;\r\n      border-top-right-radius: 0;\r\n  }\r\n.login-title\r\n  {\r\n      color: #555;\r\n      font-size: 18px;\r\n      font-weight: 400;\r\n      display: block;\r\n  }\r\n.profile-img\r\n  {\r\n      width: 96px;\r\n      height: 96px;\r\n      margin: 0 auto 10px;\r\n      display: block;\r\n      border-radius: 50%;\r\n  }\r\n.need-help\r\n  {\r\n      margin-top: 10px;\r\n  }\r\n.new-account\r\n  {\r\n      display: block;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtBQUNBOztNQUVJLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIseUJBQXlCO01BR3pCLDBDQUEwQztFQUM5QztBQUNBOztNQUVJLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsY0FBYztFQUNsQjtBQUNBOztNQUVJLG1CQUFtQjtFQUN2QjtBQUNBOztNQUVJLG1CQUFtQjtFQUN2QjtBQUNBOztNQUVJLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsWUFBWTtNQUNaLGFBQWE7TUFHYixzQkFBc0I7RUFDMUI7QUFDQTs7TUFFSSxVQUFVO0VBQ2Q7QUFDQTs7TUFFSSxtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLDZCQUE2QjtFQUNqQztBQUNBOztNQUVJLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsMEJBQTBCO0VBQzlCO0FBQ0E7O01BRUksV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztFQUNsQjtBQUNBOztNQUVJLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGNBQWM7TUFHZCxrQkFBa0I7RUFDdEI7QUFDQTs7TUFFSSxnQkFBZ0I7RUFDcEI7QUFDQTs7TUFFSSxjQUFjO01BQ2QsZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG59XHJcbi5jb2x7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hY2NvdW50LXdhbGxcclxuICB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluXHJcbiAge1xyXG4gICAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLCAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbiAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmNoZWNrYm94XHJcbiAge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbFxyXG4gIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzXHJcbiAge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInRleHRcIl1cclxuICB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbbmFtZT1cImNwYXNzd29yZFwiXVxyXG4gIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5sb2dpbi10aXRsZVxyXG4gIHtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWltZ1xyXG4gIHtcclxuICAgICAgd2lkdGg6IDk2cHg7XHJcbiAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAubmVlZC1oZWxwXHJcbiAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAubmV3LWFjY291bnRcclxuICB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg back navbar-dark\">\n<div class=\"container\">\n  <a class=\"navbar-brand\" href=\"#\">Block<span class=\"col\">Automate</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"navbar-brand\" href=\"#\"></a></li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/login\"><button class=\"btn\">Sign in<i class=\"fa fa-sign-in ml-2\"></i></button></a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <br>\n      <br>\n      <br>\n        <img class=\"img-fluid\" src=\"/assets/img/connect.jpg\" width=\"100%\" height=\"470px\">\n  \n    </div>\n    <div class=\"col-sm-4\">\n      <br>\n      <div class=\"account-wall\">\n\n        <img class=\"profile-img\"\n          src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\n          alt=\"\">\n        <h4 class=\"text-center\"><span class=\"col\">Create Account</span></h4>\n        <form class=\"form-signin\" name=\"data\" #data=\"ngForm\" (ngSubmit)=\"fun(data.value)\">\n          <br>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required autofocus name=\"fname\" #fname=\"ngModel\" ngModel>\n          <input class=\"form-control\" placeholder=\"Email\" required autofocus  type=\"email\" name=\"email\" #email=\"ngModel\" ngModel>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required autofocus name=\"password\" #password=\"ngModel\" ngModel>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" required name=\"cpassword\" #cpassword=\"ngModel\" ngModel>\n          <!-- <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" required name=\"cpassword\" #cpassword=\"ngModel\" ngModel> -->\n          <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" > Submit</button>\n        </form> \n      </div>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_dataService, routing) {
        this._dataService = _dataService;
        this.routing = routing;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.fun = function (value) {
        var _this = this;
        this._dataService.postData(value).then(function (data) { _this.db = data; });
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'success',
            title: 'Signup successfully....',
            text: 'Please click signin button to Login...',
        });
        this.routing.navigate(['/login']);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\techy\Desktop\Blockautomated\blockautomated\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map