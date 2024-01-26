// Modal.js
import React, { useRef } from 'react';
import useHandleClickOutside from '../hooks/useClickOutside';


interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useHandleClickOutside(modalContentRef, onClose);

  return (
    <div className="c-modal">
      <div className="c-modal__content" ref={modalContentRef}>
        <span className="c-modal__close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
