import './App.css';
import {useNavigate} from "react-router-dom";
import {Routes,Route} from 'react-router'
import {HomePage} from "./pages/home-page/HomePage";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme} from "./utils/DesignUtil";
import {LoginPage} from "./pages/login/LoginPage";

function App() {
    const navigate = useNavigate();
    return (
        <NextUIProvider theme={darkTheme}>
        <div>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/home" element={<HomePage/>}/>
            </Routes>
        </div>
        </NextUIProvider>
    );
}

export default App;
