import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { createClient } from 'shared/utils/apollo';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import backend from 'i18next-node-fs-backend';
import express from 'express';
import fs from 'fs';
import i18nextMiddleware from 'i18next-express-middleware';
import path from 'path';

import configureStore from 'shared/redux/store/configureStore';
import App from 'App';
import i18n from './i18n';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

i18n
  .use(backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      debug: false,
      preload: ['en', 'de'],
      ns: ['translations'],
      defaultNS: 'translations',
      backend: {
        loadPath: `${appSrc}/shared/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/shared/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    () => {
      server
        .disable('x-powered-by')
        .use(i18nextMiddleware.handle(i18n))
        .use('/locales', express.static(`${appSrc}/shared/locales`))
        .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
        .get('/*', async (req, res) => {
          const context = {};
          const client = createClient();
          const preloadedState = { counter: 0 };
          const store = configureStore(preloadedState);

          const markup = await renderToStringWithData(
            <ApolloProvider client={client}>
              <ReduxProvider store={store}>
                <I18nextProvider i18n={req.i18n}>
                  <StaticRouter context={context} location={req.url}>
                    <App />
                  </StaticRouter>
                </I18nextProvider>
              </ReduxProvider>
            </ApolloProvider>,
          );

          const initialReduxState = store.getState();

          const { url } = context;

          if (url) {
            res.redirect(url);
          } else {
            const initialApolloState = client.extract();
            const initialI18nStore = {};
            const initialLanguage = req.i18n.language;
            req.i18n.languages.forEach(
              l => (initialI18nStore[l] = req.i18n.services.resourceStore.data[l]),
            );

            const initialAppState = {
              initialApolloState,
              initialI18nStore,
              initialLanguage,
              initialReduxState,
            };

            const html = `<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="utf-8" />
  <title>CAVES.app</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
  ${
    process.env.NODE_ENV === 'production'
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`
  }
</head>
<body>
  <div id="root">${markup}</div>
  <script>
    window.APP = ${JSON.stringify(initialAppState).replace(/</g, '\\u003c')}
  </script>
</body>
</html>`;

            res.status(200).send(html);
          }
        });
    },
  );

export default server;
