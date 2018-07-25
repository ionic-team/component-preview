import { Component } from '@stencil/core';

@Component({
  tag: 'page-alert'
})
export class PageAlert {
  controller: any;

  showAlert = () => {
    if (this.controller) {
      this.controller.create({
        header: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        buttons: ['Disagree', 'Agree']
      })
      .then(alert => alert.present());
    }
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Alert</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen padding>
        <ion-alert-controller ref={node => { this.controller = node; }}/>
        <ion-button expand="block" onClick={this.showAlert}>Show Alert</ion-button>
      </ion-content>
    ];
  }
}
