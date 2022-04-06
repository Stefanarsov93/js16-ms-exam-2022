const computers = require('../pkg/portable-computer');

const getAll = async (req, res) => {
    try {
        let cp = await computers.getAllComputer();
        return res.status(200).send(cp);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let cp = await computers.getOne(req.params.id);
        return res.status(200).send(cp);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        let c = await computers.addComputer(req.body);
        return res.status(201).send(c);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await computers.updateComputer(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        await computers.updateComputer(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        await computers.removeComputer(req.params.id);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
};