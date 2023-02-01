import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ isOpen, children }) {
  return (
    isOpen &&
    createPortal(
      <div className={styles['modal']}>
        <h1 className={styles['modal__title']}>Add a new restaurant</h1>
        {children}
      </div>,
      document.body
    )
  );
}

export default Modal;
