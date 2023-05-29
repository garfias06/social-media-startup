const router = require('express').Router();

const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

const { addFriend, deleteFriend } = require('../../controllers/reactionController');

// gets all users
router.route('/').get(getUsers).post(createUser);

// gets a single user by _id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add new friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
