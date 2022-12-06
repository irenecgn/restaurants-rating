import React from 'react';
import styles from './List.module.css';
import Card from '../Card/Card';

function List({ restaurants }) {
  return (
    <div className={styles.list}>
      <Card restaurants={restaurants} />
    </div>
  );
}

export default List;
