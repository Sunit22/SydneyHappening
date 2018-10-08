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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 34em) {\r\n    .conatinerMargin {\r\n        margin-top:20%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n\r\n@media (min-width: 48em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n\r\n@media (min-width: 62em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n\r\n@media (min-width: 75em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class= \"container conatinerMargin\">\n    <p>\n        Mayur Patil - 12868055\n      </p>\n      \n      \n      <p>\n        Sunit Singh- 12845994\n      </p>\n      \n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--This page would be used as an outlet to display content dynamically\r\n    we would be using routing feature of angular to display content, \r\n    please check app.module.ts to view routing information-->\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n    <ngx-toasta [position]=\"'top-center'\"></ngx-toasta>\r\n    <app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SydneyHappening';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services//authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_registeration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/registeration.service */ "./src/app/services/registeration.service.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./event-create/event-create.component */ "./src/app/event-create/event-create.component.ts");
/* harmony import */ var _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event-edit/event-edit.component */ "./src/app/event-edit/event-edit.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_18__["EventsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_22__["EventCreateComponent"],
                _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_23__["EventEditComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__["AboutUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlNativeDateTimeModule"],
                ngx_toasta__WEBPACK_IMPORTED_MODULE_8__["ToastaModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
                    },
                    { path: 'dashboard',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    },
                    { path: 'events',
                        component: _events_events_component__WEBPACK_IMPORTED_MODULE_18__["EventsComponent"],
                        data: { title: 'Event-Details' },
                        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    },
                    { path: 'registration',
                        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"]
                    },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"] },
                    { path: 'eventCreate',
                        component: _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_22__["EventCreateComponent"],
                        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    },
                    { path: 'eventEdit',
                        component: _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_23__["EventEditComponent"],
                        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    },
                    { path: 'about',
                        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__["AboutUsComponent"]
                    }
                ])
            ],
            providers: [_services_event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"], _services_registeration_service__WEBPACK_IMPORTED_MODULE_12__["RegisterationService"], _services_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\r\n}\r\n.contact-form{\r\n    background: #E8E4E4;;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}\r\n.contact-form .form-control{\r\n    border-radius:1rem;\r\n}\r\n.contact-image{\r\n    text-align: center;\r\n}\r\n.contact-image img{\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    -webkit-transform: rotate(29deg);\r\n            transform: rotate(29deg);\r\n}\r\n.contact-form form{\r\n    padding: 14%;\r\n}\r\n.contact-form form .row{\r\n    margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n    margin-bottom: 8%;\r\n    margin-top: -10%;\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n    width: 50%;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #dc3545;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\r\n  <div class=\"contact-image\">\r\n      <img src=\"https://image.ibb.co/kUagtU/rocket_contact.png\" alt=\"rocket_contact\"/>\r\n  </div>\r\n  <form [formGroup]=\"sendMessage\">\r\n      <h3>Drop Us a Message</h3>\r\n     <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"txtName\" class=\"form-control\" placeholder=\"Your Name *\" \r\n                  formControlName = \"name\" value=\"\" maxlength=\"30\"/>  \r\n              </div>\r\n                    <p *ngIf = \"isValid('name')\" class=\"text-danger align-middle\">Name is required</p>\r\n              <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"txtEmail\" class=\"form-control\" placeholder=\"Your Email *\" \r\n                  formControlName = \"email\" value=\"\" maxlength=\"30\" required/>\r\n              </div>\r\n                <p *ngIf = \"isValid('email')\" class=\"text-danger align-middle\">Email is required</p>\r\n              <div class=\"form-group\">\r\n                  <input type=\"number\" name=\"txtPhone\" class=\"form-control\" placeholder=\"Your Phone Number *\" \r\n                  formControlName = \"phone\" value=\"\" minlength=\"10\" maxlength=\"10\"/> \r\n              </div>\r\n              <p *ngIf = \"isValid('phone')\" class=\"text-danger align-middle\">Contact number is required</p>\r\n              <div class=\"form-group\">\r\n                  <input type=\"submit\" (click) = \"sendEmail()\" name=\"btnSubmit\" [disabled]=\"sendMessage.invalid || isBusy\" class=\"btnContact\" value=\"Send Message\" />\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <textarea name=\"txtMsg\" class=\"form-control\" placeholder=\"Your Message *\" \r\n                  formControlName = \"message\" style=\"width: 100%; height: 150px;\" maxlength=\"200\"></textarea>                 \r\n              </div>\r\n              <p *ngIf = \"isValid('message')\" class=\"text-danger align-middle\">Message is required</p>\r\n          </div>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(emailService, showMessage) {
        this.emailService = emailService;
        this.showMessage = showMessage;
        this.isBusy = false;
        this.sendMessage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.isValid = function (controlName) {
        return this.sendMessage.get(controlName).invalid && this.sendMessage.get(controlName).touched;
    };
    ContactComponent.prototype.sendEmail = function () {
        var _this = this;
        this.isBusy = true;
        if (this.sendMessage.valid) {
            this.emailService.sendEmail(this.sendMessage.value).subscribe(function (response) {
                _this.showMessage.showSuccess("Your message has been sent to the admins.");
            }, function (err) {
                _this.showMessage.showError("An error occured, please send messag again");
            });
            this.isBusy = false;
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deleteButton{\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n.editButton{\r\n    margin-left:35px;\r\n    cursor: pointer;\r\n}\r\n@media (min-width: 34em) {\r\n    .card-columns {\r\n        -webkit-column-count: 2;\r\n        column-count: 2;\r\n    }\r\n}\r\n@media (min-width: 48em) {\r\n    .card-columns {\r\n        -webkit-column-count: 3;\r\n        column-count: 3;\r\n    }\r\n}\r\n@media (min-width: 62em) {\r\n    .card-columns {\r\n        -webkit-column-count: 4;\r\n        column-count: 4;\r\n    }\r\n}\r\n@media (min-width: 75em) {\r\n    .card-columns {\r\n        -webkit-column-count: 5;\r\n        column-count: 5;\r\n    }\r\n}\r\n@media (min-width: 34em) {\r\n    .conatinerMargin {\r\n        margin-top:20%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n@media (min-width: 48em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n@media (min-width: 62em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}\r\n@media (min-width: 75em) {\r\n    .conatinerMargin {\r\n        margin-top:5%;\r\n        margin-bottom: 7%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container conatinerMargin\">\r\n      <a href=\"#\" class=\"btn btn-sm btn-success pull-right\" routerLink=\"/eventCreate\">Add New Event</a>\r\n      <h2>My Dashboard</h2>\r\n      <h4>Welcome {{user}}</h4>    \r\n      <div class=\"card-columns\">\r\n        <div class=\"card\" *ngFor=\"let event of eventList\">\r\n          <img class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"//placeimg.com/250/250/arch\" style=\"width: 205px; height: 200px;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{event.EventName}}</h5>\r\n            <div class=\"btn-group\"> \r\n              <!--More Details-->       \r\n              <a class=\"btn btn-outline-primary btn-sm\" routerLink=\"/events\" (click)=\"eventDetails(event._id)\" role=\"button\" href=\"#\">More Details</a><br/>           \r\n              <!--Edit Event-->\r\n              <a *ngIf = \"IsAdmin\" class =\"editButton\" title=\"Edit\" role=\"button\" (click)=\"updateEvent(event._id)\"><span class=\"fa fa-pencil\" aria-hidden=\"true\"></span></a>   \r\n              <!--Delete Event-->\r\n              <a *ngIf = \"IsAdmin\" class=\"deleteButton\" title=\"Delete\" role=\"button\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click) =\"selectForDeletion(event._id)\"><span class=\"fa fa-trash\" aria-hidden=\"true\"></span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> \r\n      \r\n      \r\n      <h4>Registered Events</h4>    \r\n      <div class=\"card-columns\" *ngIf=\"showEvents\">\r\n        <div class=\"card\" *ngFor=\"let event of registeredList\">\r\n          <img class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"//placeimg.com/250/250/arch\" style=\"width: 205px; height: 200px;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{event.EventName}}</h5>\r\n            <div class=\"btn-group\"> \r\n              <!--More Details-->       \r\n              <a class=\"btn btn-outline-primary btn-sm\" routerLink=\"/events\" (click)=\"eventDetails(event._id)\" role=\"button\" href=\"#\">More Details</a><br/>           \r\n              <!--Edit Event-->\r\n              <a *ngIf = \"IsAdmin\" class =\"editButton\" title=\"Edit\" role=\"button\" (click)=\"updateEvent(event._id)\"><span class=\"fa fa-pencil\" aria-hidden=\"true\"></span></a>   \r\n              <!--Delete Event-->\r\n              <a *ngIf = \"IsAdmin\" class=\"deleteButton\" title=\"Delete\" role=\"button\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click) =\"selectForDeletion(event._id)\"><span class=\"fa fa-trash\" aria-hidden=\"true\"></span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p *ngIf=\"showEvents == false\">You are not registered for any event</p> \r\n\r\n  </div>\r\n\r\n<!--Delete Modal PopUp-->\r\n<div class=\"modal\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Delete Event</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this event?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteEvent()\">Delete</button>\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>\r\n<!--Delete Modal PopUp ends-->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(eventService, router, showMessage) {
        this.eventService = eventService;
        this.router = router;
        this.showMessage = showMessage;
        this.showEvents = false;
        this.userData = {
            userID: '',
            firstName: ''
        };
        this.user = '';
        this.IsAdmin = localStorage.getItem('IsAdmin').toLowerCase() == 'true' ? true : false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('firstName');
        this.getAllEvents();
        this.getUserEvents();
    };
    DashboardComponent.prototype.getAllEvents = function () {
        var _this = this;
        //Retreives events from the API    
        this.eventService.getEvents().subscribe(function (events) {
            _this.eventList = events;
        });
    };
    //get events registered to by user
    DashboardComponent.prototype.getUserEvents = function () {
        var _this = this;
        this.userData.firstName = localStorage.getItem('firstName');
        this.userData.userID = localStorage.getItem('userID');
        this.eventService.getUserEvents(this.userData).subscribe(function (events) {
            if (events) {
                _this.registeredList = events;
                _this.showEvents = true;
            }
            else {
                _this.showEvents = false;
            }
        });
    };
    //Gets Event by ID
    DashboardComponent.prototype.eventDetails = function (eventID) {
        var navigationExtras = {
            queryParams: {
                "eventID": eventID
            }
        };
        this.router.navigate(['/events'], navigationExtras);
    };
    //Update Event by Event ID
    DashboardComponent.prototype.updateEvent = function (eventID) {
        var navigationExtras = {
            queryParams: {
                "eventID": eventID
            }
        };
        this.router.navigate(['/eventEdit'], navigationExtras);
    };
    DashboardComponent.prototype.selectForDeletion = function (eventID) {
        localStorage.setItem("eventID", eventID);
    };
    //Deletes Event by ID
    DashboardComponent.prototype.deleteEvent = function () {
        var _this = this;
        var _id = localStorage.getItem("eventID");
        this.eventService.deleteEvent(_id).subscribe(function (data) {
            var message = data;
            if (message == 'success') {
                localStorage.removeItem("eventID");
                _this.showMessage.showSuccess("Event deleted successfully");
                _this.getAllEvents();
            }
            else {
                _this.showMessage.showError("Event you trying to delete does not exist");
            }
        }, function (err) {
            _this.showMessage.showError(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/event-create/event-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-create/event-create.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eventFormPosition{\r\n    margin-top:5%;\r\n    margin-bottom: 7%;\r\n}"

/***/ }),

/***/ "./src/app/event-create/event-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-create/event-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container eventFormPosition\">\n  <form class=\"form-horizontal\" role=\"form\" #eventData = \"ngForm\" (ngSubmit)= \"addEvent(eventData)\">\n      <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n              <h3 class=\"alignHeader\">Add New Event</h3>\n              <hr>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"eventName\">Event Name</label>\n                  <input type=\"text\" name=\"eventName\" class=\"form-control\" id=\"eventName\" maxlength=\"20\" #name=\"ngModel\" ngModel required autofocus>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-control-feedback\">\n                <span *ngIf = \"name.invalid && name.touched\" class=\"text-danger align-middle\">\n                    <i class=\"fa fa-close\"></i> Event Name is required. \n                </span>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label class=\"col-form-label\" for=\"eventVenue\">Event Venue</label>\n                <input type=\"text\" name=\"eventVenue\" class=\"form-control\" id=\"eventVenue\" maxlength=\"50\" #venue=\"ngModel\" ngModel required>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"form-control-feedback\">\n                <span *ngIf = \"venue.invalid && venue.touched\" class=\"text-danger align-middle\">\n                    <i class=\"fa fa-close\"></i> Event Venue is required. \n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label class=\"col-form-label\" for=\"eventDate\">Event Date</label>\n              <span [owlDateTimeTrigger]=\"dt1\"><input [owlDateTime]=\"dt1\" name=\"eventDate\" maxlength=\"10\" class=\"form-control\" #date=\"ngModel\" ngModel required></span>              \n              <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>              \n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n            <span *ngIf = \"date.invalid && date.touched\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Event Date is required. \n            </span>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"eventTime\">Event Time</label>\n            <span [owlDateTimeTrigger]=\"dt2\"><input [owlDateTime]=\"dt2\" name=\"eventTime\" maxlength=\"6\" class=\"form-control\" #time=\"ngModel\" ngModel required></span>              \n            <owl-date-time [pickerType]=\"'timer'\" #dt2></owl-date-time>              \n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n            <span *ngIf = \"time.invalid && time.touched\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Event Time is required. \n            </span>\n        </div>\n    </div>\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"availableSeats\">Seats</label>\n            <input type=\"number\" name=\"availableSeats\" class=\"form-control\" min=\"1\" id=\"availableSeats\" max=\"1000\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" maxlength=\"4\" #seats=\"ngModel\" ngModel required>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n            <span *ngIf = \"seats.invalid && seats.touched\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Available Seats is required. \n            </span>\n        </div>\n    </div>\n</div>     \n      <div class=\"row\" style=\"padding-top: 1rem\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n              <button type=\"submit\" class=\"btn btn-lg btn-block btn-success\" [disabled]=\"eventData.invalid || isBusy\"><i class=\"fa fa-sign-in\"></i> Add Event</button>\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/event-create/event-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-create/event-create.component.ts ***!
  \********************************************************/
/*! exports provided: EventCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function() { return EventCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventCreateComponent = /** @class */ (function () {
    function EventCreateComponent(eventService, router, showMessage) {
        this.eventService = eventService;
        this.router = router;
        this.showMessage = showMessage;
        this.isBusy = false;
    }
    EventCreateComponent.prototype.ngOnInit = function () {
    };
    EventCreateComponent.prototype.addEvent = function (eventData) {
        var _this = this;
        this.isBusy = true;
        var eventInfo = {
            EventName: eventData.value.eventName,
            EventVenue: eventData.value.eventVenue,
            EventDate: this.getFormattedDate(eventData.value.eventDate),
            EventTime: this.getFormattedTime(eventData.value.eventTime),
            AvailableSeats: eventData.value.availableSeats,
            CreatedBy: localStorage.getItem('email')
        };
        this.eventService.addEvent(eventInfo).subscribe(function (event) {
            if (event == "success") {
                _this.getAllEvents();
                _this.showMessage.showSuccess("Event added successfully");
            }
            else {
                _this.showMessage.showError("Failed to save your event");
            }
            _this.isBusy = false;
        });
    };
    EventCreateComponent.prototype.getAllEvents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (events) {
            _this.router.navigate(['/dashboard']);
        });
    };
    EventCreateComponent.prototype.getFormattedDate = function (date) {
        var formattedDate = new Date(date);
        var day = formattedDate.getDate();
        var month = formattedDate.getMonth() + 1;
        var year = formattedDate.getFullYear();
        return day + "-" + month + "-" + year;
    };
    EventCreateComponent.prototype.getFormattedTime = function (time) {
        var hours = time.getHours();
        var mins = time.getMinutes();
        var seconds = time.getSeconds();
        return hours + ":" + mins;
    };
    EventCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-create',
            template: __webpack_require__(/*! ./event-create.component.html */ "./src/app/event-create/event-create.component.html"),
            styles: [__webpack_require__(/*! ./event-create.component.css */ "./src/app/event-create/event-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EventCreateComponent);
    return EventCreateComponent;
}());



/***/ }),

/***/ "./src/app/event-edit/event-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eventFormPosition{\r\n    margin-top:5%;\r\n    margin-bottom: 7%;\r\n}"

/***/ }),

/***/ "./src/app/event-edit/event-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container eventFormPosition\">\n    <form class=\"form-horizontal\" role=\"form\" #eventData = \"ngForm\" (ngSubmit)= \"updateEvent(event._id,eventData)\">\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <h3 class=\"alignHeader\">Update Event</h3>\n                <hr>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label class=\"col-form-label\" for=\"eventName\">Event Name</label>\n                    <input type=\"text\" name=\"eventName\" class=\"form-control\" maxlength=\"20\" id=\"eventName\" [(ngModel)]=\"event.EventName\" #name=\"ngModel\" ngModel required autofocus>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-control-feedback\">\n                    <span *ngIf = \"name.invalid && name.touched\" class=\"text-danger align-middle\">\n                        <i class=\"fa fa-close\"></i> Event Name is required. \n                    </span>\n                </div>\n            </div>\n        </div>\n  \n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"eventVenue\">Event Venue</label>\n                  <input type=\"text\" name=\"eventVenue\" class=\"form-control\" maxlength=\"50\" id=\"eventVenue\" [(ngModel)]=\"event.EventVenue\" #venue=\"ngModel\" ngModel required>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-control-feedback\">\n                <span *ngIf = \"venue.invalid && venue.touched\" class=\"text-danger align-middle\">\n                    <i class=\"fa fa-close\"></i> Event Venue is required. \n                </span>\n            </div>\n        </div>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label class=\"col-form-label\" for=\"eventDate\">Event Date</label>\n                <span [owlDateTimeTrigger]=\"dt1\"><input [owlDateTime]=\"dt1\" maxlength=\"10\" name=\"eventDate\" [(ngModel)]=\"event.EventDate\" class=\"form-control\" #date=\"ngModel\" ngModel required></span>              \n                <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>              \n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"form-control-feedback\">\n                <span *ngIf = \"date.invalid && date.touched\" class=\"text-danger align-middle\">\n                    <i class=\"fa fa-close\"></i> Event Date is required. \n                </span>\n            </div>\n        </div>\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label class=\"col-form-label\" for=\"eventTime\">Event Time</label>\n              <span [owlDateTimeTrigger]=\"dt2\"><input [owlDateTime]=\"dt2\"  maxlength=\"6\" name=\"eventTime\" [(ngModel)]=\"event.EventTime\" class=\"form-control\" #time=\"ngModel\" ngModel required></span>              \n              <owl-date-time [pickerType]=\"'timer'\" #dt2></owl-date-time>              \n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n            <span *ngIf = \"time.invalid && time.touched\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Event Time is required. \n            </span>\n        </div>\n    </div>\n  </div>\n  \n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label class=\"col-form-label\" for=\"availableSeats\">Seats</label>\n              <input type=\"number\" name=\"availableSeats\" class=\"form-control\" min=\"1\" id=\"availableSeats\" max=\"1000\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" maxlength=\"4\" id=\"availableSeats\" [(ngModel)]=\"event.AvailableSeats\" #seats=\"ngModel\" ngModel required>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n            <span *ngIf = \"seats.invalid && seats.touched\" class=\"text-danger align-middle\">\n                <i class=\"fa fa-close\"></i> Available Seats is required. \n            </span>\n        </div>\n    </div>\n  </div>     \n        <div class=\"row\" style=\"padding-top: 1rem\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <button type=\"submit\" class=\"btn btn-sm btn-warning\" [disabled]=\"eventData.invalid || isBusy\">Update Event</button>\n                <button type=\"submit\" routerLink=\"/dashboard\" class=\"btn btn-sm btn-secondary pull-right\">Cancel</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/event-edit/event-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.ts ***!
  \****************************************************/
/*! exports provided: EventEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditComponent", function() { return EventEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventEditComponent = /** @class */ (function () {
    function EventEditComponent(eventService, router, showMessage, route) {
        this.eventService = eventService;
        this.router = router;
        this.showMessage = showMessage;
        this.route = route;
        this.isBusy = false;
    }
    EventEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEvent(this.router.queryParams.subscribe(function (params) { _this.eventID = params['eventID']; }));
    };
    EventEditComponent.prototype.getEvent = function (eventID) {
        var _this = this;
        this.eventService.getEvent(this.eventID).subscribe(function (event) {
            _this.event = event;
        });
    };
    EventEditComponent.prototype.updateEvent = function (eventID, eventData) {
        var _this = this;
        this.isBusy = true;
        var eventInfo = {
            _id: eventID,
            EventName: eventData.value.eventName,
            EventVenue: eventData.value.eventVenue,
            EventDate: this.getFormattedDate(eventData.value.eventDate),
            EventTime: this.getFormattedTime(eventData.value.eventTime),
            AvailableSeats: eventData.value.availableSeats,
            CreatedBy: localStorage.getItem('email')
        };
        this.eventService.updateEvent(eventID, eventInfo).subscribe(function (event) {
            if (event == 'success') {
                _this.showMessage.showSuccess("Event updated successfully");
                _this.route.navigate(["/dashboard"]);
            }
            _this.isBusy = false;
        });
    };
    EventEditComponent.prototype.getFormattedDate = function (date) {
        var formattedDate = new Date(date);
        var day = formattedDate.getDate();
        var month = formattedDate.getMonth() + 1;
        var year = formattedDate.getFullYear();
        return day + "-" + month + "-" + year;
    };
    EventEditComponent.prototype.getFormattedTime = function (time) {
        var hours = time.getHours();
        var mins = time.getMinutes();
        var seconds = time.getSeconds();
        return hours + ":" + mins;
    };
    EventEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-edit',
            template: __webpack_require__(/*! ./event-edit.component.html */ "./src/app/event-edit/event-edit.component.html"),
            styles: [__webpack_require__(/*! ./event-edit.component.css */ "./src/app/event-edit/event-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventEditComponent);
    return EventEditComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conatinerMargin{\r\n    margin-top:5%;\r\n    margin-bottom:20%;\r\n}\r\n.textMargin{\r\n    margin-left:50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container conatinerMargin\">\r\n  \r\n  <h2>Event Details</h2>   \r\n<div class=\"row\">\r\n  <div class=\"col-md-12\" >\r\n     <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\r\n        <div class=\"card-body d-flex flex-column align-items-start\">\r\n          <div class=\"col-md-3\">\r\n            <img class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"//placeimg.com/250/250/arch\" style=\"width: 400px; height: 400px;\">\r\n          </div>\r\n          <div class=\"col-md-5 textMargin\">\r\n            <h3 class=\"d-inline-block mb-2 text-dark\">Event Name: {{event.EventName}}</h3>\r\n            <h3 class=\"d-inline-block mb-2 text-dark\">Place: {{event.EventVenue}}</h3>\r\n            <h3 class=\"d-inline-block mb-2 text-dark\">Date: {{event.EventDate}}</h3><br/>\r\n            <h3 class=\"d-inline-block mb-2 text-dark\">Time: {{event.EventTime}}</h3><br/>\r\n            <h3 class=\"d-inline-block mb-2 text-dark\">Available Seats: {{event.AvailableSeats}}</h3>            \r\n          </div>\r\n          <div class=\"col-md-3 textMargin\">\r\n              <a (click) =\"registerToAttend()\" class=\"btn btn-sm btn-success\">Attending</a>\r\n              <a href=\"#\" class=\"btn btn-sm btn-primary pull-right\" routerLink=\"/dashboard\">Go to Dashboard</a>\r\n          </div>\r\n           <br/>               \r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = /** @class */ (function () {
    function EventsComponent(route, eventService, router, showMessage) {
        this.route = route;
        this.eventService = eventService;
        this.router = router;
        this.showMessage = showMessage;
        this.event = {
            _id: '',
            name: '',
            venue: '',
            date: '',
            time: '',
            seats: 0,
            createdBy: ''
        };
        this.userEvent = {
            userID: '',
            eventID: ''
        };
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { _this.eventId = params['eventID']; });
        this.eventService.getEvent(this.eventId).subscribe(function (event) {
            _this.event = event;
        });
    };
    EventsComponent.prototype.registerToAttend = function () {
        var _this = this;
        this.userEvent.userID = localStorage.getItem('userID');
        this.userEvent.eventID = this.event._id;
        this.eventService.registerToAttend(this.userEvent).subscribe(function (response) {
            _this.showMessage.showSuccess("You have successfully registered for the event!");
            _this.router.navigate(['/dashboard']);
        }, function (err) { });
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"page-footer font-small bg-light fixed-bottom\">\r\n  \r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n      <a href=\"#\"> SydneyHappening.com</a>\r\n    </div>\r\n    <!-- Copyright -->\r\n  \r\n  </footer>\r\n  <!-- Footer -->\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navigation bar -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n    <a class=\"navbar-brand\" href=\"#\">Sydney Happeing</a>\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf = \"checkIfLoggedIn()\" routerLink=\"/dashboard\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/about\">About Us</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n    <button class = \"Logout\" *ngIf = \"checkIfLoggedIn()\" routerLink=\"/\" (click) = \"logout()\">Logout</button>\r\n  </div>\r\n</nav>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.checkIfLoggedIn = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else
            return false;
    };
    HeaderComponent.prototype.logout = function () {
        console.log("inside logout");
        localStorage.clear();
        console.log(localStorage.getItem('token'));
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginFormPosition{\r\n    margin-top:5em;\r\n}\r\n.alignHeader{\r\n    text-align:center;\r\n    margin-top: 2%;\r\n}\r\n.login-form{\r\n    background: #E8E4E4;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n            <div class=\"container login-form\" >\r\n              <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)= \"validateLogin()\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-3\"></div>\r\n                      <div class=\"col-md-6\">\r\n                          <h3 class=\"alignHeader\">Welcome to Sydney Happening!!</h3>\r\n                          <hr>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-3\"></div>\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"form-group has-danger\">\r\n                              <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\r\n                              <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                                  <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\r\n                                  <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                                        placeholder=\"you@example.com\" maxlength=\"30\" required>\r\n                                        <span class=\"text-danger align-middle\" *ngIf=\"isValid('email')\">*</span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-3\"></div>\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label class=\"sr-only\" for=\"password\">Password</label>\r\n                              <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                                  <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\r\n                                  <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                        placeholder=\"Password\" maxlength=\"30\" required>\r\n                                        <span class=\"text-danger align-middle\" *ngIf=\"isValid('password')\">*</span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\" style=\"padding-top: 1rem\">\r\n                      <div class=\"col-md-3\"></div>\r\n                      <div class=\"col-md-6\">\r\n                          <button type=\"submit\" class=\"btn btn-lg btn-block btn-success\" [disabled]=\"loginForm.invalid || isBusy\"><i class=\"fa fa-sign-in\"></i> Login</button>\r\n                          <span class=\"pull-right\"> Don't have an account? <a class=\"btn btn-link\" routerLink=\"/registration\">Signup</a></span>\r\n                      </div>\r\n                  </div>\r\n              </form>\r\n          </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, showMessage, router) {
        this.authenticationService = authenticationService;
        this.showMessage = showMessage;
        this.router = router;
        this.isBusy = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkIfLoggedIn();
    };
    LoginComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        this.authenticationService.checkIfLoggedIn().subscribe(function (response) {
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            if (err.status == 400) {
                //The token though present in local storage has expired or not present. 
                //clear localStorage here. 
                localStorage.clear();
            }
        });
    };
    LoginComponent.prototype.isValid = function (controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    };
    LoginComponent.prototype.validateLogin = function () {
        var _this = this;
        this.isBusy = true;
        if (this.loginForm.valid) {
            this.authenticationService.validateLogin(this.loginForm.value).subscribe(function (response) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('userID', response.userID);
                localStorage.setItem('firstName', response.firstName);
                localStorage.setItem('email', response.email);
                localStorage.setItem('IsAdmin', response.IsAdmin.toString());
                _this.showMessage.showSuccess("You have successfully logged in");
                _this.isBusy = false;
                _this.router.navigate(['/dashboard']);
            }, function (err) {
                _this.showMessage.showError(err.error);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alignHeader{\r\n    text-align:center;\r\n    margin-top: 2%;\r\n}\r\n.registration-form{\r\n    background: #E8E4E4;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n  <div class=\"container registration-form\" >\r\n    <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"registerationForm\" (ngSubmit)= \"validateAndRegister()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <h2 class=\"alignHeader\">Register</h2>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group has-danger\">\r\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\r\n                        <input type=\"text\" name=\"firstName\" class=\"form-control\" id=\"firstName\" \r\n                              placeholder=\"First Name\" formControlName = \"firstName\" maxlength=\"30\" autofocus>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\">\r\n                    <span *ngIf = \"isValid('firstName')\" class=\"text-danger align-middle\">\r\n                        <i class=\"fa fa-close\"></i> First Name is required. \r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group has-danger\">\r\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\r\n                        <input type=\"text\" name=\"lastName\" class=\"form-control\" id=\"lastName\" formControlName = \"lastName\"\r\n                              placeholder=\"Last Name\" maxlength=\"30\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\">\r\n                    <span *ngIf = \"isValid('lastName')\" class=\"text-danger align-middle\">\r\n                        <i class=\"fa fa-close\"></i> Last Name is required.\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group has-danger\">\r\n                    <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\r\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\r\n                        <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" formControlName = \"email\"\r\n                              placeholder=\"you@example.com\" required  maxlength=\"30\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\">\r\n                    <span *ngIf = \"isValid('email')\" class=\"text-danger align-middle\">\r\n                        <i class=\"fa fa-close\"></i> Email is required. \r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"sr-only\" for=\"password\">Password</label>\r\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\r\n                        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" formControlName = \"password\"\r\n                              placeholder=\"Password\" maxlength=\"30\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-control-feedback\">\r\n                    <span *ngIf = \"isValid('password')\" class=\"text-danger align-middle\">   \r\n                    Password field is mandatory.  \r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\"></div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"sr-only\" for=\"password\">Confirm Password</label>\r\n                  <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\r\n                      <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" id=\"confirmPassword\" \r\n                      formControlName = \"confirmPassword\" placeholder=\"Confirm Password\"maxlength=\"30\" >\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <div class=\"form-control-feedback\">\r\n                  <span *ngIf = \"isValid('confirmPassword')\"class=\"text-danger align-middle\">\r\n                  Password and confirm password do not match.     \r\n                  </span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n        <div class=\"row\" style=\"padding-top: 1rem\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"registerationForm.invalid || isBusy\"><i class=\"fa fa-sign-in\"></i> Register</button>\r\n                <span class=\"pull-right\"> Already have an account? <a class=\"btn btn-link\" routerLink=\"/\">Sign in</a></span>                \r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_registeration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/registeration.service */ "./src/app/services/registeration.service.ts");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toastr.service */ "./src/app/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(registerationService, showMessage, router) {
        var _this = this;
        this.registerationService = registerationService;
        this.showMessage = showMessage;
        this.router = router;
        this.isBusy = false;
        this.registerationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.passwordValidator),
            IsAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        //subscribe to value changes of the password field so that confirm password check happens again. 
        this.registerationForm.controls.password.valueChanges
            .subscribe(function (x) { return _this.registerationForm.controls.confirmPassword.updateValueAndValidity(); });
    }
    RegistrationComponent.prototype.isValid = function (controlName) {
        return this.registerationForm.get(controlName).invalid && this.registerationForm.get(controlName).touched;
    };
    RegistrationComponent.prototype.validateAndRegister = function () {
        var _this = this;
        this.isBusy = true;
        var captcha = "";
        if (this.registerationForm.valid) {
            this.registerationService.registerUser(this.registerationForm.value, captcha).subscribe(function (data) {
                if (data == 'EC1') {
                    _this.showMessage.showError("This email is already registered.");
                }
                else {
                    _this.showMessage.showSuccess("User registered, please login");
                    _this.router.navigate(['']);
                }
                _this.isBusy = false;
            }, function (error) {
                _this.showMessage.showError("Error registering user, please try again");
            });
        }
    };
    RegistrationComponent.prototype.passwordValidator = function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var confirmPassword = control.value;
            var passControl = control.root.get('password');
            if (passControl) {
                var passValue = passControl.value;
                if (passValue !== confirmPassword || passValue === '') {
                    return {
                        isError: true
                    };
                }
            }
        }
        return null;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_registeration_service__WEBPACK_IMPORTED_MODULE_3__["RegisterationService"], _services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            //redirect to login screen.
            this.router.navigate(['']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainURL + '/users';
    }
    AuthenticationService.prototype.validateLogin = function (validateLogin) {
        return this.http.post(this.apiUrl + '/login', validateLogin);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token') === null) {
            return false;
        }
        else
            return true;
    };
    //verify if the token has expired or not. 
    AuthenticationService.prototype.checkIfLoggedIn = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.get(this.apiUrl + '/validateToken', { headers: headers });
    };
    AuthenticationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Client Side or Network error
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AuthenticationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.apiUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domainURL + '/emails';
    }
    EmailService.prototype.sendEmail = function (message) {
        return this.http.post(this.apiUrl + '/sendEmail', message);
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.apiUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domainURL + '/events';
    }
    EventService.prototype.getEvents = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.get(this.apiUrl, { headers: headers });
    };
    EventService.prototype.getEvent = function (eventID) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.get(this.apiUrl + "/" + eventID, { headers: headers });
    };
    EventService.prototype.addEvent = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.post(this.apiUrl, data, { headers: headers });
    };
    EventService.prototype.updateEvent = function (eventID, event) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.patch(this.apiUrl + "/" + eventID, event, { headers: headers });
    };
    EventService.prototype.deleteEvent = function (eventID) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.delete(this.apiUrl + "/" + eventID, { headers: headers });
    };
    EventService.prototype.registerToAttend = function (userEventRegister) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.post(this.apiUrl + '/registerToAttend', userEventRegister, { headers: headers });
    };
    EventService.prototype.getUserEvents = function (userData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("token", localStorage.getItem('token'));
        return this.http.post(this.apiUrl + '/getUserEvents', userData, { headers: headers });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/registeration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/registeration.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationService", function() { return RegisterationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterationService = /** @class */ (function () {
    function RegisterationService(http) {
        this.http = http;
        this.apiUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainURL + '/users/register';
    }
    RegisterationService.prototype.registerUser = function (registerationData, captcha) {
        console.log(registerationData);
        var userData = {
            registerationData: registerationData,
            captcha: captcha
        };
        console.log(userData);
        console.log(this.apiUrl);
        return this.http.post(this.apiUrl, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        ;
    };
    RegisterationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RegisterationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Client Side or Network error
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    RegisterationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegisterationService);
    return RegisterationService;
}());



/***/ }),

/***/ "./src/app/services/toastr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/toastr.service.ts ***!
  \********************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrService = /** @class */ (function () {
    function ToastrService(toastr) {
        this.toastr = toastr;
    }
    ToastrService.prototype.showSuccess = function (message) {
        var toastOptions = {
            title: 'Success!',
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        };
        return this.toastr.success(toastOptions);
    };
    ToastrService.prototype.showError = function (message) {
        var toastOptions = {
            title: 'Oops!',
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        };
        return this.toastr.error(toastOptions);
    };
    ToastrService.prototype.showWarning = function (message) {
        var toastOptions = {
            title: 'Alert!',
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        };
        return this.toastr.warning(toastOptions);
    };
    ToastrService.prototype.showInfo = function (message) {
        var toastOptions = {
            title: 'Info!',
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        };
        return this.toastr.info(message);
    };
    ToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toasta__WEBPACK_IMPORTED_MODULE_1__["ToastaService"]])
    ], ToastrService);
    return ToastrService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: '',
    domainURL: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mayur\Desktop\UTS\Semester 3\Advance Internet Programming\SydneyHappening\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map