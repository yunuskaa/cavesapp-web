import React from 'react';

import Button from 'shared/components/UI/Button';
import Textarea from 'shared/components/UI/Textarea';
import Input from 'shared/components/UI/Input';
import Select from 'shared/components/UI/Select';

function StyleGuide() {
  return (
    <div className="container">
      <h1>Style Guide</h1>
      <hr />
      <h2>Buttons</h2>
      <br />
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
      <hr />
      <h2>Input</h2>
      <br />
      <div style={{ width: '400px' }}>
        <Input
          type="email"
          placeholder="Enter an e-mail address"
          label="E-MAIL ADDRESS"
          id="email"
        />
        <Input
          placeholder="Enter username"
          label="USERNAME"
          id="username"
          hasError
          message="Username field is required."
        />
      </div>
      <hr />
      <h2>Textarea</h2>
      <br />
      <div style={{ width: '400px' }}>
        <Textarea placeholder="Enter address" label="ADDRESS" id="address" />
        <Textarea
          placeholder="Enter description"
          label="DESCRIPTION"
          id="description"
          hasError
          message="Description field is required."
        />
      </div>
      <hr />
      <h2>Select</h2>
      <br />
      <Select
        label="Name"
        placeholder="Pick One"
        options={[
          { name: 1, title: 'Emirhan Engin' },
          { name: 2, title: 'Yunus aka' },
        ]}
        onSelectItem={name => {
          console.log('Hello?', name);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default StyleGuide;
