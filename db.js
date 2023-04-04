const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try{
        mongoose.connect("mongodb+srv://comp3133_2023:SAFA.aru1993@cluster1.mjmolun.mongodb.net/comp3133_assignment1?retryWrites=true&w=majority", connectionParams);
        console.log('\n\t***Connected to database*** \n');
    }
    catch(err){
        console.log('Error connecting to the database. \n', err);
    }
 }
