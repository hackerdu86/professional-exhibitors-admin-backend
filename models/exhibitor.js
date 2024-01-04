const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exhibitorSchema = new Schema({
});

module.exports = mongoose.model("Exhibitor", exhibitorSchema);