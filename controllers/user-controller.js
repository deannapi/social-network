const { User } = require('../models');
const { db } = require('../models/User');

const userController = {
    // GET ALL users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // GET User by ID
    getUserbyID({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then((dbUserData) => {
                // if no User found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // CREATE User
    createUser({ body }, res) {
        User.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },

    // UPDATE User
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // DELETE User
    deleteUser({ params}, res) {
        User.findOneAndDelete({ _id: params.id })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // CREATE Friend
    addFriend({ params, body }, res) {
        console.log(params.userId);
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this id."});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // DELETE Friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: { username: params.username }}},
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
};

module.exports = userController;