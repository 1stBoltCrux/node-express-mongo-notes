const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 8000;

//this parses url encoded data so we don't get undefined returned in the terminal upon a post request
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(db.url, (err, client) => {
  if (err) return console.log(err);


let db = client.db('teds-test-database')

require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('This is: ' + port);
  })
})
