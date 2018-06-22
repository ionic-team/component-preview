import { Component, Element } from '@stencil/core';


@Component({
  tag: 'page-virtual-scroll',
  styleUrl: 'virtual-scroll.css'
})
export class PageVirtualScroll {

  @Element() el: HTMLElement;

  componentDidLoad() {
    const virtual = (this.el.querySelector('#virtual') as any);
    const items = Array.from({ length: 500 }, (x, i) => {
      console.log(x);
      return i;
    });

    virtual.itemHeight = () => 45;
    virtual.headerFn = (item, index) => {
      console.log(item, index);
      return null;
    }

    virtual.nodeRender = (el, cell) => {
      if (cell.type === 0) return this.renderItem(el, cell.value);
    };
    virtual.items = items;
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
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-title>Virtual Scroll</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-virtual-scroll id="virtual"></ion-virtual-scroll>
        </ion-content>
      </ion-app>
    );
  }
}