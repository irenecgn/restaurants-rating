import Head from 'next/head';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import DATA from '../data.json';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import { getAllRestaurants, postNewRestaurant } from '../Utilities/Service';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  async function getRestaurants() {
    const data = await getAllRestaurants();
    setRestaurants(data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const modalInput = {
      name: event.target.name.value,
      location: event.target.location.value,
      tripadvisorUrl: event.target.tripadvisorUrl.value,
      atmosphere: event.target.atmosphere.value,
      service: event.target.service.value,
      food: event.target.food.value,
      price: event.target.price.value,
      averageScore:
        (event.target.atmosphere.valueAsNumber +
          event.target.service.valueAsNumber +
          event.target.food.valueAsNumber +
          event.target.price.valueAsNumber) /
        4,
    };

    await postNewRestaurant(modalInput);
    getRestaurants();
    event.target.reset();
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery) ||
      restaurant.location.toLowerCase().includes(searchQuery) ||
      restaurant.averageScore.toString().toLowerCase().includes(searchQuery)
  );

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Head>
        <title>🍴Restaurants Raiting</title>
      </Head>
      <Header handleChange={handleChange} handleOpen={handleClick} />
      <Main restaurants={filteredRestaurants} />
      <Modal isOpen={showModal} onClose={handleClick} onSubmit={handleSubmit}>
        <h1>Add new restaurant</h1>
      </Modal>
      <Footer />
    </Container>
  );
}
