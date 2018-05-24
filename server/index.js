const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const path = require('path');
const helpers = require('./schema.js')


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());



//GET all artists route
app.get('/artists', function(req, res) { 
  console.log("hit");
  helpers.artistHelpers.grabAll().then((data) => {
    res.send(data);
  })
})

//POST artist info route

app.post('/addartists', function(req, res){
  helpers.artistHelpers.save(req.body)
  res.sendStatus(200);
})


//Catch all route
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'), function(err) {
    if(err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});