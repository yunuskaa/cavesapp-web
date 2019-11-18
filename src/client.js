import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import { ApolloProvider } from "react-apollo";
import { createClient } from "shared/utils/apollo";

import './i18n';
import App from './App';

const client = createClient();

function BaseApp() {
  useSSR(window.initialI18nStore, window.initialLanguage);

  return (
    <Suspense fallback={<div>Still loading i18n...</div>}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Suspense>
  );
}

hydrate(
  <BaseApp />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
