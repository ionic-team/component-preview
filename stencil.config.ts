import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global.css',
  globalScript: 'src/global.ts',

  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      dir: 'www',
    },
    {
      type: 'www',
      baseUrl: '/docs/content/component-preview-app/docs-www',
      serviceWorker: null,
      dir: 'docs-www',

      // workaround, global CSS styles URL is wrong
      inlineStyles: true,
      inlineAssetsMaxSize: 30000
    }
  ],
};
