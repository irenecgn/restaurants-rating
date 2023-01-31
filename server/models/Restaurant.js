const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema([
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    tripadvisorUrl: {
      type: String,
    },
    atmosphere: {
      type: Number,
    },
    service: {
      type: Number,
    },
    food: {
      type: Number,
    },
    price: {
      type: Number,
    },
    averageScore: {
      type: Number,
    },
  },
]);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
