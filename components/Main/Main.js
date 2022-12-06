import React from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import styles from './Main.module.css';

function Main({ restaurants }) {
  return (
    <div className={styles.main}>
      <Form />
      <List restaurants={restaurants} />
    </div>
  );
}

export default Main;
