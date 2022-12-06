import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <input
        className={styles.headerSearchBar}
        placeholder='Type here your search...'
      ></input>
    </div>
  );
}

export default Header;
