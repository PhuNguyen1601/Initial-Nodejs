import express from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import cors from 'cors';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import properties from './config/properties';
import db from './config/db';

let app = express();

// Cors
// var whitelist = properties.CORS;
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };

// app.use(cors(corsOptions));

// Log
// app.use(morgan('combined'));

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
db.connect();

viewEngine(app);

// Routes
initWebRoutes(app);

let port = properties.PORT || 8080;

app.listen(port, () => {
    console.log(`Nodejs is running at http://localhost:${port}`);
});
