exports.config = {
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/docs/content/component-preview-app/',
      serviceWorker: false,
      dir: 'docs-www'
    },
    {
      type: 'www',
      serviceWorker: false,
      dir: 'www'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
