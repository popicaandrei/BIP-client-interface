import React, {useState} from "react";
import {Button, Checkbox, Input, Modal, Text} from "@nextui-org/react";
import {createEvent} from "../../services/EventService";

export default function EventModal(props) {
    const [selected, setSelected] = useState(false);

    async function addEvent() {
        let eventName = document.getElementById("name").value;
        let eventReward = document.getElementById("reward").value;
        let eventAuth = document.getElementById("auth").value;
        let validationNeeded = selected;

        await createEvent(eventName, eventReward, eventAuth, validationNeeded);
        window.location.reload(true);
    }

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
                    <Text h4 id="modal-title" size={18} color="warning">
                        Create a new city event
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        id={"name"}
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Event Name"
                    />
                    <Input
                        id={"reward"}
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Reward Amount in EGLD"
                    />
                    <Input
                        id={"auth"}
                        clearable
                        bordered
                        fullWidth
                        color="warning"
                        size="lg"
                        placeholder="Authentication Type, e.g: CARD"
                    />
                    <Checkbox size="sm" isSelected={selected} color="warning"
                              onChange={setSelected}>
                        Needs extra validation to be rewarded
                    </Checkbox>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto rounded flat color="warning" onClick={addEvent}>
                        Create event
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
