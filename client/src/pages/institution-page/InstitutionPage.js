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

    const MockItem = ({text1, text2}) => {
        return (
            <Card color="warning" css={{h: "$20"}} justi>
                <Text h6 size={15} color="white" css={{mt: 0}}>
                    {text1}
                </Text>
                <Text h4 color="white" css={{mt: 0}}>
                    {text2}
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
                    <Grid.Container gap={4} justify="center">
                        <Grid fluid={70}>
                            <MockItem text1="Your wallet balance is: " text2="155 EGLD"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text1="Total value sent in rewards: " text2="20543$"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text1="Total incentives sent: " text2="24 EGLD"/>
                        </Grid>
                    </Grid.Container>

                    <a href="https://devnet-explorer.elrond.com/accounts/erd1qhauudy6txe77m702wzd5uuh8wmsydee348pkg48hzygpwgmwvhshhjnt5"
                       target="_blank">
                        <Text h6 size={15} color="white">
                            See all details on Elrond Explorer
                        </Text>
                    </a>
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