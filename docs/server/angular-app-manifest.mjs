
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/blog/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/blog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: '5a637cf9e5d2788f5d662b00593762a29a5cd8722238ca4e0decc0242d8be1aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '155e57e9ec14e382ed79e23f665af2151a00003386fe2a12a5e2184e8ce20ef6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 674, hash: '2bcf815db465a4aef784bdb37d0f5c33ab8050cfb92d503144c7c00a48571728', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
