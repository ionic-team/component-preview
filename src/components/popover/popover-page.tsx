import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'popover-page',
  styleUrl: 'popover-page.css'
})
export class PopoverPage {

  @Prop() contentEle: HTMLElement;
  @Prop() textEle: any;

  background: string;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  changeBackground(color) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily(family) {
    this.textEle.forEach(text => {
      text.style.fontFamily = family;
    });
  }

  render() {
    return (
      <ion-list lines='full'>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item onClick={() => this.changeFontSize('smaller')} detail-none class="text-button text-smaller">A</ion-item>
            </ion-col>
            <ion-col>
              <ion-item onClick={() => this.changeFontSize('larger')} detail-none class="text-button text-larger">A</ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row-dots">
            <ion-col>
              <div onClick={() => this.changeBackground('white')} class="dot dot-white"></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeBackground('tan')} class="dot dot-tan"></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeBackground('grey')} class="dot dot-grey"></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeBackground('black')} class="dot dot-black"></div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-item class="text-athelas">
          <ion-label>Athelas</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Athelas')} value="Athelas"></ion-radio>
        </ion-item>
        <ion-item class="text-charter">
          <ion-label>Charter</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Charter')} value="Charter"></ion-radio>
        </ion-item>
        <ion-item class="text-iowan">
          <ion-label>Iowan</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Iowan')} value="Iowan"></ion-radio>
        </ion-item>
        <ion-item class="text-palatino">
          <ion-label>Palatino</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Palatino')} value="Palatino"></ion-radio>
        </ion-item>
        <ion-item class="text-san-francisco">
          <ion-label>San Francisco</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('San Francisco')} value="San Francisco"></ion-radio>
        </ion-item>
        <ion-item class="text-seravek">
          <ion-label>Seravek</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Seravek')} value="Seravek"></ion-radio>
        </ion-item>
        <ion-item class="text-times-new-roman">
          <ion-label>Times New Roman</ion-label>
          <ion-radio onIonSelect={() => this.changeFontFamily('Times New Roman')} value="Times New Roman"></ion-radio>
        </ion-item>
      </ion-list>
    );
  }
}