
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    _id: { type: Number, unique:true},
  userId: { type: Number, required: true },
        propertyType: { type: String, required: true },
        price: { type: String},
        propertyAge: { type: String, required: true },
        propertyDescription: { type: String, required: true },
        negotiable: { type: String, required: true },
        ownership: { type: String, required: true },
        propertyApproved: { type: String, required: true },
        bankLoan: { type: String, required: true },
  
});

const propertyModel = mongoose.model("Property", propertySchema);

module.exports = propertyModel;
