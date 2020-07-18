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

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought)

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtsbyID)
    .put(updateThought)
    .delete(deleteThought);

// Reactions /api/thoughts/:thoughtId/reactions 
router
    .route('/:thoughtId/reactions/:reactionId?')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;