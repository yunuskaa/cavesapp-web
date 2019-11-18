import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import { ApolloProvider } from "react-apollo";
import { createClient } from "shared/utils/apollo";
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'shared/redux/store/configureStore';

import './i18n';
import App from './App';

const client = createClient();
const store = configureStore(window.__APP.initialReduxState);

function BaseApp() {
  useSSR(window.__APP.initialI18nStore, window.__APP.initialLanguage);

  return (
    <Suspense fallback={<div>Still loading i18n...</div>}>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxProvider>
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
