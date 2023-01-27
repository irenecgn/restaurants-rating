import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
  return (
    isOpen &&
    createPortal(
      <div className={styles['modal']}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__header']}>
            {/* {children} */}
            <form className={styles['form']}>
              <div className={styles['form__body']}>
                <label>Name</label>
                <input
                  type='text'
                  className={styles['form__body__input']}
                ></input>

                <label>Location</label>
                <input
                  type='text'
                  className={styles['form__body__input']}
                ></input>

                <label>Tripadvisor Url</label>
                <input
                  type='url'
                  className={styles['form__body__input']}
                ></input>
              </div>
              <div className={styles['form__score']}>
                <label>Atmosphere</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                />

                <label>Service</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                />

                <label>Food</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                />

                <label>Price</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                />
              </div>
              <div className={styles['form__footer']}>
                <button className={styles['form__footer__button']}>
                  Create!
                </button>
              </div>
            </form>
            <button onClick={onClose} className={styles['modal__button']}>
              Close
            </button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
