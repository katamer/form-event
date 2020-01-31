import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, email } from '../../utils/validators';
import submit from '../../utils/submit';
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
    <form className="form__wrapper" onSubmit={handleSubmit(submit)}>
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
      <div className="form__button-wrapper">
        <button className="form__button" type="submit" disabled={submitting}>
          Join Event
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
