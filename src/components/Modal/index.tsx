import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  return isOpen ? (
    <aside tabIndex={-1} id='modal'>
      {children}
    </aside>
  ) : null;
};

export default Modal;
