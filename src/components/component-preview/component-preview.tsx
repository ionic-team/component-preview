import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'component-preview'
})
export class ComponentPreview {

  @Listen('window:message')
  handleMessage({ data }: MessageEvent) {
    console.log(data);
  }

  render() {
    return <div>Component Preview!</div>;
  }
}
