import {Button, Input, Modal, Spacer, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {addCitizenCard, getAllCards} from "../../services/CitizenService";

export default function CardModal(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards().then((data) => {
            setCards(data);
        });
    }, []);

    async function addCard() {
        let cardNumber = document.getElementById("number").value;
        let cardCode = document.getElementById("code").value;
        let validFrom = document.getElementById("validFrom").value;
        let validTo = document.getElementById("validTo").value;

        await addCitizenCard(cardNumber, cardCode, validFrom, validTo);
        window.location.reload(true);
    }

    const cardList = cards.map((c) =>
        <li>
            <Text h6 color="text">Card number: {c.number}</Text>
        </li>
    )

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
                    <Text h3 size={18} color="secondary">
                        Manage your Citizen Cards
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text h5 size={18} color="secondary">
                        Your current cards are:
                    </Text>
                    <ol>
                    {cardList.length ? cardList : "* You don't have any cards at the moment"}
                    </ol>

                    <Spacer y={0.5}/>
                    <Text h5 size={18} color="secondary">
                        Add a new Card
                    </Text>
                    <Spacer y={0.1}/>

                    <Input
                        id={"number"}
                        clearable
                        bordered
                        fullWidth
                        color="secondary"
                        size="lg"
                        label="Card Number"
                        placeholder="e.g., 275274278783373788"
                    />
                    <Input
                        id={"code"}
                        clearable
                        bordered
                        fullWidth
                        color="secondary"
                        size="lg"
                        label="Card Code"
                        placeholder="e.g., 973a0e3qw5e36z9"
                    />
                    <Input
                        id={"validFrom"}
                        bordered
                        fullWidth
                        color="secondary"
                        size="lg"
                        type="date"
                        label="Valid from date"
                        placeholder="Date that the validity starts"
                    />
                    <Input
                        id={"validTo"}
                        bordered
                        fullWidth
                        color="secondary"
                        size="lg"
                        type="date"
                        label="Valid to date"
                        placeholder="Date that the validity ends"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto rounded flat color="secondary" onClick={addCard}>
                        Add a new Citizen Card
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}