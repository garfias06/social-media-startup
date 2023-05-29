const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

const { createReaction, deleteFriend } = require('../../controllers/reactionController');

// get all thoughts
router.route('/').get(getThoughts);

// get single thought by _id
router.route('/:thoughtId').get(getSingleThought);

// create a thought
router.route('/').post(createThought);

// update a thought
router.route('/:thoughtId').put(updateThought);

// delete a thought
router.route('/:thoughtId').delete(deleteThought);

// add reaction
router.route('/:thoughtId/reactions').post(createReaction);

// delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteFriend);