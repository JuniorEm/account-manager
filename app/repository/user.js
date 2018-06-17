var mongoose = require('mongoose');
var userSchema = require('../model/user');
const url = "mongodb://127.0.0.1/test";

class UserRepository {

    constructor() {
        mongoose.connect(url);
        mongoose.Promise = global.Promise;
    }

    create(user) {
        let UserModel = mongoose.model('UserModel', userSchema);
        let userInstance = this._getUserInstance(UserModel, user);

        return new Promise((res, rej) => {
            userInstance.save((err) => {
                if (err) rej({ status_code: 500, status: err });
                res({ status_code: 200, status: "OK" });
            });
        });
    }

    findById(id) {
        let UserModel = mongoose.model('UserModel', userSchema);
        return new Promise((res, rej) => {
            UserModel.findById(id, (err, user) => {
                if (err) rej({ status_code: 500, status: err });
                res(user);
            });
        });
    }

    update(user) {
        let UserModel = mongoose.model('UserModel', userSchema);
        user.money.updated = Date.now();
        return new Promise((res, rej) => {
            UserModel.findOneAndUpdate({ "_id": user._id }, user, (err) => {
                if (err) rej({ status_code: 500, status: err });
                res({ status_code: 200, status: "OK" });
            });
        });
    }

    delete(id) {
        let UserModel = mongoose.model('UserModel', userSchema);

        return new Promise((res, rej) => {
            UserModel.deleteOne( { "_id" : id }, (err) => {
                if (err) rej({ status_code: 500, status: err });
                res({ status_code: 200, status: "OK" });
            });
        });
    }

    _getUserInstance(UserModel, user) {
        return new UserModel({
            name: user.name,
            age: user.age,
            creation_date: user.creation_date,
            money: user.money
        });
    }
}

module.exports = () => {
    return UserRepository;
}
