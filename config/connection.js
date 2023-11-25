// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
// Variables or using the default URI if the environment variable is not set
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/RichardsDB',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
module.exports = mongoose.connection