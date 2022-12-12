import styles from './Header.module.css';

function Header({ handleChange }) {
  return (
    <div className={styles.header}>
      <input
        className={styles['header__searchbar']}
        placeholder='Type here your search...'
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Header;
