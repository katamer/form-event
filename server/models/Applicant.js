const validator = require('validator'),
      mongoose = require('mongoose'),
      { ValidatorError } = require('../errors'),
      { Schema } = mongoose,

      applicantSchema = new Schema({ 
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
          required: true,
          unique: true, 
          lowercase: true,
          validate: [ validator.isEmail, 'invalid email']
        }
      });

      applicantSchema.statics.add = function (applicant) {
        return new Promise((resolve, reject) => {
          this.create(applicant, (err, docs) => {
              if (err) {
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
