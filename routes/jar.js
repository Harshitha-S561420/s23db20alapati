var express = require('express');
const jar_controlers= require('../controllers/jar');
var router = express.Router();
/* GET jar */
router.get('/', jar_controlers.jar_view_all_Page );
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET detail jar page */
router.get('/detail', jar_controlers.jar_view_one_Page);
/* GET create jar page */
router.get('/create',secured, jar_controlers.jar_create_Page);
/* GET create update page */
router.get('/update', jar_controlers.jar_update_Page);
/* GET delete jar page */
router.get('/delete',secured,jar_controlers.jar_delete_Page);
module.exports = router;
