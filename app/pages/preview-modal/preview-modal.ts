import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/preview-modal/preview-modal.html',
})
export class PreviewModalPage {
  public track: any;

  constructor(
      private nav: NavController,
      public viewCtrl: ViewController,
      public params: NavParams
  ) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.track = params.data.track;
  }

  close() {
    this.viewCtrl.dismiss(null);
  }

}
