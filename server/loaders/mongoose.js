const mongoose = require('mongoose');
const { db: { host, db, port } } = require('../config/config.js');

class Database {
    constructor() {
        this._connect();
    }
    async _connect() {
        try {
            const connection = await mongoose.connect(`mongodb://${host}:${port}/${db}?authSource=admin`,
                { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Database connection successful');
            return connection;
        } catch (e) {
			console.error(e);
            process.exit(1);
        }
    }
}

module.exports = new Database();
