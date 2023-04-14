var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jar_controller = require('../controllers/jar');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// jar ROUTES ///
// POST request for creating a jar.
router.post('/jar', jar_controller.jar_create_post);
// DELETE request to delete jar.
router.delete('/jar/:id', jar_controller.jar_delete);
// PUT request to update jar.
router.put('/jar/:id', jar_controller.jar_update_put);
// GET request for one jar.
router.get('/jar/:id', jar_controller.jar_detail);
// GET request for list of all jar items.
router.get('/jar', jar_controller.jar_list);
module.exports = router;