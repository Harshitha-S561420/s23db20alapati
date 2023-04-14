var jar = require('../models/jar');
// List of all jar
// List of all jar
exports.jar_list = async function(req, res) {
    try{
    thejar = await jar.find();
    res.send(thejar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*exports.jar_list = function(req, res) {
 res.send('NOT IMPLEMENTED: jar list');
};*/
// Handle jar create on POST.

// for a specific jar.
exports.jar_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: jar detail: ' + req.params.id);
};
// Handle jar create on POST.
exports.jar_create_post = async function(req, res) {
 //res.send('NOT IMPLEMENTED: jar create POST');
 console.log(req.body)
    let document = new jar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"jar_type":"goat", "cost":12, "size":"large"}
    document.jar_type = req.body.jar_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle jar delete form on DELETE.
exports.jar_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: jar delete DELETE ' + req.params.id);
};
// Handle jar update form on PUT.
exports.jar_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: jar update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.jar_view_all_Page = async function(req, res) {
    try{
    thejar = await jar.find();
    res.render('jar', { title: 'jar Search Results', results: thejar });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };