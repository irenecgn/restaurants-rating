import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, onSubmit, children }) {
  return (
    isOpen &&
    createPortal(
      <div className={styles['modal']}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__header']}>
            {children}
            <form className={styles['form']} onSubmit={onSubmit}>
              <div className={styles['form__body']}>
                <label>Name</label>
                <input
                  type='text'
                  className={styles['form__body__input']}
                  name='name'
                ></input>

                <label>Location</label>
                <input
                  type='text'
                  className={styles['form__body__input']}
                  name='location'
                ></input>

                <label>Tripadvisor Url</label>
                <input
                  type='url'
                  className={styles['form__body__input']}
                  name='tripadvisorUrl'
                ></input>
              </div>
              <div className={styles['form__score']}>
                <label>Atmosphere</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                  name='atmosphere'
                />

                <label>Service</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                  name='service'
                />

                <label>Food</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                  name='food'
                />

                <label>Price</label>
                <input
                  type='number'
                  min='0'
                  max='10'
                  className={styles['form__score__input']}
                  name='price'
                />
              </div>
              <div className={styles['form__footer']}>
                <button
                  className={styles['form__footer__button']}
                  type='submit'
                >
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
