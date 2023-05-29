const User=require('../models/User')
const Thought=require('../models/Thought')
const Reaction=require('../models/Reaction')

// creates reactions to thoughts
const createReaction=async (req,res)=>{
try {
    const newReaction= await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet:{reactions:req.body}},
        {runValidators: true, new:true}
    );

    if (!newReaction) {
        return res.status(404).json({ message: 'Not thought found' });
      }

      res.json(newReaction)
} catch (err) {
    res.status(500).json(err);
}
}

// deletes reactions to thoughts
const deleteReaction=async (req,res)=>{
    try {
        const reactionDelete= await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull:{reactions:{reactionId:req.params.reactionId}}},
            {runValidators: true, new:true}
        );
    
        if (!reactionDelete) {
            return res.status(404).json({ message: 'Not thought found' });
          }
    
          res.json({message: 'Reaction deleted'})
        } catch (err) {
        res.status(500).json(err);
    }
    }

// creates (adds) new friend
const addFriend=async(req,res)=>{
    try {
        const newFriend=await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: req.body },
            { runValidators: true, new: true }
        ).select('-__v');

        if (!newFriend) {
            return res.status(404).json({ message: 'Not thought found' });
          }

    } catch (err) {
        res.status(500).json(err);
    }
}

// delete friend
const deleteFriend=async(req,res)=>{
    try {
        const friendDelete=await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {users:{userId:req.params.userId}} },
            { runValidators: true, new: true }
        ).select('-__v');

        if (!friendDelete) {
            return res.status(404).json({ message: 'Not thought found' });
          }

          res.json({message: 'Friend deleted'})

    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports={createReaction, deleteReaction, addFriend, deleteFriend}