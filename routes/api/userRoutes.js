const router = require('express').Router();

const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

const { addFriend, deleteFriend } = require('../../controllers/reactionController');

// gets all users
router.route('/').get(getUsers);

// gets a single user by _id
router.route('/:userId').get(getSingleUser);

// create new user
router.route('/').post(createUser);

// update a user 
router.route('/').put(updateUser);

// delete a user
router.route('/').delete(deleteUser);

// add new friend
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);
