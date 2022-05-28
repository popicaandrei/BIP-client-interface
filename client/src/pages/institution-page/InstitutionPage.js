import "./InstitutionPage.scss"
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {getUser} from "../../services/UserService";
import EventTable from "../../components/EventTable/EventTable";
import {Button} from "@nextui-org/react";
import {getEventsForInstitution} from "../../services/EventService";


export default function InstitutionPage() {
    const user = getUser();
    const [events, setEvents] = useState();

    useEffect(() => {
        const addedEvents = getEventsForInstitution();
        console.log(addedEvents);
        setEvents(addedEvents);
    }, []);

    return (
        <div>
            <header className="header-section">
                <Navbar user={user}/>
            </header>
                <div className="institution-container">
                    <div className="inst-statistics-constainer">

                    </div>
                    <div className="event-table">
                        <EventTable events = {events}/>
                        <Button auto color="warning" rounded flat>
                            Add a new event
                        </Button>
                    </div>
                </div>
        </div>
    )
}