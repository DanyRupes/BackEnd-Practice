var express = require('express')
var app = express()
// var router = express.Router();
var appRoutes = require('./appRoutes.js');

  
  
  app.use('/',appRoutes);
   
    app.listen(8080)
console.log('Server 8080: http://127.0.0.1:8080');




        // router.get('/', function(req, res){
        //     res.send("hello dood ")
        // })
        
        // router.get('/aBout', function(req, res){
        //     res.send("hello dood ")
        // })