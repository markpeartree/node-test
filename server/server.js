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

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('{"fuck": "you dude"}');
});

app.get('/', (req, res) => {
  res.sendFile(`mppapp.html`);
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
