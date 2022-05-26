import "./InstitutionPage.scss"
import { Navigate } from 'react-router-dom';

export default function InstitutionPage({user}) {
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            <p>InstitutionPage</p>
        </div>
    )
}