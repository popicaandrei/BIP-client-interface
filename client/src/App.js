import './App.css';
import {Route, Routes} from 'react-router'
import {CitizenPage} from "./pages/citizen-page/CitizenPage";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme} from "./utils/DesignUtil";
import {LoginPage} from "./pages/login/LoginPage";
import InstitutionPage from "./pages/institution-page/InstitutionPage";
import {createContext, useState} from "react";

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    return (
        <NextUIProvider theme={darkTheme}>
            <div>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="citizens" element={<CitizenPage/>}/>
                        <Route path="institutions" element={<InstitutionPage/>}/>
                    </Routes>
                </UserContext.Provider>
            </div>
        </NextUIProvider>
    );
}

export default App;
