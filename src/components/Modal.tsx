// Modal.js
import React, { useRef } from 'react';
import useHandleClickOutside from '../hooks/useClickOutside';
import { useSpring, animated } from 'react-spring';

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useHandleClickOutside(modalContentRef, onClose);

  const modalAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={modalAnimation} className="c-modal">
      <div className="c-modal__content" ref={modalContentRef}>
        <span className="c-modal__close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </animated.div>
  );
};

export default Modal;
