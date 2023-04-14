// API for our resource
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"jar", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
   };