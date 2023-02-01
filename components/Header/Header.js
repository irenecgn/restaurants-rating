import styles from './Header.module.css';
import { BsPlus } from 'react-icons/bs';

function Header({ handleChange, onAddRestaurant }) {
  return (
    <div className={styles.header}>
      <button className={styles['header__button']} onClick={onAddRestaurant}>
        <BsPlus className={styles['header__button__icon']} />
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
