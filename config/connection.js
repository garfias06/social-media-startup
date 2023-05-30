const { connect, connection } = require('mongoose');

connect('mongodb+srv://garfias23:mongo123@classactivities.htdjbvu.mongodb.net/socialNetwork5DB');

module.exports = connection;
