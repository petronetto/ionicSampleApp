import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Itunes } from '../../providers/itunes/itunes';

@Component({
  templateUrl: 'build/pages/artist/artist.html',
  viewProviders: [Itunes]
})
export class ArtistPage {
  artist: any;
  albuns: any;

  constructor(
    private nav: NavController,
    public params: NavParams,
    public itunes: Itunes
  ) {
    this.nav = nav;
    this.artist = params.data;
    this.itunes.loadAlbuns(params.data.id)
      .then(albuns => this.albuns = albuns);
  }

}
