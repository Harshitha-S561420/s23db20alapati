var express = require('express');
const jar_controlers= require('../controllers/jar');
var router = express.Router();
/* GET jar */
router.get('/jar/:id', jar_controlers.jar_view_all_Page );
module.exports = router;