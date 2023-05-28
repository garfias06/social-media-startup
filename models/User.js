const { Schema, model } = require('mongoose');

const matchEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
// const matchEmail=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [matchEmail, 'Provide a valid email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount').get(function () {
        return this.friends.length;
    });

const User = model('user', userSchema);
module.exports = User;