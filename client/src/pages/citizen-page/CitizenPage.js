import "./CitizenPage.scss"
import {useEffect} from "react";
import {getUser} from "../../services/UserService";


export function CitizenPage() {
    const user = getUser();

    useEffect(() => {
    });

    return (
        <div>
            <p>asdasd</p>
            <div className="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}