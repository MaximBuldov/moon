const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    date: {type: Date, default: Date.now},
    details: {type: String},
    total: {type: String}
})

module.exports = model('Order', schema)