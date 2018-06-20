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

  render() {
    switch (this.active) {
      case 'action-sheet':
        return <page-action-sheet/>;

      case 'alert':
        return <page-alert/>;

      case 'badge':
        return <page-badge/>;

      case 'button':
        return <page-button/>;

      case 'card':
        return <page-card/>;

      case 'checkbox':
        return <page-checkbox/>;

      case 'datetime':
        return <page-datetime/>;

      case 'fab':
        return <page-fab/>;

      case 'grid':
        return <page-grid/>;

      case 'infinite-scroll':
        return <page-infinite-scroll/>;

      case 'input':
        return <page-input/>;

      case 'list':
        return <page-list/>;

      case 'loading':
        return <page-loading/>;

      case 'menu':
        return <page-menu/>;

      case 'modal':
        return <page-modal/>;

      case 'nav':
        return <div>Nav</div>;

      case 'popover':
        return <div>Popover</div>;

      case 'radio':
        return <div>Radio</div>;

      case 'range':
        return <page-range/>;

      case 'refresher':
        return <page-refresher/>;

      case 'searchbar':
        return <page-searchbar/>;

      case 'select':
        return <page-select/>;

      case 'slides':
        return <page-slides/>;

      case 'spinner':
        return <page-spinner/>;

      case 'tabs':
        return <page-tabs/>;

      case 'toast':
        return <page-toast/>;

      case 'toggle':
        return <div>Toggle</div>;

      case 'virtual-scroll':
        return <div>Virtual Scroll</div>;

      default:
        return (
          <ion-app>
            <ion-content padding>
              <ion-icon name="logo-ionic" color="primary" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform : 'translate(-50%, -50%)',
                fontSize: '6em'
              }}/>
            </ion-content>
          </ion-app>
        );
    }
  }
}
