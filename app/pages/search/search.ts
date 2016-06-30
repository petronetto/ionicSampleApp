import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Itunes } from '../../providers/itunes/itunes';

@Component({
  templateUrl: 'build/pages/search/search.html',
  viewProviders: [Itunes]
})
export class SearchPage {
  results: Array<any>;
  keyword: string;

  constructor(private nav: NavController, private itunes: Itunes) {
    this.nav = nav;
    this.itunes = itunes;
    this.results = [];
    this.keyword = '';
  }

  keyHasBeenPressed(e) {
    if (e.keyIdentifier === 'Enter') {
      this.itunes.search(this.keyword)
        .then((results) => this.results = results);
    }
  }

  userPressedCancel() {
    this.keyword = '';
  }

}
