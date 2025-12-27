
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://quantanovo.github.io/art-gallery/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/art-gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 475, hash: '3d04f79b83154ff3dfeeb1978c367ce7b905ec52fdacd2ef68f1c54596458e1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: 'eb17f73cf9e34dd2202d12775af9555b2491d94b97cbc37b7e392667de73624e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21590, hash: '53487b2f826ad34b114ff1294e2e1eef8a5659c4935eb21cd88d6c4560190740', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
