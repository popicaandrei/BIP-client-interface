import "./InstitutionPage.scss"
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {getUser} from "../../services/UserService";
import EventTable from "../../components/EventTable/EventTable";
import {Button} from "@nextui-org/react";
import {getEventsForInstitution} from "../../services/EventService";
import {columns} from "../../utils/InstitutionUtil";


export default function InstitutionPage() {
    const user = getUser();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let e = await getEventsForInstitution();
            setEvents(e);
        }
        fetchEvents();
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
                    <EventTable events={events} columns={columns}/>
                    <Button auto color="warning" rounded flat>
                        Add a new event
                    </Button>
                </div>
            </div>
        </div>
    )
}