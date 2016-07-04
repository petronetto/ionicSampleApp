
import { Component } from '@angular/core';
import { NavController, ActionSheet, Keyboard, Alert, Loading } from 'ionic-angular';
import { Itunes } from '../../providers/itunes/itunes';
import { Modal } from 'ionic-angular';
import { PreviewModalPage } from '../preview-modal/preview-modal';
import * as lodash from 'lodash';
import { ArtistPage } from '../artist/artist';

@Component({
  templateUrl: 'build/pages/search/search.html',
  viewProviders: [Itunes]
})
export class SearchPage {
  results: Array<any>;
  keyword: string;
  usesFilter: boolean;
  _unfilteredResults: Array<any>;

  constructor(
      private nav: NavController,
      private itunes: Itunes,
      private keyboard: Keyboard
  ) {
    this.nav = nav;
    this.results = [];
    this._unfilteredResults = [];
    this.usesFilter = false;
    this.keyword = '';
    this.itunes = itunes;
  }

  search() {
    let loading = Loading.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.nav.present(loading);

    setTimeout(() => {
      this.itunes.search(this.keyword).then((results) => {
        if(!results.length) {
          let alert = Alert.create({
            title: 'The iTunes says:',
            subTitle: 'No match found',
            buttons: ["I'll try again"]
          });
          loading.dismiss();
          this.nav.present(alert);
        }
        loading.dismiss();
        console.log(results);
        this.results = results;
        this._unfilteredResults = results;
        this.usesFilter = false;
      });
    }, 1000);
  }

  keyHasBeenPressed(e) {
    //this.keyboard.close();
    if (this.keyword === '') {
      let alert = Alert.create({
        title: 'Empty search is not alllowed',
        subTitle: 'Please key in your search',
        buttons: [
          'Cancel',
          {
            text: 'Search',
            handler: data => {
              if (data.term) {
                this.keyword = data.term;
                this.search();
              } else {
                return false;
              }
            }
          }
        ],
        inputs: [
          {
            name: 'term',
            placeholder: 'Search for...'
          }
        ]
      });
      this.nav.present(alert);
      return;
    }
    this.search();
  }

  userPressedCancel() {
    this.keyword = '';
    this.results = this._unfilteredResults;
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
    });
    this.nav.present(sheet);
  }

  openPreview(track) {
    let alert = Alert.create({
      title: 'Open preview?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            let modal = Modal.create(PreviewModalPage, {
              track: track
            });
            this.nav.present(modal);
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  goToArtist(artist) {
    this.nav.push(ArtistPage, {
      id: artist.artistId,
      name: artist.artistName
    });
  }

  reloadData(refresher) {
    this.results = [];
    this.itunes.search(this.keyword)
      .then(results => {
        refresher.complete();
        this.results = lodash.shuffle(results);
      });
  }

}
