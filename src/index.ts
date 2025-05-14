// src/index.ts
import Router from '@koa/router';

export default {
  register({ strapi }) {
    // 1) crea un nuovo router
    const router = new Router();

    // 2) definisci la route /ping
    router.get('/ping', async (ctx) => {
      ctx.body = 'pong';
    });

    // 3) monta il router sull'app di Strapi
    strapi.server.app
      .use(router.routes())
      .use(router.allowedMethods());
  },
};