const validator = require('validator'),
      mongoose = require('mongoose'),
      { ValidatorError } = require('../errors'),
      { Schema } = mongoose,

      applicantSchema = new Schema({ // walidacja? raczej sanityzacja
        firstName: {
          type: String,
          required: true,
          lowercase: true
        },
        lastName:  {
          type: String,
          required: true,
          lowercase: true
        },
        email: {
          type: String,
          /*required: true,
          unique: true, // how to send info that this email exists already?
          lowercase: true,
          validate: [ validator.isEmail, 'invalid email']*/
        }
      });

      applicantSchema.statics.add = function (applicant) {
        return new Promise((resolve, reject) => {
          this.create(applicant, (err, docs) => {
              if (err) {
                 //console.dir(err);
                 if(err.name === 'ValidationError') {
                    reject(new ValidatorError(err))
                 }
                 reject(err);
              }
              resolve(docs);
          });
        });
      };


module.exports = applicantSchema;
