import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-modal'
})
export class Modal {
  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  async openModal(char: number) {
    const modal = await this.modalCtrl.create({
      component: 'modal-page',
      componentProps: { char }
    });

    modal.present();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <ion-list>
          <ion-list-header>
            Hobbits
          </ion-list-header>

          <ion-item button onClick={() => this.openModal(0)}>
            Gollum
          </ion-item>
          <ion-item button onClick={() => this.openModal(1)}>
            Frodo Baggins
          </ion-item>
          <ion-item button onClick={() => this.openModal(2)}>
            Sam
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
