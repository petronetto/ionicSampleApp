import {Component} from '@angular/core';

@Component({
    templateUrl: './build/pages/slider/slider.html'
})
export class SliderPage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://raw.githubusercontent.com/driftyco/ionic-preview-app/master/www/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://raw.githubusercontent.com/driftyco/ionic-preview-app/master/www/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Platform?",
      description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://raw.githubusercontent.com/driftyco/ionic-preview-app/master/www/img/ica-slidebox-img-3.png",
    }
  ];
}
