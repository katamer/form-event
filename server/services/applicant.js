const applicantSchema = require('../models/Applicant.js'),
      { DataBaseError } = require('../errors'),
      model = require('mongoose').model;

class Applicant {
    constructor() {
      this.ApplicantModel = model('applicant', applicantSchema);
    }

    async add(req, res, next) {
        try {
            await this.ApplicantModel.add(req.body);
            res.status(201).json({ message: 'New record was created', error: null});
        } catch (err) {
          next(err);
        }
    }
}

module.exports = new Applicant();
