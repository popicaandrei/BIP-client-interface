import "./InstitutionPage.scss"
import {Navigate} from 'react-router-dom';
import {UserContext} from "../../App";
import {useContext, useEffect, useState} from "react";

export default function InstitutionPage() {
    const {user, setUser} = useContext(UserContext);
    const [userInstitution, setUserInstitution] = useState(null);

    useEffect(() => {
        if (!user || user.role !== "INSTITUTION") {
            return <Navigate to="/login" replace/>;
        }
        setUserInstitution(user);
    }, [user]);

    return (
        <div>
            <header className="header-section">
                <nav className="nav">
                    <ul className="nav-items">
                        {userInstitution}'s City Portal
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <p>InstitutionPage</p>
        </div>
    )
}