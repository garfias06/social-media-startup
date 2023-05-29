const {Thought, User} = require('../models');

// Gets all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err)
    }
}

// Gets a single thought
const getSingleThought = async (req, res) => {
    try {
        const singleThought = await Thought.findOne({ _id: req.params.thoughtId })
        if (!singleThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(singleThought);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Creates a single thought
const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        // test
        const user=await User.findOneAndUpdate(
            {_id: req.body.userId},
            {$addToSet:{thoughts:newThought._id}},
            {new:true}
        );

        if (!user) {
            return res.status(404).json({
              message: 'User not found',
            });
          }

        res.json('Thought created');
        // res.json(newThought);
    } catch (err) {
        res.status(500).json(err)
    }
}

// Updates a single thought
const updateThought = async (req, res) => {
    try {
        const thoughtUpdate = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!thoughtUpdate) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(thoughtUpdate);
    } catch (err) {

    }
}

// Deletes thought
const deleteThought=async (req,res)=>{
try {
    const thoughtDelete=await Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
        { $pull:{ thoughts: req.params.thoughtId }},
        { new: true }
        );

        if (!thoughtDelete) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json({message: 'Thought deleted'})
} catch (err) {
    res.status(500).json(err);
}
}

module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought}