const { api: { port } } = require('./config/config.js'),
      loaders = require('./loaders'),
      express = require('express');

 let startServer = async () => {
        const app = express();
        await loaders.init(app);

        app.listen(port, err => {
            if (err) {
                console.err(err);
                process.exit(1);
            }
            console.log(`Your server is ready on port ${port}!`);
        });
    };

startServer();

module.exports = startServer;