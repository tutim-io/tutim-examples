import React from 'react';
import { FormProvider } from '@tutim/headless';
import { Form, defaultFields } from '@tutim/fields';

const config = {
  fields: [
    { key: 'firstName', label: 'First Name', inputType: 'text' },
    { key: 'lastName', label: 'Last Name', inputType: 'text' },
  ],
};

const TutimForm = () => {
  return <Form onSubmit={console.log} config={config} />;
};

const App = () => {
  return (
    <div className="App">
      <FormProvider fieldComponents={defaultFields}>
        <TutimForm />
      </FormProvider>
    </div>
  );
};

export default App;