import './App.css';
import {Route, Routes} from 'react-router'
import {CitizenPage} from "./pages/citizen-page/CitizenPage";
import InstitutionPage from "./pages/institution-page/InstitutionPage";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme} from "./utils/DesignUtil";
import {LoginPage} from "./pages/login/LoginPage";
import {createContext, useState} from "react";
import {hasRole, isUserLoggedIn} from "./services/UserService";
import {Navigate} from "react-router-dom";

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    return (
        <NextUIProvider theme={darkTheme}>
            <div>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="*" element={<LoginPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/citizens"
                               element={isUserLoggedIn() && hasRole("CITIZEN") ?
                                   <CitizenPage/> :
                                   <Navigate to='/login'/>}/>
                        <Route path="/institutions"
                               element={isUserLoggedIn() && hasRole("INSTITUTION") ?
                                   <InstitutionPage/> :
                                   <Navigate to='/login'/>}/>
                    </Routes>
                </UserContext.Provider>
            </div>
        </NextUIProvider>
    );
}

export default App;
