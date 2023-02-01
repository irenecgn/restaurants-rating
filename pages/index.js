import Head from 'next/head';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import styles from '../styles/form.module.css';
import { useRestaurants } from '../hooks/useRestaurants';
import { useBoolean } from '../hooks/useBoolean';

export default function Home() {
  const { restaurants, createRestaurant, getFilteredRestaurants } =
    useRestaurants();
  const { value: isModalOpen, on: openModal, off: closeModal } = useBoolean();

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRestaurant = {
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

    createRestaurant(newRestaurant);

    event.target.reset();
  };

  const filteredRestaurants = getFilteredRestaurants(searchQuery);

  return (
    <Container>
      <Head>
        <title>🍴Restaurants Rating</title>
      </Head>
      <Header handleChange={handleChange} onAddRestaurant={openModal} />
      <Main restaurants={filteredRestaurants} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Add new restaurant</h1>
        <form className={styles['form']} onSubmit={handleSubmit}>
          <div className={styles['form__body']}>
            <label>Name</label>
            <input
              type='text'
              className={styles['form__body__input']}
              name='name'
            ></input>

            <label>Location</label>
            <input
              type='text'
              className={styles['form__body__input']}
              name='location'
            ></input>

            <label>Tripadvisor Url</label>
            <input
              type='url'
              className={styles['form__body__input']}
              name='tripadvisorUrl'
            ></input>
          </div>
          <div className={styles['form__score']}>
            <label>Atmosphere</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__score__input']}
              name='atmosphere'
            />

            <label>Service</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__score__input']}
              name='service'
            />

            <label>Food</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__score__input']}
              name='food'
            />

            <label>Price</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__score__input']}
              name='price'
            />
          </div>
          <div className={styles['form__footer']}>
            <button className={styles['form__footer__button']} type='submit'>
              Create!
            </button>
          </div>
        </form>
        <button onClick={closeModal} className={styles['modal__button']}>
          Close
        </button>
      </Modal>
      <Footer />
    </Container>
  );
}
