import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';

import App from 'App.jsx';
import backend from 'i18next-node-fs-backend';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next'; // has no proper import yet

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const i18nextMiddleware = require('i18next-express-middleware');
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
        .get('/*', (req, res) => {
          const context = {};
          const markup = renderToString(
            <I18nextProvider i18n={req.i18n}>
              <StaticRouter context={context} location={req.url}>
                <App />
              </StaticRouter>
            </I18nextProvider>
          );

          const { url } = context;

          if (url) {
            res.redirect(url);
          } else {
            const initialI18nStore = {};

            req.i18n.languages.forEach(l => {
              initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });
            
            const initialLanguage = req.i18n.language;

            res.status(200).send(
              `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body>
              <div id="root">${markup}</div>
              <script>
                window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
                window.initialLanguage = '${initialLanguage}';
              </script>
          </body>
      </html>`
            );
          }
        });
    }
  )

export default server;
