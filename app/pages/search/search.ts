import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {
  results: Array<any>;
  keyword: string;

  constructor(private nav: NavController, private http: Http) {
    this.nav = nav;
    this.http = http;
    this.results = [];
    this.keyword = '';
  }

  keyHasBeenPressed(e) {
    if (e.keyIdentifier === 'Enter') {
      this.http.get('http://www.redapesolutions.com/itunes?term='
      +this.keyword
    ).subscribe((response) => {
      this.results = response.json().results;
    });

    }
  }

  userPressedCancel() {
    this.keyword = '';
  }

}
