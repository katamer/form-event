const dotenv = require('dotenv');
dotenv.config();

const config = {
    env: process.env.NODE_ENV,
    db: {
        host: 'localhost',
        port: process.env.DB_PORT || 27017,
        db: 'event',
        collection: 'applicants',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || ''
    },
    api: {
        port: process.env.SERVER_PORT || 8080
    }
};

module.exports = config;