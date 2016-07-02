import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Itunes {
  data: any;

  constructor(private jsonp: Jsonp) {
    this.data = null;
  }

  search(keyword) {
    let params = new URLSearchParams(
      'callback=JSONP_CALLBACK'
    );
    params.set('term', keyword);
    return this.jsonp.request(
      'https://itunes.apple.com/search',
      {
        search: params
      }
    ).toPromise()
    .then((response) => response.json().results);
  }
}
