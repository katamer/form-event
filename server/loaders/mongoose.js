const mongoose = require('mongoose');
const { db: { host, db, user, password, port } } = require('../config/config.js');

class Database {
    async _connect() {
        try {
            const connection = await mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`,
                { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Database connection successful');
            return connection;
        } catch (e) {
            console.error('Database connection error here');
			console.error(e);
            process.exit(1);
        }
    }
}

module.exports = new Database();
