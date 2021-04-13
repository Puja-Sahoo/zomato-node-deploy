const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//structure of the document
const MealTypeSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    content:{
        type: String,
        require:true
    },
    image:{
        type: String,
        require:true
    },
    meal_type:{
        type: Number,
        require: true
    
    }
   
});

module.exports = mongoose.model('mealType', MealTypeSchema, 'mealTypes');