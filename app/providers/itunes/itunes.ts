import { Injectable, Inject } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LanguageSetting } from '../../pages/settings/language';

@Injectable()

export class Itunes extends LanguageSetting {
  data: any;
  settings: any;
  country: any;

  constructor(
    private jsonp: Jsonp
  ) {
    super();
    this.data = null;
  }

  search(keyword) {
    let params = new URLSearchParams(
      'callback=JSONP_CALLBACK'
    );
    params.set('term', keyword);

    return this.jsonp.request(
      'https://itunes.apple.com/search', {
        search: params
    }).toPromise()
      .then((response) => response.json().results);
  }

  loadAlbuns(id) {
    console.log(this.country.code);
    let params = new URLSearchParams(
      'callback=JSONP_CALLBACK&entity=album'
    );
    params.set('id', id);
    params.set('country', this.country.code);

    return this.jsonp.request(
      'https://itunes.apple.com/lookup', {
        search: params
    }).toPromise()
      .then((response) => response.json().results)
      .then((results) => results.filter((item) => item.collectionType === 'Album'));
  }
}
