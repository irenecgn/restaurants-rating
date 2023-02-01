import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ isOpen, children }) {
  return (
    isOpen &&
    createPortal(
      <div className={styles['modal']}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__header']}>{children}</div>
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
