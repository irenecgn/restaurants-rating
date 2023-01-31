const Restaurant = require('../models/Restaurant');

const getAllRestaurants = async function (req, res) {
  try {
    const restaurants = await Restaurant.find();
    res.status(200);
    res.send(restaurants);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send('Something went wrong!');
  }
};

const postNewRestaurant = async function (req, res) {
  try {
    const restaurant = req.body;
    const addRestaurant = await Restaurant.create(restaurant);
    res.status(201);
    res.send(addRestaurant);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = { getAllRestaurants, postNewRestaurant };
