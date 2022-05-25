import "./LoginPage.scss";
import {Login} from "../../services/UserService.js";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


export function LoginPage() {
    const [fail, setFail] = useState(false);
    const navigate = useNavigate();
    const [btndisabled, setDisabeled] = useState(false);

    async function login() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        setDisabeled(true);
        let isLoggedIn = await Login(username, password);
        setDisabeled(false);

        if (isLoggedIn)
            navigate("/home");
        else
            setFail(true);
    }

    function validCredentials() {
        if (fail)
            return <p className="invalid-login text-bold mt-3">Wrong Credentials!</p>;
    }

    function enterSubmit(event) {
        if (event.code === "Enter" || event.code === "NumpadEnter")
            login();
    }


    return (
        <div className="center-login-page">
            <div className="login-page-div row">
                <div id="right-text" className="mr-3 mr-sm-0 col-12 col-md-6">
                    <h1 id="login-title" className="mb-4">
                        Welcome back!
                    </h1>
                    <div className="login-first-form">
                        <p className="text-bold">Username</p>
                        <input
                            id="username"
                            className="login-form form-control"
                            type="text"
                            onKeyPress={enterSubmit}
                        ></input>
                    </div>
                    <div className="login-first-form">
                        <p className="text-bold">Password</p>
                        <input
                            id="password"
                            className="login-form form-control"
                            type="password"
                            onKeyPress={enterSubmit}
                        ></input>
                    </div>
                    <button
                        className="login-button round bg-red text-bold text-white btn-hover"
                        onClick={login}
                        disabled={btndisabled}
                    >
                        Log In
                    </button>

                    {validCredentials()}
                </div>
                <div id="logo-div" className="d-none d-md-flex col-0 col-md-6">
                    <h2>aidasdna</h2>
                    {/*<img className="logo" src={logo} alt=""></img>*/}
                </div>
            </div>
        </div>
    );
}