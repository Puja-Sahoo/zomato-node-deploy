const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//structure of the document
const MenuSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    ingridients:{
        type: Array,
        require:true
    },
    restaurantId:{
        type: String,
        require:true
       
    },
    image:{
        type: String,
        require:true
    },
    qty:{
        type: Number,
        require:true
    },
    price:{
        type: Number,
        require:true
    },
    type:{
        type: String,
        require:true
    }
   
   
   
});

module.exports = mongoose.model('item', MenuSchema, 'items');