import './App.css';
import {useNavigate} from "react-router-dom";
import {LandingPage} from "./pages/landing-page/LandingPage"
import {Routes,Route} from 'react-router'
import {HomePage} from "./pages/home-page/HomePage";

function App() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/home" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
