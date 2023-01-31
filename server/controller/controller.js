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

module.exports = { getAllRestaurants };
