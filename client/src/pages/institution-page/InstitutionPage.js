import "./InstitutionPage.scss"
import {Navigate} from 'react-router-dom';
import {UserContext} from "../../App";
import {useContext} from "react";

export default function InstitutionPage() {
    const {user, setUser} = useContext(UserContext);

    if (!user || user.role !== "INSTITUTION") {
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            <header className="header-section">
                Blockchain Inceptive Platform
            </header>
            <p>InstitutionPage</p>
        </div>
    )
}