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
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;