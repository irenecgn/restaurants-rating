import React from 'react';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={`${styles.form} ${styles.form__style}`}>
      <div className={styles['form__body']}>
        <label>Name</label>
        <input
          type='text'
          className={`${styles.form__body__input} ${styles.form__style}`}
        ></input>

        <label>Location</label>
        <input
          type='text'
          className={`${styles.form__body__input} ${styles.form__style}`}
        ></input>

        <label>Tripadvisor Url</label>
        <input
          type='url'
          className={`${styles.form__body__input} ${styles.form__style}`}
        ></input>
      </div>
      <div className={styles['form__score']}>
        <label>Atmosphere</label>
        <input
          type='number'
          min='0'
          max='10'
          className={`${styles.form__score__input} ${styles.form__style}`}
        />

        <label>Service</label>
        <input
          type='number'
          min='0'
          max='10'
          className={`${styles.form__score__input} ${styles.form__style}`}
        />

        <label>Food</label>
        <input
          type='number'
          min='0'
          max='10'
          className={`${styles.form__score__input} ${styles.form__style}`}
        />

        <label>Price</label>
        <input
          type='number'
          min='0'
          max='10'
          className={`${styles.form__score__input} ${styles.form__style}`}
        />
      </div>
      <div className={styles['form__footer']}>
        <button
          className={`${styles.form__footer__button} ${styles.form__style}`}
        >
          Create!
        </button>
      </div>
    </form>
  );
}

export default Form;
