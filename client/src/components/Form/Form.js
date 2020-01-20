import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email } from '../../utils/validate';
import renderDatePicker from './renderDatePicker/renderDatePicker';
import renderField from './renderField/renderField';

import './Form.css';

const FieldLevelValidationForm = ({ handleSubmit, submitting }) => {
  const fields = [
    {name: 'firstName', type: 'text', component: renderField, label: 'First Name', validate: [required]},
    {name: 'lastName', type: 'text', component: renderField, label: 'Last Name', validate: [required]},
    {name: 'email', type: 'email', component: renderField, label: 'Email', validate: [email, required]},
    {name: 'date', type: 'date', component: renderDatePicker, label: 'Choose Event Date', validate: [required]}
  ];

  return (
    <form onSubmit={handleSubmit}>
      {
        fields.map(fields => (
          <Field
            name={fields['name']}
            type={fields['text']}
            component={fields['component']}
            label={fields['label']}
            validate={fields['validate']}
          />
        ))
      }
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
