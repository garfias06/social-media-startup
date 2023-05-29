const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

const { createReaction, deleteFriend } = require('../../controllers/reactionController');

// get all thoughts
router.route('/').get(getThoughts).post(createThought);

// get single thought by _id
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// add reaction
router.route('/:thoughtId/reactions').post(createReaction);

// delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteFriend);

module.exports = router;
