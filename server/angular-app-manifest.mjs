
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/art-gallery/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/art-gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 447, hash: '8b23a187f2447dbabff21a719464cacd76413bad1570ea955982668ad5f69a13', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '30d5421d86127808f9161aa9af5a9ae4926293207462d2c95044c446e912d507', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21562, hash: '005b425e60fd48043b315c8765a84943304bbfc02cea9a76d474ea63e4503843', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
