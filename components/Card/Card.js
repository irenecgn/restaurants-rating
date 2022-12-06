import React from 'react';
import styles from './Card.module.css';
import { GoLocation } from 'react-icons/go';
// import { SiTripadvisor } from 'react-icons/si';

function Card({ restaurants }) {
  return restaurants.map((restaurant) => (
    <div key={restaurant.id} className={styles.card}>
      <div className={styles.nameAverageScoreContainer}>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.averageScore}</h2>
      </div>
      <div className={styles.locationUrlContainer}>
        <h3>
          <GoLocation />
          {restaurant.location}
        </h3>

        <a href={restaurant.tripadvisorUrl}>Visit Tripadvisor page</a>
      </div>
      <ul className={styles.ratings}>
        Ratings:
        <li> Atmosphere: {restaurant.atmosphere} </li>
        <li> Service: {restaurant.service} </li>
        <li> Food: {restaurant.food} </li>
        <li> Price: {restaurant.price} </li>
      </ul>
    </div>
  ));
}

export default Card;
