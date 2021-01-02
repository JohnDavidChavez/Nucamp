const express = require('express');
const MoCRouter = express.Router();
const MenuRouter = express.Router();
const TshirtRouter = express.Router();
const CustomerRouter = express.Router();

MenuRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Read recipe ID');
})
.post((req, res) => {
    res.end(`Create new recipe ID: ${req.body.name} : ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Update recipe ID');
})
.delete((req, res) => {
    res.end('Deleting recipes ID');
});

TshirtRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Read T-shirt ID');
})
.post((req, res) => {
    res.end(`Create new T-shirt ID: ${req.body.name} : ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Update t-shirt ID');
})
.delete((req, res) => {
    res.end('Deleting T-shirt ID');
});

CustomerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Create New Recipe from Customer ID: ${req.body.name} : ${req.body.description}`);
})
.post((req, res) => {
    res.end(`Create new customer ID: ${req.body.name} : ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Update customer ID');
})
.delete((req, res) => {
    res.end('Deleting customer ID');
});

module.exports = MoCRouter;