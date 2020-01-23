class NotFoundError extends Error {
    constructor(property) {
        super(`The requested ${property} couldn't be found`);
        this.name = 'NotFoundError';
        this.property = property;
        this.status = 404;
    }
}

module.exports = NotFoundError;