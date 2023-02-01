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
import { CgCloseR } from 'react-icons/cg';

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
      <Modal isOpen={isModalOpen}>
        <form onSubmit={handleSubmit} className={styles['form']}>
          <div className={`${styles.form__container} `}>
            <input
              type='text'
              className={styles['form__input']}
              name='name'
              placeholder='Name'
            ></input>

            <input
              type='text'
              className={styles['form__input']}
              name='location'
              placeholder='Location'
            ></input>
            <input
              type='url'
              className={styles['form__input']}
              name='tripadvisorUrl'
              placeholder='Trip Advisor URL'
            ></input>
          </div>
          <div className={`${styles.form__body}`}>
            <label>Atmosphere</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__input']}
              name='atmosphere'
            />
          </div>
          <div className={`${styles.form__body}`}>
            <label>Service</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__input']}
              name='service'
            />
          </div>
          <div className={`${styles.form__body}`}>
            <label>Food</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__input']}
              name='food'
            />
          </div>
          <div className={`${styles.form__body}`}>
            <label>Price</label>
            <input
              type='number'
              min='0'
              max='10'
              className={styles['form__input']}
              name='price'
            />
          </div>

          <div className={`${styles.form__container} `}>
            <button className={styles['form__footer__button']} type='submit'>
              Create!
            </button>
          </div>
          <div className={styles['form__icon__container']}>
            <CgCloseR className={styles['form__icon']} onClick={closeModal} />
          </div>
        </form>
      </Modal>
      <Footer />
    </Container>
  );
}
