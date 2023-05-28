const Thought = require('../models/Thought');

const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err)
    }
}

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


module.exports = { getThoughts, getSingleThought,  }