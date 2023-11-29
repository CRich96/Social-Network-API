const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-contoller');

// GET all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// 
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

//PULL reaction
router.route('/:thoughtId/reactions').post(createReaction);


//Delete Reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// Export Router
module.exports = router;