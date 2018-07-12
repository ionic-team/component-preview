import { Component } from '@stencil/core';


@Component({
  tag: 'page-nav',
  styleUrl: 'nav.css'
})
export class PageNav {

  render() {
    return [
      <ion-nav root='nav-home'></ion-nav>
    ]
  }
}