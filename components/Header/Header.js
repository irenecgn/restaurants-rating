import styles from './Header.module.css';
import { IoAddOutline } from 'react-icons/io';

function Header({ handleChange, handleOpen }) {
  return (
    <div className={styles.header}>
      <button className={styles['header__button']} onClick={handleOpen}>
        +
      </button>
      <input
        className={styles['header__searchbar']}
        placeholder='Type here your search...'
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Header;
