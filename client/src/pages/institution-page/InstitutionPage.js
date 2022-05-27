import "./InstitutionPage.scss"
import {UserContext} from "../../App";
import {useContext, useEffect} from "react";

export default function InstitutionPage() {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    useEffect(() => {
        console.log(user)
    }, []);

    return (
        <div>
            <header className="header-section">
                <nav className="nav">
                    <ul className="nav-items">
                        <li>City Portal</li>
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