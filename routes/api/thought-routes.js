const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtsbyID,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought)
    .get(getAllThoughts);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtsbyID)
    .put(updateThought)
    .delete(deleteThought)
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;