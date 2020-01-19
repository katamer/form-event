import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email } from '../../utils/validate';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const FieldLevelValidationForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
        validate={[required]}
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
        validate={[required]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={[email]}
      />
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