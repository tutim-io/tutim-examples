import React from 'react';
import { FormProvider, useForm } from '@tutim/headless';
import { InputType } from '@tutim/types';

const config = {
  fields: [
    { key: 'firstName', label: 'First Name', inputType: 'text', defaultValue: 'John' },
    { key: 'lastName', label: 'Last Name', inputType: 'text' },
  ],
};

const HeadlessForm = () => {
  const { fieldsByKey, watch, handleSubmit } = useForm(config);
  const name = watch('firstName');
  const style = { display: 'flex', flexDirection: 'column', gap: '5px' };

  return (
    <form onSubmit={handleSubmit(console.log)} style={style}>
      {fieldsByKey['firstName']}
      {name === 'John' && fieldsByKey['lastName']}
      <input type="submit" />
    </form>
  );
};

const fieldComponents = {
  [InputType.Text]: ({ inputProps }) => <input {...inputProps} style={{ color: "green" }} />,
};

const App = () => {
  return (
    <div className="App">
      <FormProvider fieldComponents={fieldComponents}>
        <HeadlessForm />
      </FormProvider>
    </div>
  );
};

export default App;
