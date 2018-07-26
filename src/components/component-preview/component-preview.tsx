import '@ionic/core';
import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'component-preview'
})
export class ComponentPreview {

  @State() active: string = null;

  @Listen('window:message')
  handleMessage({ data }: MessageEvent) {
    if (data.active) {
      this.active = data.active;
    }
  }

  componentWillLoad() {
    if (!this.active && window.location.hash) {
      this.active = window.location.hash.slice(1);
    }
  }

  private renderPage() {
    switch (this.active) {
      case 'action-sheet':
        return <page-action-sheet class="ion-page"></page-action-sheet>;

      case 'alert':
        return <page-alert class="ion-page"></page-alert>;

      case 'badge':
        return <page-badge class="ion-page"></page-badge>;

      case 'button':
        return <page-button class="ion-page"></page-button>;

      case 'card':
        return <page-card class="ion-page"></page-card>;

      case 'checkbox':
        return <page-checkbox class="ion-page"></page-checkbox>;

      case 'datetime':
        return <page-datetime class="ion-page"></page-datetime>;

      case 'fab':
        return <page-fab class="ion-page"></page-fab>;

      case 'grid':
        return <page-grid class="ion-page"></page-grid>;

      case 'infinite-scroll':
        return <page-infinite-scroll class="ion-page"></page-infinite-scroll>;

      case 'input':
        return <page-input class="ion-page"></page-input>;

      case 'list':
        return <page-list class="ion-page"></page-list>;

      case 'loading':
        return <page-loading class="ion-page"></page-loading>;

      case 'menu':
        return <page-menu class="ion-page"></page-menu>;

      case 'modal':
        return <page-modal class="ion-page"></page-modal>;

      case 'nav':
        return <page-nav class="ion-page"></page-nav >;

      case 'popover':
        return <page-popover class="ion-page"></page-popover>;

      case 'range':
        return <page-range class="ion-page"></page-range>;

      case 'refresher':
        return <page-refresher class="ion-page"></page-refresher>;

      case 'searchbar':
        return <page-searchbar class="ion-page"></page-searchbar>;

      case 'select':
        return <page-select class="ion-page"></page-select>;

      case 'slides':
        return <page-slides class="ion-page"></page-slides>;

      case 'spinner':
        return <page-spinner class="ion-page"></page-spinner>;

      case 'tabs':
        return <page-tabs class="ion-page"></page-tabs>;

      case 'toast':
        return <page-toast class="ion-page"></page-toast>;

      case 'virtual-scroll':
        return <page-virtual-scroll class="ion-page"></page-virtual-scroll>;

      default:
        return this.renderDefault();
    }
  }

  private renderDefault() {
    return (
      <ion-content padding>
        <ion-icon name="logo-ionic" color="primary" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform : 'translate(-50%, -50%)',
          fontSize: '6em'
        }}></ion-icon>
      </ion-content>
    );
  }

  render() {
    return (
      <ion-app>
        { this.renderPage() }
      </ion-app>
    );
  }
}
