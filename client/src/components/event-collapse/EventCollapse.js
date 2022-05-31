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

    const eventList = events.map((e) =>
        <li>
            <Text h4 color="warning">{e.name}</Text>
            Having the reward: <b>{e.reward} EGLD </b> -- Authentication type needed: {e.authType} -- Is
            currently active: {e.active} -- Needs validation to be processed: {e.validationNedeed}
        </li>
    )

    return (
        <div className="collapse-container">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        title="Added Events"
                        subtitle="See all the rewarded city events"
                    >
                        <ol>
                            {eventList}
                        </ol>
                    </Collapse>
                </Grid>
                <Grid xs={12}>
                    <Button auto color="warning" rounded flat onClick={toggleModal}>
                        Add New Event
                    </Button>
                    <EventModal visible={visible} toggle={toggleModal}/>
                </Grid>

                <Spacer y={5}/>
            </Grid.Container>
        </div>
    );
}

