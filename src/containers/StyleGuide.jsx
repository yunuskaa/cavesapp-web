import React from 'react';

import Button from 'shared/components/UI/Button';

function StyleGuide() {
  return (
    <>
      <h1>Style Guide</h1>
      <hr />
      <h2>Buttons</h2>
      <div>
        <Button>BUTTON</Button>
        <Button variant="error">BUTTON</Button>
        <Button variant="success">BUTTON</Button>
        <Button variant="dark">BUTTON</Button>
        <Button variant="light">BUTTON</Button>
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
        <Button disabled>BUTTON</Button>
      </div>
    </>
  );
}

export default StyleGuide;
