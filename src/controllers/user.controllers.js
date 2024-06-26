const catchError = require('../utils/catchError');
const User = require('../models/User');


const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await User.findAll()
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const { firstName, lastName, email, password, birthday } = req.body;
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        birthday
    })
    return res.status(201).json(user)
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const users = await User.findByPk(id);
    return res.json(users);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({where: {id: id}});
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    const {firstName, lastName, email, password, birthday } = req.body;
    const { id } = req.params;
    const user = await User.update({
        firstName,
        lastName,
        email,
        password,
        birthday 
    }, {where: {id}, returning: true});

    return res.json(user[1][0])
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};