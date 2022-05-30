import "./InstitutionPage.scss"
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {getUser} from "../../services/UserService";
import EventTable from "../../components/EventTable/EventTable";
import {Button} from "@nextui-org/react";
import {getEventsForInstitutionNotValidated} from "../../services/EventService";
import {columns} from "../../utils/InstitutionUtil";


export default function InstitutionPage() {
    const user = getUser();
    const [eventsValidated, setEventsValidated] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            let e = await getEventsForInstitutionNotValidated();
            setEventsValidated(e);
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
                <div className="event-validation-table">
                    <EventTable events={eventsValidated} columns={columns}/>
                    <Button auto color="warning" rounded flat>
                        Validate Events
                    </Button>
                </div>
                {/*<div className="event-display">*/}
                {/*    <Button auto color="warning" rounded flat>*/}
                {/*        Add New Event*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}