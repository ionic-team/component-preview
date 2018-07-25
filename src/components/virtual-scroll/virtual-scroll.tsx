import { Component, Element } from '@stencil/core';


@Component({
  tag: 'page-virtual-scroll',
  styleUrl: 'virtual-scroll.css'
})
export class PageVirtualScroll {

  @Element() el: HTMLElement;
  virtualEl: any;

  componentDidLoad() {
    const items = Array.from({ length: 500 }, (x, i) => {
      console.log(x);
      return i;
    });

    this.virtualEl.itemHeight = () => 45;
    this.virtualEl.headerFn = (item, index) => {
      console.log(item, index);
      return null;
    }

    this.virtualEl.nodeRender = (el, cell) => {
      if (cell.type === 0) return this.renderItem(el, cell.value);
    };
    this.virtualEl.items = items;
  }

  renderItem(el, item) {
    if (!el) {
      el = document.createElement('ion-item');
      const text = document.createTextNode(item);
      el['$content'] = text;
      el.appendChild(text);
    } else {
      el['$content'].nodeValue = item;
    }
    return el;
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Virtual Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-virtual-scroll ref={el => this.virtualEl = el}></ion-virtual-scroll>
      </ion-content>
    ];
  }
}