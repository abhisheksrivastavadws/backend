const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors()) // Use this after the variable declaration

const { chapter } = require('./handlers/chapter')
app.get('/', (req,res)=> {
  res.send("This is my demo")
});
app.get('/chapter', chapter);

// app.get('/', (req, res) => {
//     res.send('Ima change this up!');
// });

// app.get('/api/games/:id', (req, res) => {
//   res.send(req.params.id);
// });

app.listen(3001, () => console.log('Listening on port 3001'));