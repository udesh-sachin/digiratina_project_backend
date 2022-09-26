const { Schema, default: mongoose, model } = require("mongoose");

const bankSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    nic : {
        type: String,
        required:true,
         
    },
    email: {
        type: String,
        required:true

    },
    address1: {
        type: String,
        required:true
    },
    address2: {
        type: String,
        required:true
    }
});

const Account = mongoose.model("abcBank" ,bankSchema);
module.exports = Account;
