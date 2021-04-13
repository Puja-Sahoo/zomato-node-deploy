const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//structure of the document
const RestaurantSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    city:{
        type: String,
        require:true
    },
    location_id:{
        type: Number,
        require:true
       
    },
    city_id:{
        type: Number,
        require:true
       
    },
    locality:{
        type: String,
        require:true
    },
    
    thumb:{
        type: Array,
        require:true
       
    },
    min_price:{
        type: Number,
        require:true
       
    },
    contact_number:{
        type: Number,
        require:true
    },
    image:{
        type: String,
        require:true
       
    },
    cuisine:{
        type:Array,
        require:true
    },
    mealtype_id:{
        type: Number,
        require:true
    }   
});

module.exports = mongoose.model('restaurantData', RestaurantSchema ,'restaurantDatas');
//name of the actual collection is in pural (cities-city)