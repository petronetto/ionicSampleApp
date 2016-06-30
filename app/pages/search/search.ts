import { Component, Inject } from '@angular/core';
import { NavController, ActionSheet } from 'ionic-angular';
import { Http } from '@angular/http';
import { Itunes } from '../../providers/itunes/itunes';
import { Modal, Platform, NavParams, ViewController } from 'ionic-angular';
import { PreviewModalPage } from '../preview-modal/preview-modal';

@Component({
  templateUrl: 'build/pages/search/search.html',
  viewProviders: [Itunes]
})
export class SearchPage {
  results: Array<any>;
  keyword: string;
  usesFilter: boolean;
  _unfilteredResults: Array<any>;

  constructor(private nav: NavController, private itunes: Itunes) {
    this.nav = nav;
    this.results = [];
    this._unfilteredResults = [];
    this.usesFilter = false;
    this.keyword = '';
    this.itunes = itunes;
  }

  keyHasBeenPressed(e) {
    if (e.keyIdentifier === 'Enter') {
      this.itunes.search(this.keyword).then((results) => {
        this.results = results;
        this._unfilteredResults = results;
        this.usesFilter = false;
      });
    }
  }

  userPressedCancel() {
    this.keyword = '';
  }

  openFilters() {
    let sheet = ActionSheet.create({
      title: 'Filtred by...',
      buttons: [
        {
          text: 'Movies only',
          handler: () => {
            this.results = this._unfilteredResults.filter(
              (item) => item.kind === 'feature-movie'
            );
            this.usesFilter = true;
          }
        },
        {
          text: 'Songs only',
          handler: () => {
            this.results = this._unfilteredResults.filter(
              (item) => item.kind === 'song'
            );
            this.usesFilter = true;
          }
        },
        {
          text: 'Clear',
          style: 'destructive',
          handler: () => {
            this.results = this._unfilteredResults;
            this.usesFilter = false;
          }
        },
        {
          text: 'Cancel',
          style: 'cancel',
        }
      ]
    })
    this.nav.present(sheet);
  }

  openPreview(track) {
    let modal = Modal.create(PreviewModalPage, {
      track: track
    });
    this.nav.present(modal);
  }

}
