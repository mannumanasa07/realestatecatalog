
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    _id: { type: Number, unique:true},
  userId: { type: Number, required: true },
        propertyType: { type: String },
        price: { type: String},
        propertyAge: { type: String },
        propertyDescription: { type: String },
        negotiable: { type: String},
        ownership: { type: String },
        propertyApproved: { type: String},
        bankLoan: { type: String },
        length: { type: String },
        totalarea: { type: String },
        noofBHK: { type: String },
        attached: { type: String },
        furnished: { type: String },
        lift: { type: String },
        facing: { type: String },
        breadth: { type: String },
        areaunit: { type: String },
        nooffloors: { type: String },
westerntoilet:{ type: String},
carparking: { type: String },
electricity: { type: String },
name: { type: String },
postedby: { type: String },
featurepackage: { type: String },
mobile: { type: String },
saletype: { type: String },
ppdpackage: { type: String },
email: { type: String },
area: { type: String },
address: { type: String },
latitude: { type: String },
city: { type: String },
pincode: { type: String },
landmark: { type: String },
longitude: { type: String }
  
});

const propertyModel = mongoose.model("Property", propertySchema);

module.exports = propertyModel;
