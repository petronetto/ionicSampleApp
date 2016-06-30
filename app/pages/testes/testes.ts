import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  Control,
  ControlGroup,
  NgForm,
  Validators,
  NgControl,
  ControlValueAccessor,
  NgControlName,
  NgFormModel,
  FormBuilder
} from '@angular/common';

@Component({
  templateUrl: 'build/pages/testes/testes.html',
})
export class TestesPage {

  langs;
  langForm;

  constructor() {
    this.langs = new Control("");
    this.langForm = new ControlGroup({
      "langs": this.langs
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
