const mongoose = require('mongoose');

const computer = mongoose.model(
    'Computer', {
    brand: 'String',
    model: 'String',
    cpu_cores: Number,
    ram: Number,
    disk: 'String',
    price: Number,
    stores: [store],
    num_ports: { usb, hdmi, audio, sdcard },
    created: Date

},
    'Computer'
);

const addComputer = async (Computer) => {
    let c = new Computer(Computer);
    return await c.save();
};

const removeComputer = async (id) => {
    return await Computer.deleteOne({ _id: id });
};

const updateComputer = async (index, team) => {
    return await Computer.updateOne({ _id: id }, Computer);
};

const getAllComputer = async () => {
    return await Computer.find({});
};

const getOne = async (index) => {
    return await Computer.findOne({ _id: id });
};

module.exports = {
    addComputer,
    removeComputer,
    updateComputer,
    getAllComputers,
    getOne
};