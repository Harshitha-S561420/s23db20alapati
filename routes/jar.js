var express = require('express');
const jar_controlers= require('../controllers/jar');
var router = express.Router();
/* GET jar */
router.get('/', jar_controlers.jar_view_all_Page );
/* GET detail jar page */
router.get('/detail', jar_controlers.jar_view_one_Page);
module.exports = router;
