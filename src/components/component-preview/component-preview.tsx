import '@ionic/core';
import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'component-preview'
})
export class ComponentPreview {

  @Listen('window:message')
  handleMessage({ data }: MessageEvent) {
    if (data.active) {
      window.location.hash = data.active;
    }
  }

  render() {
    const pages = Object.entries(DEMOS);
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route url="/" component="page-index" componentProps={{ pages }}/>
          {pages.map(([key, { page }]) => (
            <ion-route url={key} component={page} />
          ))}
        </ion-router>
        <ion-router-outlet animated={false} no-router />

      </ion-app>
    );
  }
}

const DEMOS = {
  'action-sheet': {
    name: 'Action Sheet',
    page: 'page-action-sheet'
  },
  'alert': {
    name: 'Alert',
    page: 'page-alert'
  },
  'badge': {
    name: 'Badge',
    page: 'page-badge'
  },
  'button': {
    name: 'Button',
    page: 'page-button'
  },
  'card': {
    name: 'Card',
    page: 'page-card'
  },
  'checkbox': {
    name: 'Checkbox',
    page: 'page-checkbox'
  },
  'datetime': {
    name: 'Datetime',
    page: 'page-datetime'
  },
  'fab': {
    name: 'Fab',
    page: 'page-fab'
  },
  'grid': {
    name: 'Grid',
    page: 'page-grid'
  },
  'infinite-scroll': {
    name: 'Infinite Scroll',
    page: 'page-infinite-scroll'
  },
  'input': {
    name: 'Input',
    page: 'page-input'
  },
  'list': {
    name: 'List',
    page: 'page-list'
  },
  'loading': {
    name: 'Loading',
    page: 'page-loading'
  },
  'menu': {
    name: 'Menu',
    page: 'page-menu'
  },
  'modal': {
    name: 'Modal',
    page: 'page-modal'
  },
  'nav': {
    name: 'Navigation',
    page: 'page-nav'
  },
  'popover': {
    name: 'Popover',
    page: 'page-popover'
  },
  'range': {
    name: 'Range',
    page: 'page-range'
  },
  'refresher': {
    name: 'Refresher',
    page: 'page-refresher'
  },
  'searchbar': {
    name: 'Searchbar',
    page: 'page-searchbar'
  },
  'select': {
    name: 'Select',
    page: 'page-select'
  },
  'slides': {
    name: 'Slides',
    page: 'page-slides'
  },
  'spinner': {
    name: 'Spinner',
    page: 'page-spinner'
  },
  'tabs': {
    name: 'Tabs',
    page: 'page-tabs'
  },
  'toast': {
    name: 'Toast',
    page: 'page-toast'
  },
  'virtual-scroll': {
    name: 'Virtual Scroll',
    page: 'page-virtual-scroll'
  }
};
