
const Item = require('../Models/MItem');
exports.getMenuItemsByRestaurant = (req,res) =>{
    const rest_Id = req.params.restId;
    Item.find({ restaurantId : rest_Id})
        .then(response =>{
            
           res.status(200).json({message: "Menu of the given restaurantID found Successfully", itemsList:response})
        })
        .catch(err =>{
           res.status(500).json({error:err})
        })

}
exports.filterMenuItembByType=(req,res)=>{
   const requestBody = req.body;
   const restaurantId = requestBody.restaurantId;
   const type = requestBody.type;
let menuItem = {};
if(restaurantId){
   menuItem={restaurantId:restaurantId}
}
if(restaurantId && type){
   menuItem={restaurantId:restaurantId,type:type}
}
Item.find(menuItem)
 .then(response=>{
   if (response.length != 0) {
      res.status(200).json({ message: "Menu Item filtered Successfully",menu: response, total:response.length })
  } else {
      res.status(200).json({ message: "sorry we dont have ", menu: response })
  }
 })
 .catch(err => { res.status(500).json({ error: err }) })
}