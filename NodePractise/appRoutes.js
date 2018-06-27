var router = require('express').Router();
var path = require('path')


router.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
    // console.log(__dirname);
    // console.log(path.join(__dirname, '/rooting/../'));
   });
router.get('/contacts', function(req, res){
    res.sendFile(__dirname+ '/contacts/contact.html');
});


router.get('/about', function(req, res){
    res.sendFile(__dirname+ '/about/about.html');
});
   

router.get('/login', function(req, res){
    res.sendFile(__dirname + '/login/login.html')
})

$("back_to_home").on("Click", function(){
    router.get('/', function(req, res){
        console.log(__dirname + '/../')
        res.sendFile(__dirname + '/../')
    })
})
module.exports = router; 