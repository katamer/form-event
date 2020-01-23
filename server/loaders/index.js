const expressLoader = require('./express.js'),
      mongooseLoader = require('./mongoose.js');

let init = async (app) => {
        console.log('MongoDB Initialized');
        await expressLoader(app);
        console.log('Express initialized');
      };

module.exports = {
    init: init
};
