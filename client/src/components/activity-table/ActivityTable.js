import {Button, Grid, Spacer, Table, Text} from "@nextui-org/react";
import {useEffect} from "react";

export default function ActivityTable({activities, activityColumns}){

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className="table-title">
                <Text h4 color="secondary">
                    Here are your last activities in the city:
                </Text>
            </div>
            <Grid.Container gap={2}>
                <Grid xs={12}>
                    <Table
                        aria-label="Activities Table"
                        color="secondary"
                        selectionMode="single"
                        containerCss={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                    >
                        <Table.Header columns={activityColumns}>
                            {(column) => (
                                <Table.Column key={column.key}>{column.label}</Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={activities}>
                            {(item) => (
                                <Table.Row key={item.id} id={"row"}>
                                    {(columnKey) =>
                                        <Table.Cell
                                        onClick={() => console.log(item[columnKey])}>{item[columnKey]}
                                    </Table.Cell>}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid>
                <Grid xs={12}>
                    <Button auto color="warning" rounded flat>
                        Validate Events
                    </Button>
                </Grid>
                <Spacer y={1}/>
            </Grid.Container>
        </div>
    );
}