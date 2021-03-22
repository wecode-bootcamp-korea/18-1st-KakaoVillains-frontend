import React from 'react';

export const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div>modal</div> : null}</>;
};
