import { useEffect, useState } from 'react';
import { getAllRestaurants, postNewRestaurant } from '../utilities/Service';

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await getAllRestaurants();
    setRestaurants(data);
  }

  async function createRestaurant(restaurant) {
    await postNewRestaurant(restaurant);
    getRestaurants();
  }

  function getFilteredRestaurants(searchQuery) {
    return restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery) ||
        restaurant.location.toLowerCase().includes(searchQuery) ||
        restaurant.averageScore.toString().toLowerCase().includes(searchQuery)
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return { restaurants, createRestaurant, getFilteredRestaurants };
}
