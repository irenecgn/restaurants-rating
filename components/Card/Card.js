import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { SiTripadvisor } from 'react-icons/si';

const MAX_SCORE = 10;

function Card({ restaurants }) {
  const sortedRestaurants = restaurants.sort(
    (a, b) => b.averageScore - a.averageScore
  );

  const getScore = (score) => {
    const rest = MAX_SCORE - score;
    return '★'.repeat(score) + '☆'.repeat(rest);
  };

  console.log(getScore(7));

  return sortedRestaurants.map((restaurant) => (
    <article key={restaurant.id} className={styles.card}>
      <div className={styles['card__header']}>
        <span className={styles['card__title']}>{restaurant.name}</span>
        <span className={styles['card__title']}>{restaurant.averageScore}</span>
      </div>

      <div className={styles['card__body']}>
        <span className={styles['card__subtitle']}>RATINGS</span>
        <ul className={styles['card__list']}>
          <li className={styles['card__list__item']}>
            Atmosphere:{getScore(restaurant.atmosphere)}
          </li>
          <li className={styles['card__list__item']}>
            Service: {getScore(restaurant.service)}
          </li>
          <li className={styles['card__list__item']}>
            Food: {getScore(restaurant.food)}
          </li>
          <li className={styles['card__list__item']}>
            Price: {getScore(restaurant.price)}
          </li>
        </ul>
      </div>

      <div className={styles['card__footer']}>
        <GoLocation />
        <span>{restaurant.location}</span>
      </div>
      <div className={styles['card__footer']}>
        <Link href={restaurant.tripadvisorUrl}>Visit Tripadvisor page</Link>
      </div>
      {/* <Image src={restaurantImage} alt='Barcelona' width={200} height={400} /> */}
    </article>
  ));
}

export default Card;
