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
var itunes_1 = require('../../providers/itunes/itunes');
var ionic_angular_2 = require('ionic-angular');
var preview_modal_1 = require('../preview-modal/preview-modal');
var SearchPage = (function () {
    function SearchPage(nav, itunes) {
        this.nav = nav;
        this.itunes = itunes;
        this.nav = nav;
        this.results = [];
        this._unfilteredResults = [];
        this.usesFilter = false;
        this.keyword = '';
        this.itunes = itunes;
    }
    SearchPage.prototype.keyHasBeenPressed = function (e) {
        var _this = this;
        if (e.keyIdentifier === 'Enter') {
            this.itunes.search(this.keyword).then(function (results) {
                _this.results = results;
                _this._unfilteredResults = results;
                _this.usesFilter = false;
            });
        }
    };
    SearchPage.prototype.userPressedCancel = function () {
        this.keyword = '';
        this.results = this._unfilteredResults;
    };
    SearchPage.prototype.openFilters = function () {
        var _this = this;
        var sheet = ionic_angular_1.ActionSheet.create({
            title: 'Filtred by...',
            buttons: [
                {
                    text: 'Movies only',
                    handler: function () {
                        _this.results = _this._unfilteredResults.filter(function (item) { return item.kind === 'feature-movie'; });
                        _this.usesFilter = true;
                    }
                },
                {
                    text: 'Songs only',
                    handler: function () {
                        _this.results = _this._unfilteredResults.filter(function (item) { return item.kind === 'song'; });
                        _this.usesFilter = true;
                    }
                },
                {
                    text: 'Clear',
                    style: 'destructive',
                    handler: function () {
                        _this.results = _this._unfilteredResults;
                        _this.usesFilter = false;
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                }
            ]
        });
        this.nav.present(sheet);
    };
    SearchPage.prototype.openPreview = function (track) {
        var modal = ionic_angular_2.Modal.create(preview_modal_1.PreviewModalPage, {
            track: track
        });
        this.nav.present(modal);
    };
    SearchPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.results = [];
        this.itunes.search(this.keyword)
            .then(function (results) {
            refresher.complete();
            _this.results = results;
        });
    };
    SearchPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/search/search.html',
            viewProviders: [itunes_1.Itunes]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, itunes_1.Itunes])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
