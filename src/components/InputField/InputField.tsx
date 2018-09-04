import * as React from 'react';
import { Input,FormFeedback } from 'reactstrap';

const InputField = ({
  input,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
    <div>
      <Input
        {...input}
        type={type}
        name={name}
        placeholder={placeholder}
        invalid={!!(touched && error)}
      />
      <FormFeedback>{error}</FormFeedback>
    </div>
  );

export default InputField;