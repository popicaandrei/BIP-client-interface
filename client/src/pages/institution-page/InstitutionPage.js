import "./InstitutionPage.scss"
import {useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {getUser} from "../../services/UserService";

export default function InstitutionPage() {
    const user = getUser();

    useEffect(() => {
        console.log(user)
    }, []);

    return (
        <div>
            <header className="header-section">
                <Navbar user={user}/>
            </header>
                <div className="institution-container">
                    <p>InstitutionPage</p>
                </div>
        </div>
    )
}