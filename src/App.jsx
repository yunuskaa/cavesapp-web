import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [t] = useTranslation('translations');

  return (
    <>
      <p>{t('welcome')}</p>
    </>
  );
}

export default App;
