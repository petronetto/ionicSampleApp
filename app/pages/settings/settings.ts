import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LanguageSetting } from './language';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
  viewProviders: [LanguageSetting]
})
export class SettingsPage {
  countries: any;
  selectCountry: any;

  select(country) {
    this.selectCountry = country
    // Also keep inside service
    this.setting.country = country;
  }
  constructor(private nav: NavController, private setting: LanguageSetting) {
    this.countries = setting.countries;
  }

}
