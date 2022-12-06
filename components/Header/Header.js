import styles from './Header.module.css';

function Header({ handleChange }) {
  return (
    <div className={styles.header}>
      <input
        className={styles.headerSearchBar}
        placeholder='Type here your search...'
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Header;
