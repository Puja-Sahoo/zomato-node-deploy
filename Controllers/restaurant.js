const Restaurant = require('../Models/MRestaurant');

exports.getRestaurantByLocation =(req,res) =>{
    const locationId = Number(req.params.locationId);
    Restaurant.find({ location_id: locationId })
    .then(response =>{ res.status(200).json({message:"Restaurant Fetched Successfully", restaurant: response})}
    ) 
    .catch(err => res.status(500).json({ error: err })
       //timeout error       
        )
}
exports.filterRestaurants = (req,res) => {
    const requestBody = req.body;
    const mealType = requestBody.mealType;
    const location = requestBody.location;
    const cuisine = typeof requestBody.cuisine === 'undefined'? [] : requestBody.cuisine;
    const hcost = requestBody.hcost;
    const lcost = requestBody.lcost;
    const sort = requestBody.sort? requestBody.sort:1;
    const page = requestBody.page? requestBody.page:1;

    let payload = {};

    const countPerPage=2;
    let startIndex;
    let endIndex;


    startIndex = Number (page * countPerPage)-countPerPage;
    endIndex = Number(page * countPerPage);

    if (mealType){
        payload={mealtype_id:mealType}
    }
    if (mealType  && location ){
        payload={mealtype_id:mealType , location_id: location}
    }
    if (mealType && cuisine.length>0){
        payload={mealtype_id:mealType,  cuisine: { $elemMatch: { id: { $in: cuisine} } }}
    }
    if (mealType  && location && cuisine.length>0 ){
        payload={mealtype_id:mealType , location_id: location ,  cuisine: { $elemMatch: { id: { $in: cuisine} } }}
    }
    if (mealType && lcost && hcost){
        payload={mealtype_id:mealType , min_price:{$lte:hcost, $gte:lcost}}
    }
    if (mealType && location && lcost && hcost){
        payload={mealtype_id:mealType, location_id: location , min_price:{$lte:hcost, $gte:lcost}}
    }
    if (mealType && cuisine.length>0 && lcost && hcost){
        payload={mealtype_id:mealType,  cuisine: { $elemMatch: { id: { $in: cuisine} } } , min_price:{$lte:hcost, $gte:lcost}}
    }
    if (mealType && location  && cuisine.length>0 && lcost && hcost){
        payload={mealtype_id:mealType, cuisine: { $elemMatch: { id: { $in: cuisine} } }, location_id: location , min_price:{$lte:hcost, $gte:lcost}}
    }
    Restaurant.find(payload).sort({min_price: sort})
         .then(response => {
             const filterResponse= response.slice(startIndex, endIndex);
             const pageCount = Math.ceil(response.length/countPerPage);
             const pageCountArr = [];
             for(let i=1; i<= pageCount; i++){
                pageCountArr.push(i);
            }

             res.status(200).json({message: "Restaurant filterd Successfully", restaurant:filterResponse ,  pageCount:pageCountArr ,totalCount:response.length })
         })
         .catch(err =>{
            res.status(500).json({error:err})
         })
 }
 exports.getRestaurantDetailsById = (req,res) =>{
     const restaurantId = req.params.restaurantId;
     Restaurant.findById(restaurantId)
         .then(response =>{
            res.status(200).json({message: "Restaurant filterd Successfully", restaurant: response})
         })
         .catch(err =>{
            res.status(500).json({error:err})
         })

 }
 // getRestaurantByCity function to get restaurants by city name
exports.getRestaurantByCity = (req, res) => {
    const cityId = req.params.cityId;
    Restaurant.find({ city_id: cityId }).then(result => {
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurantList: result })
    }).catch(err => console.log(err));
}


 //CROS - Cross origin Resource Sharing
 // origin- port, platform, server

//  exports.getMenuItemsByRestaurant = (req,res) =>{
//     const rest_name = req.params.restName;
//     Restaurant.find({ name: rest_name})
//         .then(response =>{
//             const menu = response.filter(elem => elem.cuisine)
//            res.status(200).json({message: "Menu of the given restaurant found Successfully", restaurant: menu})
//         })
//         .catch(err =>{
//            res.status(500).json({error:err})
//         }) 

// }  