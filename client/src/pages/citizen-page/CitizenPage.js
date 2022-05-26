import "./CitizenPage.scss"
import {Navigate} from 'react-router-dom';
import {UserContext} from "../../App";
import {useContext} from "react";

export function CitizenPage() {
    const {user, setUser} = useContext(UserContext);

    console.log(user)

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return (
        <div>
            <div className="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}