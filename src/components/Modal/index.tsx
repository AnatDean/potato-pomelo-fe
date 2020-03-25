import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  return isOpen ? (
    <div style={{ height: 'fit-content' }} tabIndex={-1} id='modal'>
      {children}
    </div>
  ) : null;
};

export default Modal;
