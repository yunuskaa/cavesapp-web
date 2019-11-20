import React from 'react';
import { Route } from 'react-router-dom';

import 'shared/assets/scss/app.scss';

import StyleGuide from 'containers/StyleGuide';

function App() {
  return (
    <>
      <Route path="/style-guide" component={StyleGuide} />
    </>
  );
}

export default App;
