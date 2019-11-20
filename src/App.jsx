import React from 'react';
import { useTranslation } from 'react-i18next';

import 'shared/assets/scss/app.scss';

import Button from 'shared/components/UI/Button';

function App() {
  const [t] = useTranslation('translations');

  return (
    <>
      <p>{t('welcome')}</p>
      <div>
        <Button>BUTTON</Button>
        <Button variant="error">BUTTON</Button>
        <Button variant="success">BUTTON</Button>
        <Button variant="dark">BUTTON</Button>
        <Button variant="light">BUTTON</Button>
      </div>
      <br />
      <div>
        <Button block>BUTTON</Button>
        <Button block variant="error">
          BUTTON
        </Button>
        <Button block variant="success">
          BUTTON
        </Button>
        <Button block variant="dark">
          BUTTON
        </Button>
        <Button block variant="light">
          BUTTON
        </Button>
      </div>
      <br />
      <div>
        <Button active>BUTTON</Button>
        <Button active variant="error">
          BUTTON
        </Button>
        <Button active variant="success">
          BUTTON
        </Button>
        <Button active variant="dark">
          BUTTON
        </Button>
        <Button active variant="light">
          BUTTON
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" variant="error">
          BUTTON
        </Button>
        <Button size="md" variant="success">
          BUTTON
        </Button>
        <Button size="lg" variant="dark">
          BUTTON
        </Button>
      </div>
      <br />
      <div>
        <Button loading>BUTTON</Button>
        <Button loading variant="error">
          BUTTON
        </Button>
        <Button loading variant="success">
          BUTTON
        </Button>
        <Button loading variant="dark">
          BUTTON
        </Button>
        <Button loading variant="light">
          BUTTON
        </Button>
      </div>
      <br />
      <div>
        <Button disabled>BUTTON</Button>
        <Button disabled variant="error">
          BUTTON
        </Button>
        <Button disabled variant="success">
          BUTTON
        </Button>
        <Button disabled variant="dark">
          BUTTON
        </Button>
        <Button disabled variant="light">
          BUTTON
        </Button>
      </div>
    </>
  );
}

export default App;
