import express from 'express';
let router = express.Router();
// Controller
import homeController from '../app/controllers/HomeController';

router.get('/search', homeController.search);
router.get('/', homeController.home);

module.exports = router;
