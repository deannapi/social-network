const { User, Thought} = require('../models');

const thoughtController = {
    // CREATE Thought to User
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id }},
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //  GET ALL Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // GET Thought By ID
    getThoughtsbyID({ params }, res) {

    },

    // UPDATE Thought
    updateThought({ params, body }, res) {

    },

    // DELETE Thought
    deleteThought({ params }, res) {

    },

    // CREATE Reaction
    createReaction({ params, body }, res) {

    },

    // DELETE Reaction
    deleteReaction({ params }, res) {

    },
};

module.exports = thoughtController;