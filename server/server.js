const express = require('express');
const path = require('path')
const app = express();
var bodyParser = require('body-parser');
var public = path.join(__dirname, './../public')

app.use(express.static(public));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`index.html`);
});

app.post('/login', function(req, res, next) {
  console.log(`email: ${req.body.email} password ${req.body.password}`)
  if(req.body.email === "john@smith.com" && req.body.password === "heydue"){
  next();
} else {
  res.status(400).send('{"authtoken": "youfailed"}');
}
}, function (req, res, next){
  console.log(req.body);
  res.send('{"authtoken": "youpassed"}');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

var authenticate = function (req, res, next){
      if(req.body.email === "john@smith.com" && req.body.password === "heydue"){
      next();
    } else {
      res.status(400).send({"authtoken": "nope"});
    }};
