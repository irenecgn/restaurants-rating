import React from 'react';
import List from '../List/List';
import styles from './Main.module.css';

function Main({ restaurants }) {
  return (
    <div className={styles.main}>
      <List restaurants={restaurants} />
    </div>
  );
}

export default Main;
