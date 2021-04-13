const express = require('express');
const router = express.Router();

const locationController = require('../Controllers/locations');
const mealTypeController = require('../Controllers/mealTypes');
const restaurantController = require('../Controllers/restaurant');
const menuItemController = require('../Controllers/item');
const userController = require('../Controllers/user');
const paymentController = require('../Controllers/payment');

router.get('/location', locationController.getLocations);
router.get('/mealType', mealTypeController.getMealTypes);
router.get('/restaurantBylocation/:locationId', restaurantController.getRestaurantByLocation);
router.get('/restaurantByCity/:cityId', restaurantController.getRestaurantByCity);
router.post('/filter', restaurantController.filterRestaurants);
router.get('/getrestaurantbyid/:restaurantId', restaurantController.getRestaurantDetailsById);
router.get('/menu/:restId', menuItemController.getMenuItemsByRestaurant);
router.post('/filterMenu', menuItemController.filterMenuItembByType);
router.post('/usersignup', userController.signUpUser);
router.post('/login', userController.loginUser);

router.post('/payment', paymentController.payments);
router.post('/callback', paymentController.callback);
module.exports = router;