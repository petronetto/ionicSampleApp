"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var PreviewModalPage = (function () {
    function PreviewModalPage(nav, viewCtrl, params) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.track = params.data.track;
    }
    PreviewModalPage.prototype.close = function () {
        this.viewCtrl.dismiss(null);
    };
    PreviewModalPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/preview-modal/preview-modal.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ViewController, ionic_angular_1.NavParams])
    ], PreviewModalPage);
    return PreviewModalPage;
}());
exports.PreviewModalPage = PreviewModalPage;
