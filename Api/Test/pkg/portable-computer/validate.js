const { Validator } = require('node-input-validator');

const Computer = {
    brand: 'String',
    model: 'String',
    cpu_cores: Number,
    ram: Number,
    disk: 'String',
    price: Number,
    stores: [store],
    num_ports: { usb, hdmi, audio, sdcard },
    created: Date
};

const ComputerPartial = {
    brand: 'String',
    model: 'String',
    cpu_cores: Number,
    ram: Number,
    disk: 'String',
    price: Number,
    stores: [store],
    num_ports: { usb, hdmi, audio, sdcard },
    created: Date
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Computer,
    ComputerPartial,
    validate
};