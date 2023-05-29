const User = require('../models/User');

// Gets all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);

    } catch (err) {
        res.status(500).json(err);
    }
}

// Gets user by Id
const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId }).select('-__v');

        if (!user) {
            return res.status(404).json({ message: 'No user found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Creates a new user
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Updates user
const updateUser = async (req, res) => {
    try {
        const userUpdate = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        ).select('-__v');

        if (!userUpdate) {
            return res.status(404).json({ message: 'No user found' });
        }

        res.json(userUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Deletes user
const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findOneAndDelete(
            { _id: req.params.userId },
            { $pull: { users: req.params.userId } },
            { new: true }
        );

        if (!userDelete) {
            return res.status(404).json({ message: 'No user found' });
        }
        res.json({ message: 'User deleted' })
    } catch (err) {
        res.status(500).json(err);

    }
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser }
