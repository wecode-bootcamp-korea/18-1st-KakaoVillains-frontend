import React, { useState } from 'react';
import { Modal } from './Modal';

function ModalMain() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
      <div>
        <container>
          <button onClick={openModal}>modal</button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </container>
      </div>
    </>
  );
}

export default ModalMain;
