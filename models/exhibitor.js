const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exhibitorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  picturePath: { type: String, required: true },
});
module.exports = mongoose.model("Exhibitor", exhibitorSchema);
