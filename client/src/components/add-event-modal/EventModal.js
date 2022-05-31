import React from "react";
import {Button, Input, Modal, Text} from "@nextui-org/react";

export default function EventModal(props) {

    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={props.visible}
                onClose={props.toggle}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Event Name"
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Reward Amount"
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Authentication Type"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto rounded flat color="warning" onClick={props.toggle}>
                       Create event
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
