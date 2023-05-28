const { Schema, model } = require('mongoose');
const reactions = require('./Reaction');

const dateToday = () => {
    let currentDate = new Date();
    let date = currentDate.toDateString()
    let time = currentDate.toLocaleTimeString()
    // console.log(`${date} at ${time}`);
    return `${date} at ${time}`
}

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateToday,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactions]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;