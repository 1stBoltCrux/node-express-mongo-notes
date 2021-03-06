
// the CREATE route

let ObjectID = require('mongodb').ObjectID
//the READ route
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)};
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })
  //the CREATE route
  const collection =
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred'})
      } else {
        res.send(result.ops[0])
      }
    })
  })
  // the DELETE route
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id)};
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send('Note' + id + 'deleted!')
      }
    })
  })
// the PUT route
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id)};
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(note);
      }
    })
  })
};
