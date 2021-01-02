const express = require('express');
const morgan = require('morgan');
const MenuRouter = require('./routes/router module/MenuRouter');
const MoCRouter = require('./routes/router module/MoCRouter');
const TshirtRouter = require('./routes/router module/TshirtRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', MoCRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Master Of Cravetion</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});