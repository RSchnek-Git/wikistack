const models = require('../models/');
const express = require('express');
const userRouter = express.Router();

userRouter.get('/', async (req, res, next) => {
    res.send(await models.User.findAll());
});

userRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    res.send(await models.User.findByPk(id));
    // res.send('we are in users/id')

});

userRouter.post('/', async (req, res, next) => {
    await models.User.create( {

    });
});
userRouter.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    await models.User.update({
        id
    })
})
userRouter.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    await models.User.destroy({
        where: {
            id
        }

    })
})
module.exports = userRouter;

