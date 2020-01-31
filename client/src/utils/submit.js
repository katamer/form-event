import { SubmissionError } from 'redux-form';
import { sendUserData } from '../services/form.js';

function submit(user) {
  return sendUserData(user).then(() => {
    window.alert(`You submitted:\n\n${JSON.stringify(user, null, 2)}`)
  })
  .catch(err => {
    throw new SubmissionError({
      username: 'User does not exist',
      _error: 'Login failed!'
    });
  });
}

export default submit