import React from 'react'

import { Button, Modal, useOverlayState } from "@heroui/react";
export const MyModal = ({ isOpen, setIsOpen, selectedFood }) => {
  return (
    <div>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog className="w-[80vw] max-h-[80vh] max-w-none">
            <Modal.CloseTrigger />
            <Modal.Header>

              <Modal.Heading>{selectedFood?.title}</Modal.Heading>
            </Modal.Header>
            <Modal.Body className='overflow-hidden'>
<img
    className="w-full max-w-[70vh] h-auto object-contain block mx-auto w-auto"
    src={`/src/images/${selectedFood.img}`}
    alt={selectedFood.title}
/>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </div>
  )
}



