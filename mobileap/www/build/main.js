webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        FusionCharts.ready(function () {
            var revenueChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'lineCanvas',
                width: '100%',
                height: '450',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Split of Revenue by Product Categories",
                        "subCaption": "Last year",
                        "numberPrefix": "$",
                        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                    },
                    "data": [{
                            "label": "Food",
                            "value": "85"
                        },
                        {
                            "label": "Drink",
                            "value": "15"
                        }
                        // more data
                    ]
                }
            }).render();
        });
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: "# of votes",
                        data: [12, 19, 3, 11, 5, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "barCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\LabExercise\Angular\mobileap\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <p>\n    This is your first mobile App\n  </p>\n\n  <ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <div id="lineCanvas"></div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\LabExercise\Angular\mobileap\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(330);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\LabExercise\Angular\mobileap\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\LabExercise\Angular\mobileap\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 196,
	"./af.js": 196,
	"./ar": 197,
	"./ar-dz": 198,
	"./ar-dz.js": 198,
	"./ar-kw": 199,
	"./ar-kw.js": 199,
	"./ar-ly": 200,
	"./ar-ly.js": 200,
	"./ar-ma": 201,
	"./ar-ma.js": 201,
	"./ar-sa": 202,
	"./ar-sa.js": 202,
	"./ar-tn": 203,
	"./ar-tn.js": 203,
	"./ar.js": 197,
	"./az": 204,
	"./az.js": 204,
	"./be": 205,
	"./be.js": 205,
	"./bg": 206,
	"./bg.js": 206,
	"./bn": 207,
	"./bn.js": 207,
	"./bo": 208,
	"./bo.js": 208,
	"./br": 209,
	"./br.js": 209,
	"./bs": 210,
	"./bs.js": 210,
	"./ca": 211,
	"./ca.js": 211,
	"./cs": 212,
	"./cs.js": 212,
	"./cv": 213,
	"./cv.js": 213,
	"./cy": 214,
	"./cy.js": 214,
	"./da": 215,
	"./da.js": 215,
	"./de": 216,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 216,
	"./dv": 219,
	"./dv.js": 219,
	"./el": 220,
	"./el.js": 220,
	"./en-au": 221,
	"./en-au.js": 221,
	"./en-ca": 222,
	"./en-ca.js": 222,
	"./en-gb": 223,
	"./en-gb.js": 223,
	"./en-ie": 224,
	"./en-ie.js": 224,
	"./en-nz": 225,
	"./en-nz.js": 225,
	"./eo": 226,
	"./eo.js": 226,
	"./es": 227,
	"./es-do": 228,
	"./es-do.js": 228,
	"./es.js": 227,
	"./et": 229,
	"./et.js": 229,
	"./eu": 230,
	"./eu.js": 230,
	"./fa": 231,
	"./fa.js": 231,
	"./fi": 232,
	"./fi.js": 232,
	"./fo": 233,
	"./fo.js": 233,
	"./fr": 234,
	"./fr-ca": 235,
	"./fr-ca.js": 235,
	"./fr-ch": 236,
	"./fr-ch.js": 236,
	"./fr.js": 234,
	"./fy": 237,
	"./fy.js": 237,
	"./gd": 238,
	"./gd.js": 238,
	"./gl": 239,
	"./gl.js": 239,
	"./gom-latn": 240,
	"./gom-latn.js": 240,
	"./he": 241,
	"./he.js": 241,
	"./hi": 242,
	"./hi.js": 242,
	"./hr": 243,
	"./hr.js": 243,
	"./hu": 244,
	"./hu.js": 244,
	"./hy-am": 245,
	"./hy-am.js": 245,
	"./id": 246,
	"./id.js": 246,
	"./is": 247,
	"./is.js": 247,
	"./it": 248,
	"./it.js": 248,
	"./ja": 249,
	"./ja.js": 249,
	"./jv": 250,
	"./jv.js": 250,
	"./ka": 251,
	"./ka.js": 251,
	"./kk": 252,
	"./kk.js": 252,
	"./km": 253,
	"./km.js": 253,
	"./kn": 254,
	"./kn.js": 254,
	"./ko": 255,
	"./ko.js": 255,
	"./ky": 256,
	"./ky.js": 256,
	"./lb": 257,
	"./lb.js": 257,
	"./lo": 258,
	"./lo.js": 258,
	"./lt": 259,
	"./lt.js": 259,
	"./lv": 260,
	"./lv.js": 260,
	"./me": 261,
	"./me.js": 261,
	"./mi": 262,
	"./mi.js": 262,
	"./mk": 263,
	"./mk.js": 263,
	"./ml": 264,
	"./ml.js": 264,
	"./mr": 265,
	"./mr.js": 265,
	"./ms": 266,
	"./ms-my": 267,
	"./ms-my.js": 267,
	"./ms.js": 266,
	"./my": 268,
	"./my.js": 268,
	"./nb": 269,
	"./nb.js": 269,
	"./ne": 270,
	"./ne.js": 270,
	"./nl": 271,
	"./nl-be": 272,
	"./nl-be.js": 272,
	"./nl.js": 271,
	"./nn": 273,
	"./nn.js": 273,
	"./pa-in": 274,
	"./pa-in.js": 274,
	"./pl": 275,
	"./pl.js": 275,
	"./pt": 276,
	"./pt-br": 277,
	"./pt-br.js": 277,
	"./pt.js": 276,
	"./ro": 278,
	"./ro.js": 278,
	"./ru": 279,
	"./ru.js": 279,
	"./sd": 280,
	"./sd.js": 280,
	"./se": 281,
	"./se.js": 281,
	"./si": 282,
	"./si.js": 282,
	"./sk": 283,
	"./sk.js": 283,
	"./sl": 284,
	"./sl.js": 284,
	"./sq": 285,
	"./sq.js": 285,
	"./sr": 286,
	"./sr-cyrl": 287,
	"./sr-cyrl.js": 287,
	"./sr.js": 286,
	"./ss": 288,
	"./ss.js": 288,
	"./sv": 289,
	"./sv.js": 289,
	"./sw": 290,
	"./sw.js": 290,
	"./ta": 291,
	"./ta.js": 291,
	"./te": 292,
	"./te.js": 292,
	"./tet": 293,
	"./tet.js": 293,
	"./th": 294,
	"./th.js": 294,
	"./tl-ph": 295,
	"./tl-ph.js": 295,
	"./tlh": 296,
	"./tlh.js": 296,
	"./tr": 297,
	"./tr.js": 297,
	"./tzl": 298,
	"./tzl.js": 298,
	"./tzm": 299,
	"./tzm-latn": 300,
	"./tzm-latn.js": 300,
	"./tzm.js": 299,
	"./uk": 301,
	"./uk.js": 301,
	"./ur": 302,
	"./ur.js": 302,
	"./uz": 303,
	"./uz-latn": 304,
	"./uz-latn.js": 304,
	"./uz.js": 303,
	"./vi": 305,
	"./vi.js": 305,
	"./x-pseudo": 306,
	"./x-pseudo.js": 306,
	"./yo": 307,
	"./yo.js": 307,
	"./zh-cn": 308,
	"./zh-cn.js": 308,
	"./zh-hk": 309,
	"./zh-hk.js": 309,
	"./zh-tw": 310,
	"./zh-tw.js": 310
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 411;

/***/ })

},[311]);
//# sourceMappingURL=main.js.map