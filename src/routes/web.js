// Import Routes
import homeRouter from './home';

function initWebRoutes(app) {
    app.use('/api/', homeRouter);
}

module.exports = initWebRoutes;
