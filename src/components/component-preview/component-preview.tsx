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
        return <page-action-sheet></page-action-sheet>;

      case 'alert':
        return <page-alert></page-alert>;

      case 'badge':
        return <page-badge></page-badge>;

      case 'button':
        return <page-button></page-button>;

      case 'card':
        return <page-card></page-card>;

      case 'checkbox':
        return <page-checkbox></page-checkbox>;

      case 'datetime':
        return <page-datetime></page-datetime>;

      case 'fab':
        return <page-fab></page-fab>;

      case 'grid':
        return <page-grid></page-grid>;

      case 'infinite-scroll':
        return <page-infinite-scroll></page-infinite-scroll>;

      case 'input':
        return <page-input></page-input>;

      case 'list':
        return <page-list></page-list>;

      case 'loading':
        return <page-loading></page-loading>;

      case 'menu':
        return <page-menu></page-menu>;

      case 'modal':
        return <page-modal></page-modal>;

      case 'nav':
        return <page-nav></page-nav >;

      case 'popover':
        return <page-popover></page-popover>;

      case 'radio':
        return <div>Radio</div>;

      case 'range':
        return <page-range></page-range>;

      case 'refresher':
        return <page-refresher></page-refresher>;

      case 'searchbar':
        return <page-searchbar></page-searchbar>;

      case 'select':
        return <page-select></page-select>;

      case 'slides':
        return <page-slides></page-slides>;

      case 'spinner':
        return <page-spinner></page-spinner>;

      case 'tabs':
        return <page-tabs></page-tabs>;

      case 'toast':
        return <page-toast></page-toast>;

      case 'toggle':
        return <div>Toggle</div>;

      case 'virtual-scroll':
        return <page-virtual-scroll></page-virtual-scroll>;

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
        }}/>
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
