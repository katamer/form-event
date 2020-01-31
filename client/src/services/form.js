function sendUserData(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`http://localhost:8080/applicant`, requestOptions)
         .then(data => data.json())
         .catch(error => error);
}


export { sendUserData };