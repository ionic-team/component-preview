import { Component } from '@stencil/core';


@Component({
  tag: 'page-spinner',
  styleUrl: 'spinner.css'
})
export class PageSpinner {

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Spinner</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div id='centerBlock'>
          <ion-spinner></ion-spinner>
          <ion-spinner color='primary'></ion-spinner>
          <ion-spinner color='secondary'></ion-spinner>
        </div>
      </ion-content>
    ];
  }
}