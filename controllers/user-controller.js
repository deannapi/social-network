const { User } = require('../models');
const { db } = require('../models/User');

const userController = {
    // GET ALL users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: ''
            })
    }
}

module.exports = userController;