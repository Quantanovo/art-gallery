
export default {
  basePath: 'https://quantanovo.github.io/art-gallery',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
