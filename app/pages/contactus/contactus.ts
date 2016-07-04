import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/common';

@Component({
  templateUrl: 'build/pages/contactus/contactus.html',
})
export class ContactusPage {
  contactForm: any;

  constructor(private nav: NavController, fb: FormBuilder) {
    this.nav = nav;
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm() {
    // debugger;
    console.log(this.contactForm.controls);
  }

}
