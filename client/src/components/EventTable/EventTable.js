import React from "react";
import {Grid, Table, Text} from "@nextui-org/react";

export default function EventTable({events}) {

    const columns = [
        {
            key: "name",
            label: "Name",
        },
        {
            key: "role",
            label: "Role",
        },
        {
            key: "status",
            label: "Status",
        },
    ];
    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            role: "CEO",
            status: "Active",
        },
        {
            key: "2",
            name: "Zoey Lang",
            role: "Technical Lead",
            status: "Paused",
        },
        {
            key: "3",
            name: "Jane Fisher",
            role: "Senior Developer",
            status: "Active",
        },
        {
            key: "4",
            name: "William Howard",
            role: "Community Manager",
            status: "Vacation",
        },
    ];
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
                        selectionMode="single"
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
                        <Table.Body items={rows}>
                            {(item) => (
                                <Table.Row key={item.key}>
                                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid>
                <Grid xs={12}>

                </Grid>
            </Grid.Container>
        </div>
    );
}