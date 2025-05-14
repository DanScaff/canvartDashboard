// src/index.ts
import Router from '@koa/router';

export default {
  register({ strapi }) {
    // Prendi in sicurezza il prefix, se esiste
    const prefix = strapi.config.server?.router?.prefix ?? '';

    // Crea un router Koa con quel prefix (anche '' va bene)
    const router = new Router({ prefix });

    // Definisci /ping (in realtà sarà prefix + /ping)
    router.get('/ping', async (ctx) => {
      ctx.body = 'pong';
    });

    // Monta le routes su Strapi
    strapi.server.app
      .use(router.routes())
      .use(router.allowedMethods());
  },
};