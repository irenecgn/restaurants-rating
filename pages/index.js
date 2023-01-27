import Head from 'next/head';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import DATA from '../data.json';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const filteredRestaurants = DATA.filter(
    (restaurant) =>
      restaurant.name.toLocaleLowerCase().includes(searchQuery) ||
      restaurant.location.toLocaleLowerCase().includes(searchQuery) ||
      restaurant.averageScore
        .toString()
        .toLocaleLowerCase()
        .includes(searchQuery)
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
      <Modal isOpen={showModal} onClose={handleClick}>
        <h1>Add new restaurant</h1>
      </Modal>
      <Footer />
    </Container>
  );
}
