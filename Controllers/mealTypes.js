const MealType = require('../Models/MMealTypes');

exports.getMealTypes = (req,res) => {
    MealType.find()
    .then(response =>{ res.status(200).json({message:"MealType Fetched Successfully", mealTypes : response})}
    )
    .catch(err => console.log(err)
       //timeout error       
        ) 
}
 