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
/*
exports.jar_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: jar detail: ' + req.params.id);
};*/
// for a specific jar.
exports.jar_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await jar.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle jar create on POST.
exports.jar_create_post = async function(req, res) {
 //res.send('NOT IMPLEMENTED: jar create POST');
 console.log(req.body)
    let document = new jar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"jar_material":"goat", "cost":12, "colour":"red"}
    document.material = req.body.material;
    document.colour = req.body.colour;
    document.cost = req.body.cost;
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
/*exports.jar_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: jar delete DELETE ' + req.params.id);
};*/
// Handle jar delete on DELETE.
exports.jar_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await jar.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
/*
// Handle jar update form on PUT.
exports.jar_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: jar update PUT' + req.params.id);
};*/
// Handle jar update form on PUT.
exports.jar_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await jar.findById( req.params.id)
 // Do updates of properties
 if(req.body.material) toUpdate.material = req.body.material;
 if(req.body.colour) toUpdate.colour = req.body.colour;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
   // Handle a show one view with id specified by query
exports.jar_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await jar.findById( req.query.id)
    res.render('jardetail',
   { title: 'jar Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a jar.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jar_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jarcreate', { title: 'jar Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };