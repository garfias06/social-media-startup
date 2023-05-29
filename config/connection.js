const { connect, connection } = require('mongoose');

connect('mongodb+srv://garfias23:mongo123@classactivities.htdjbvu.mongodb.net/socialNetwork1DB');

module.exports = connection;
