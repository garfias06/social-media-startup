const { Schema, Types } = require('mongoose');

const dateToday = () => {
  let currentDate = new Date();
  let date = currentDate.toDateString()
  let time = currentDate.toLocaleTimeString()
  // console.log(`${date} at ${time}`);
  return `${date} at ${time}`
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateToday,

    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }

)

module.exports = reactionSchema;
