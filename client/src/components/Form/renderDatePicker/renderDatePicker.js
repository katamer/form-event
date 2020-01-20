import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const renderDatePicker = ({input, label, type, meta: {touched, error} }) => (
   <div>
     <label>{label}</label>
     <div>
        <DatePicker
          {...input}
          minDate={new Date()}
          selected={input.value ? new Date(input.value) : null}
          onChange={date => input.onChange(date)}/>
          {touched && error && <span className="form__error">{error}</span>}
     </div>
  </div>
);

export default renderDatePicker;
