import React, {useState} from "react";
import {Button, Grid, Spacer, Table, Text} from "@nextui-org/react";

export default function EventTable({events, columns}) {
    console.log(events);
    const [selectedKeys, setSelectedKeys] = useState([]);

    function handleSelection() {
        console.log("hei")
    }

    return (
        <div>
            <div className="table-title">
                <Text h4 color="warning">
                    Hey your city events that need validation are:
                </Text>
            </div>
            <Grid.Container gap={2}>
                <Grid xs={12}>
                    <Table
                        aria-label="Validation Events"
                        color="warning"
                        selectionMode="multiple"
                        defaultSelectedKeys={["2"]}
                        containerCss={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        onSelectionChange={console.log(React.keys)}
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column key={column.key}>{column.label}</Table.Column>
                            )}
                        </Table.Header>
                        {events ? (
                            <Table.Body items={events}>
                                {(item) => (
                                    <Table.Row key={item.id}>
                                        {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                                    </Table.Row>
                                )}
                            </Table.Body>
                        ) : (<div>No Events to be validated</div>)}
                    </Table>
                </Grid>
                <Grid xs={12}>
                    <Button auto color="warning" rounded flat>
                        Validate Events
                    </Button>
                </Grid>
                <Spacer y={1} />
            </Grid.Container>
        </div>
    );
}