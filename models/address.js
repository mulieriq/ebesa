const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Address Schema
const AddressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

//AddressModel = Mongoose.model('Address', AddressSchema);

module.exports =
  Mongoose.models.Address || Mongoose.model("Address", AddressSchema);
