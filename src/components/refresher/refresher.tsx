import { Component, State } from '@stencil/core';

@Component({
  tag: 'page-refresher',
  styleUrl: 'refresher.css'
})
export class PageRefresher {
  @State() list = [0, 1, 2, 3, 4, 5];

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      refresher.complete();
    }, 2000);
  }

  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-title>Refresher</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-refresher
            slot="fixed"
            onIonRefresh={event => this.doRefresh(event)}
          >
            <ion-refresher-content />
          </ion-refresher>

          <ion-list>
            {this.list.map(item => {
              return <ion-item>{item}</ion-item>;
            })}
          </ion-list>
        </ion-content>
      </ion-app>
    );
  }
}
