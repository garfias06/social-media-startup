const { Schema, model } = require('mongoose');
const reactions = require('./Reaction');

const dateToday = require('../utils/helpers')

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
            get: (x) => dateToday(x),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactions]
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;