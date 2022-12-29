const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Merchant Schema
const MerchantSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  brand: {
    type: String,
  },
  business: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "Waiting Approval",
    enum: ["Waiting Approval", "Rejected", "Approved"],
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

//MerchantModel = Mongoose.model("Merchant", MerchantSchema);

module.exports =
  Mongoose.models.Merchant || Mongoose.model("Merchant", MerchantSchema);
