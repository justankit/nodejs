const express = require('express');
const app = express();

app.get('/',(req, res) => {
	res.send("Hello world");
})

var wiki = require('./wiki.js');

app.use('/wiki',wiki)
app.listen(3000)