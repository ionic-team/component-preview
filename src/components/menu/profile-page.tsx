import { Component } from '@stencil/core';


@Component({
  tag: 'profile-page'
})
export class ProfilePage {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <h1>Welcome to the profile page</h1>
      </ion-content>
    ];
  }
}