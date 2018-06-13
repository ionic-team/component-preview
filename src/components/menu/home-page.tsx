import { Component } from '@stencil/core';


@Component({
  tag: 'home-page'
})
export class HomePage {
  
  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <h1>Welcome to the home page</h1>
        </ion-content>
      </ion-app>
    );
  }
}