import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className={styles['modal']}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__header']}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
