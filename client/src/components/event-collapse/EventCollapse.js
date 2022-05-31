import {Button, Collapse, Grid, Spacer, Text} from "@nextui-org/react";
import EventModal from "../add-event-modal/EventModal";
import {useState} from "react";

export default function EventCollapse({events}) {
    console.log(events);

    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(visible => !visible);
        console.log("closed");
    };

    // const eventList = events.map((e) =>
    //     <li>
    //         {e.name + ""}
    //     </li>)

    return (
        <div className="collapse-container">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        title="Added Events"
                        subtitle="See all the rewarded city events"
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Grid>
                <Grid xs={12}>
                    <Button auto color="warning" rounded flat onClick={toggleModal}>
                        Add New Event
                    </Button>
                    <EventModal visible={visible} toggle = {toggleModal}/>
                </Grid>

                <Spacer y={5}/>
            </Grid.Container>
        </div>
    );
}

