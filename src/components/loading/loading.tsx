import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'page-loading',
  styleUrl: 'loading.css'
})
export class PageLoading {

  @Prop({ connect: 'ion-loading-controller' }) loadingCtrl: any;

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
  }

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-title>Loading</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <ion-button expand='block' onClick={() => this.presentLoading()}>Show Loading</ion-button>
        </ion-content>
      </ion-app>
    );
  }
}
