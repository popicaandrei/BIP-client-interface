import "./InstitutionPage.scss"
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import {getUser} from "../../services/UserService";
import EventTable from "../../components/event-table/EventTable";
import {getEventsForInstitution, getEventsForInstitutionNotValidated} from "../../services/EventService";
import {columns} from "../../utils/InstitutionUtil";
import EventCollapse from "../../components/event-collapse/EventCollapse";
import {Card, Grid, Spacer, Text} from "@nextui-org/react";


export default function InstitutionPage() {
    const user = getUser();
    const [eventsValidated, setEventsValidated] = useState([]);
    const [eventsAdded, setEventsAdded] = useState([]);

    const MockItem = ({text}) => {
        return (
            <Card color="warning" css={{h: "$20"}}>
                <Text h6 size={15} color="white" css={{mt: 0}}>
                    {text}
                </Text>
            </Card>
        );
    }

    useEffect(() => {
        async function fetchEventsValidated() {
            let ev = await getEventsForInstitutionNotValidated();
            setEventsValidated(ev);
        }

        async function fetchEventsAdded() {
            let ea = await getEventsForInstitution();
            setEventsAdded(ea);
        }

        fetchEventsValidated();
        fetchEventsAdded()
    }, []);

    return (
        <div>
            <header className="header-section">
                <Navbar user={user}/>
            </header>
            <Spacer y={2}/>
            <div className="institution-container">
                <div className="inst-statistics-constainer">
                    <Grid.Container gap={2} justify="center">
                        <Grid fluid={70}>
                            <MockItem text="dsadasdasdsssssssssss"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text="fhfghfghdfghdfghdfghdfghdfghdfgh"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text="ehtrterherthertherhrt"/>
                        </Grid>
                        </Grid.Container>
                </div>

                <Spacer y={1}/>
                <div className="event-validation-table">
                    <EventTable events={eventsValidated} columns={columns}/>
                </div>
                <div className="event-display">
                    <EventCollapse events={eventsAdded}/>
                </div>
            </div>
        </div>
)
}