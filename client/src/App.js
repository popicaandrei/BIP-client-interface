import './App.css';
import {useNavigate} from "react-router-dom";
import {LandingPage} from "./pages/landing-page/LandingPage"
import {Routes,Route} from 'react-router'


function App() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
