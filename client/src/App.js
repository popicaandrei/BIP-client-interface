import './App.css';
import {useNavigate} from "react-router-dom";
import {Routes,Route} from 'react-router'
import {CitizenPage} from "./pages/citizen-page/CitizenPage";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme} from "./utils/DesignUtil";
import {LoginPage} from "./pages/login/LoginPage";
import {useState} from "react";
import {IsUserLoggedIn} from "./services/UserService";
import Protected from "./utils/RouteUtil";
import InstitutionPage from "./pages/institution-page/InstitutionPage";
import {User} from "./models/User";

function App() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);
    setUser(User);
    setLoggedIn(IsUserLoggedIn())

    return (
        <NextUIProvider theme={darkTheme}>
        <div>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/citizens" element={<Protected isLoggedIn={loggedIn}><CitizenPage user={user}/></Protected>}/>
                <Route exact path="/institutions" element={<Protected isLoggedIn={loggedIn}><InstitutionPage user={user}/></Protected>}/>
            </Routes>
        </div>
        </NextUIProvider>
    );
}

export default App;
