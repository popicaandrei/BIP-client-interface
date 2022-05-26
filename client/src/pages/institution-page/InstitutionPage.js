import "./InstitutionPage.scss"
import {Navigate} from 'react-router-dom';
import {UserContext} from "../../App";
import {useContext} from "react";

export default function InstitutionPage() {
    const {user, setUser} = useContext(UserContext);
    console.log(user);

    if (!user || user.role !== "INSTITUTION") {
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            <p>InstitutionPage</p>
        </div>
    )
}