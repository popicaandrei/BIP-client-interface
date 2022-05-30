import React from "react";
import {Grid, Table, Text} from "@nextui-org/react";

export default function EventTable({events, columns}) {
    console.log(events);
    return (
        <div>
            <div className="table-title">
                <Text h4 color="warning">
                    Hey your city events are:
                </Text>
            </div>
            <Grid.Container gap={2}>
                <Grid xs={12}>
                    <Table
                        aria-label="Validation Events"
                        color="warning"
                        bordered
                        selectionMode="multiple"
                        defaultSelectedKeys={["2"]}
                        containerCss={{
                            height: "auto",
                            minWidth: "100%",
                        }}
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

                </Grid>
            </Grid.Container>

        </div>
    );
}