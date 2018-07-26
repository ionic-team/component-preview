// https://stenciljs.com/docs/config

exports.config = {
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false,
      dir: 'www'
    },
    {
      type: 'www',
      baseUrl: '/docs/content/component-preview-app/docs-www',
      serviceWorker: false,
      dir: 'docs-www',

      // workaround, global CSS styles URL is wrong
      inlineStyles: true,
      inlineAssetsMaxSize: 30000
    }
  ]
};
