import "./InstitutionPage.scss"
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {getUser} from "../../services/UserService";
import EventTable from "../../components/event-table/EventTable";
import {getEventsForInstitution, getEventsForInstitutionNotValidated} from "../../services/EventService";
import {columns} from "../../utils/InstitutionUtil";
import EventCollapse from "../../components/event-collapse/EventCollapse";


export default function InstitutionPage() {
    const user = getUser();
    const [eventsValidated, setEventsValidated] = useState([]);
    const [eventsAdded, setEventsAdded] = useState([]);


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
            <div className="institution-container">
                <div className="inst-statistics-constainer">
                </div>
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