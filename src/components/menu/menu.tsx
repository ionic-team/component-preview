import { Component } from '@stencil/core';


@Component({
  tag: 'page-menu',
  styleUrl: 'menu.css'
})
export class PageMenu {

  appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    }, {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    }
  ];

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route url='/' component='home-page'></ion-route>
        <ion-route url='/profile' component='profile-page'></ion-route>
      </ion-router>
    );
  }

  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane>
          <ion-menu>
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content fullscreen forceOverscroll={false}>
              <ion-list>
                <ion-list-header>
                  Navigate
              </ion-list-header>

                {this.appPages.map((p) =>
                  <ion-menu-toggle autoHide={false}>
                    <ion-item href={p.url}>
                      <ion-icon slot="start" name={p.icon}></ion-icon>
                      <ion-label>
                        {p.title}
                      </ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                )}
              </ion-list>
            </ion-content>
          </ion-menu>

          <ion-router-outlet animated={false} main></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    )
  }
}