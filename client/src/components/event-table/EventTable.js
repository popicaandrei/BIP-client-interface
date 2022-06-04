import React, {useEffect, useState} from "react";
import {Button, Grid, Spacer, Table, Text} from "@nextui-org/react";
import {validateEvents} from "../../services/EventService";

export default function EventTable({events, columns}) {
    const [eventSource, setEventSource] = useState([]);
    const [eventIds, setEventIds] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() => {
        const filteredEvents = events.filter((e) => !eventIds.includes(e.id.toString()));
        setEventSource(filteredEvents);
    }, [count, events]);

    function handleSelection({anchorKey}) {
        setEventIds([...eventIds, anchorKey]);
    }

    function handleSubmit() {
        validateEvents(eventIds);
        setCount(count => count + 1)
    }

    return (
        <div>
            <div className="table-title">
                <Text h4 color="warning">
                    City events that need validation are:
                </Text>
            </div>
            <Grid.Container gap={2}>
                <Grid xs={12}>
                    <Table
                        aria-label="Validation Events"
                        color="warning"
                        selectionMode="multiple"
                        containerCss={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        onSelectionChange={handleSelection}
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column key={column.key}>{column.label}</Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={eventSource}>
                            {(item) => (
                                <Table.Row key={item.id} id={"row"}>
                                    {(columnKey) => <Table.Cell
                                        onClick={() => console.log(item[columnKey])}>{item[columnKey]}</Table.Cell>}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid>
                <Grid xs={12}>
                    <Button auto color="warning" rounded flat onClick={handleSubmit}>
                        Validate Events
                    </Button>
                </Grid>
                <Spacer y={1}/>
            </Grid.Container>
        </div>
    );
}