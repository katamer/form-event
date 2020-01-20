import React from 'react';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form__field" {...input} placeholder={label} type={type} />
      {touched && (error && <span className="form__error">{error}</span>)}
    </div>
  </div>
)

export default renderField;
