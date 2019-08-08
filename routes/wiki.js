const express = require('express');
const wikiRouter = express.Router();
const addPage = require('../views/addPage');
const mainPage = require('../views/main')
const { Page } = require("../models");



wikiRouter.get('/', (req, res, next) => {
    res.send(mainPage());;
});

wikiRouter.post('/', async (req, res, next) =>  {
    let body = req.body;
    const user = new User({
        name: body.author,
        email: body.email
    });
    const page = new Page({
            title: body.title,
            content: body.content,
            status: body.status
        }
    );

    try {
        await user.save();
        await page.save();
        res.redirect('/');
    }
    catch (error) {
        next(error);
    }
    console.log(req.body);
    res.json(page);
});

wikiRouter.get('/add', async (req, res, next) => {
    
    await res.send(addPage());
    
});


module.exports = wikiRouter;