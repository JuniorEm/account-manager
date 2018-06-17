var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    age : Number,
    creation_date : { type : Date, default : Date.now },
    money : {
        updated : { type : Date, default : Date.now },
        value : Number
    }
});

module.exports = userSchema;

