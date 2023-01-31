const baseUrl = 'http://localhost:3030/restaurants';

//GET RESTAURANTS
export const getAllRestaurants = async () => {
  const res = await fetch(baseUrl);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};
