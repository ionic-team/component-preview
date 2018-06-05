import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'component-preview'
})
export class ComponentPreview {
  @State() message: any;

  @Listen('window:message')
  handleMessage({ data }: MessageEvent) {
    this.message = data;
  }

  render() {
    return <pre>message => { JSON.stringify(this.message, null, 2) }</pre>;
  }
}
