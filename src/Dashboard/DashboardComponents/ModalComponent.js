import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalComponent = ({ modal, toggle, data, modalTitle }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} centered={true}>
            <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
            <ModalBody>
                {data}
            </ModalBody>
        </Modal>
    )
}

export default ModalComponent