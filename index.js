require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const original_url = []
const short_url = []

app.post('/api/shorturl', function(req, res){
  const url = req.body.url
  const foundIndex = originalUrls.indexOf(url)

  if(foundIndex < 0){
    
  }
  res.json(req.body.url)
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
