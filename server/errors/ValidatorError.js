class ValidatorError extends Error {
    constructor(err) {
        super(err._message);
        this.name = 'ValidatorError';
        this.property = err.message;
        this.status = 500;
        this.details = this.makeErrorsObject(err.errors)
    }

    makeErrorsObject(errors) {
      let details = {};
      for (let err in errors) {
        details[err] = errors[err]['kind'];
      }
      return details;
    }
}

module.exports = ValidatorError;
