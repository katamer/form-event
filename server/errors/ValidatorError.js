class ValidatorError extends Error {
    constructor(property, _message, errors) {
        super(_message);
        this.name = 'ValidatorError';
        this.property = property;
        this.status = 500;
        this.details = this.makeErrorsObject(errors)
    }

    makeErrorsObject(errors) {
      console.log('make')
      let details = {};
      for (err in errors) {
         console.dir(err);
         details[err] = err.kind;
      }
      this.details = details;
    }
}

module.exports = ValidatorError;
