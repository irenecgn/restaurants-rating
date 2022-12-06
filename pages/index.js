import Head from 'next/head';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import DATA from '../data.json';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <Container>
      <Head>
        <title>Restaurants Raiting</title>
      </Head>
      <Header handleChange={handleChange} />
      <Main restaurants={filteredRestaurants} />
    </Container>
  );
}
