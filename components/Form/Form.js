import React from 'react';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form}>
      <label>Name</label>
      <input type='text'></input>

      <label>Location</label>
      <input type='text'></input>

      <label>Tripadvisor Url</label>
      <input type='url'></input>

      <label>Atmosphere</label>
      <input type='number' min='0' max='10' />

      <label>Service</label>
      <input type='number' min='0' max='10' />

      <label>Food</label>
      <input type='number' min='0' max='10' />

      <label>Price</label>
      <input type='number' min='0' max='10' />
    </form>
  );
}

export default Form;
