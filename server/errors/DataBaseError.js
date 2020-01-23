class DataBaseError extends Error {
    constructor(property) {
        super('This is inner database error.');
        this.name = 'DataBaseError';
        this.property = property;
        this.status = 500;
    }
}

module.exports = DataBaseError;
