
var express = require ('express')
var app = express()
var bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
var dataBase = require('./Database.js')

app.post('/update', function (req, res) {
   dataBase.userAccount.update({firstName : req.body.firstName},{ $set:{firstName:req.body.updateName}}, function(err, raw){
       console.log(raw)
       console.log(err)
   })
   
    res.send("Data Addedd")
});

app.post('/findOneAndUpdate', function (req, res) {
    dataBase.userAccount.findOneAndUpdate({firstName : req.body.firstName},{$inc:{password:req.body.password}}, function(err, raw){
        console.log(raw)
        console.log(err)
    })
    
     res.send("Data upserted")
 });

 app.post('/upserted', function (req, res) {
     dataBase.userAccount.update({firstName : req.body.firstName},{$set :{place:req.body.place}},{upsert:true}, function(err, raw){
        console.log(raw)
        console.log(err)
    })
    
     res.send("Data upserted")
 });
app.post('/unSet', function (req, res) {
    dataBase.userAccount.update({firstName : req.body.firstName},{$unset:{firstName : undefined}}, function(err, data){
        console.log("Success")
    })
    res.send("unSetted")
  })

app.post('/inserted', function (req, res) {
    new  dataBase.userAccount({firstName: req.body.firstName, place: req.body.address}).save()
    res.send("insertted")
  })

app.get('/', function (req, res) {

  //  console.log(data)
    res.sendFile(__dirname+ '/index.html');
})

//  dataBase.userAccount.find({'firstName': 'John'}, function (err, data) {
    //  })
  /*var accOneF = new dataBase({firstName : "John"})
  var accOneL = new dataBase({lastName : "Doe"})
  var accOneE = new dataBase({email : "johndoe@gmail.com"})

  accOneE.save()
  accOneF.save()
  accOneL.save()*/
app.listen(8080)
console.log("Serve http://localhost:8080")



