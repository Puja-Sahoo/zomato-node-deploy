//const { response } = require('express');
const City = require('../Models/MLocations');

exports.getLocations = (req,res) => {
    City.find()
    .then(response =>{ res.status(200).json({message:"location Fetched Successfully", location: response})}
    )
    .catch(err => console.log(err)
       //timeout error       
        )
}
 