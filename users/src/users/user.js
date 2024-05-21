const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String,
});

const usersModule = mongoose.model('user', userSchema);

module.exports = usersModule;