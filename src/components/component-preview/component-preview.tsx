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
        return <div>Card</div>;

      case 'checkbox':
        return <div>Checkbox</div>;

      case 'datetime':
        return <div>DateTime</div>;

      case 'fab':
        return <div>Fab</div>;

      case 'footer':
        return <div>Footer</div>;

      case 'grid':
        return <div>Grid</div>;

      case 'header':
        return <div>Header</div>;

      case 'infinite-scroll':
        return <div>Infinite Scroll</div>;

      case 'input':
        return <div>Input</div>;

      case 'list':
        return <div>List</div>;

      case 'loading':
        return <div>Loading</div>;

      case 'menu':
        return <div>Menu</div>;

      case 'modal':
        return <div>Modal</div>;

      case 'nav':
        return <div>Nav</div>;

      case 'popover':
        return <div>Popover</div>;

      case 'radio':
        return <div>Radio</div>;

      case 'range':
        return <div>Range</div>;

      case 'refresher':
        return <div>Refresher</div>;

      case 'searchbar':
        return <div>Searchbar</div>;

      case 'select':
        return <div>Select</div>;

      case 'slides':
        return <div>Slides</div>;

      case 'spinner':
        return <div>Spinner</div>;

      case 'tabs':
        return <div>Tabs</div>;

      case 'toast':
        return <div>Toast</div>;

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
