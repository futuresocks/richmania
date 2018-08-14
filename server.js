const express = require('express');
const app = express();
const parser = require('body-parser')

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use(express.static('./client'))

app.use(require('./controllers/index'));

app.listen(3000, function(){
  console.log(`App listening on port ${this.address().port}`);
})
