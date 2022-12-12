import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import { SiTripadvisor } from 'react-icons/si';

function Card({ restaurants }) {
  const sortedRestaurants = restaurants.sort(
    (a, b) => b.averageScore - a.averageScore
  );

  return sortedRestaurants.map((restaurant) => (
    <div key={restaurant.id} className={styles.card}>
      <div className={styles['card__header']}>
        <span className={styles['card__title']}>{restaurant.name}</span>
        <span className={styles['card__title']}>{restaurant.averageScore}</span>
      </div>

      <div className={styles['card__body']}>
        <GoLocation />
        <span>{restaurant.location}</span>
      </div>
      <div className={styles['card__body']}>
        <SiTripadvisor />
        <Link href={restaurant.tripadvisorUrl}>Visit Tripadvisor page</Link>
      </div>

      <div className={styles['card__footer']}>
        <span>RATINGS</span>
        <ul className={styles['card__list']}>
          <li className={styles['card__list__item']}>
            Atmosphere: {restaurant.atmosphere}
          </li>
          <li className={styles['card__list__item']}>
            Service: {restaurant.service}
          </li>
          <li className={styles['card__list__item']}>
            Food: {restaurant.food}
          </li>
          <li className={styles['card__list__item']}>
            Price: {restaurant.price}
          </li>
        </ul>
      </div>
    </div>
  ));
}

export default Card;
