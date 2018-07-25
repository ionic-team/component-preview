import { Component } from '@stencil/core';


@Component({
  tag: 'page-tabs',
  styleUrl: 'tabs.css'
})
export class PageTabs {
  render() {
    return (
      <ion-tabs>
        <ion-tab selected label="Music" icon='musical-note'>
          <ion-header translucent>
            <ion-toolbar>
              <ion-title>Music</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content fullscreen padding>
            <h1>Music</h1>
          </ion-content>
        </ion-tab>
        <ion-tab label="Movies" icon='videocam'>
          <ion-header translucent>
            <ion-toolbar>
              <ion-title>Movies</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content fullscreen padding>
            <h1>Movies</h1>
          </ion-content>
        </ion-tab>
        <ion-tab label="Games" icon='logo-game-controller-b'>
          <ion-header translucent>
            <ion-toolbar>
              <ion-title>Games</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content fullscreen padding>
            <h1>Games</h1>
          </ion-content>
        </ion-tab>
      </ion-tabs>
    );
  }
}