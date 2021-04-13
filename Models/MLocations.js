const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//structure of the document
const locationSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    city_id:{
        type: String,
        require:true
    },
    location_id:{
        type: String,
        require:true
    },
    country_name:{
        type: String
       
    },
    city:{
        type: String,
       
    }
   
});

module.exports = mongoose.model('city', locationSchema);
//name of the actual collection is in pural (cities-city)