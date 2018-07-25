import { Component, State } from '@stencil/core';


@Component({
  tag: 'page-infinite-scroll'
})
export class PageInfiniteScroll {
  @State() items: any[];

  constructor() {
    this.items = new Array(15).fill(0).map(() => {
      return Math.random()
    });
  }

  doInfinite(ev) {
    setTimeout(() => {
      console.log('hello world');

      const newItems = new Array(15).fill(0).map(() => {
        return Math.random()
      });

      this.items = this.items.concat(newItems);
    }, 1000);
    ev.target.complete();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Infinite Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <app-list items={this.items}></app-list>

        <ion-infinite-scroll onIonInfinite={(event) => this.doInfinite(event)}>
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}