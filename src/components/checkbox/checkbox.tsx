import { Component } from '@stencil/core';

@Component({
  tag: 'page-checkbox',
  styleUrl: 'checkbox.css'
})
export class PageCheckbox {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Checkbox</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-list-header>Characters</ion-list-header>

          <ion-item>
            <ion-checkbox color="primary" checked></ion-checkbox>
            <ion-label>Jon Snow</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked></ion-checkbox>
            <ion-label>Daenerys Targaryen</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox disabled></ion-checkbox>
            <ion-label>Arya Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary"></ion-checkbox>
            <ion-label>Tyrion Lannister</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="danger" checked></ion-checkbox>
            <ion-label>Sansa Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary"></ion-checkbox>
            <ion-label>Khal Drogo</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="tertiary" checked></ion-checkbox>
            <ion-label>Cersei Lannister</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="medium" checked></ion-checkbox>
            <ion-label>Stannis Baratheon</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" disabled></ion-checkbox>
            <ion-label>Petyr Baelish</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked></ion-checkbox>
            <ion-label>Hodor</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary" checked></ion-checkbox>
            <ion-label>Catelyn Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary"></ion-checkbox>
            <ion-label>Bronn</ion-label>
          </ion-item>

        </ion-list>
      </ion-content>
    ];
  }
}
