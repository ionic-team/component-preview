import { Component } from '@stencil/core';

@Component({
  tag: 'page-action-sheet'
})
export class PageActionSheet {
  controller: any;

  showActionSheet = () => {
    if (this.controller) {
      this.controller.create({
        header: 'Albums',
        buttons: [{
          text: 'Delete',
          role: 'destructive'
        }, {
          text: 'Share'
        }, {
          text: 'Play'
        }, {
          text: 'Favorite'
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      })
      .then(actionSheet => actionSheet.present());
    }
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Action Sheet</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen padding>
        <ion-action-sheet-controller ref={node => { this.controller = node; }}/>
        <ion-button expand="block" onClick={this.showActionSheet}>Show Action Sheet</ion-button>
      </ion-content>
    ];
  }
}
