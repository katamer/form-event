const bodyParser = require('body-parser'),
      indexRouter = require('../routes/indexRouter.js'),
      { NotFoundError } = require('../errors'),
      { env } = require('../config/config.js');


module.exports = (app) => {
    if(env !== 'production') {
       app.use(require('morgan')('dev'));
    }

    app.set('trust proxy', true);
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    app.use(bodyParser.json());
    app.use('/', indexRouter);
    app.use((req, res, next) => {
        next(new NotFoundError(''));
    });

    app.use((err, req, res, next) => {
        const { status, message, name, details={} } = err;
        //console.dir(err);
        res.status(status || 500).json({
            error: {
                code: name,
                message: message,
                details: details
            }
        });
    });

    return app;
};
