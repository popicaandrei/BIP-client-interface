import "./LoginPage.scss";
import {IsUserLoggedIn, Login} from "../../services/UserService.js";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Button, Input, Spacer, Text} from "@nextui-org/react";
import person1 from "../../illustrations/person1.svg";
import person2 from "../../illustrations/person2.svg";

export function LoginPage() {
    const [fail, setFail] = useState(false);
    const navigate = useNavigate();

    async function login() {
        let email = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let isLoggedIn = await Login(email, password);
        IsUserLoggedIn() ? navigate("/home") : setFail(true);
    }

    function validCredentials() {
        if (fail)
            return <Text color="error" size="100%">
                Wrong credentials provided
            </Text>
    }

    function enterSubmit(event) {
        if (event.code === "Enter" || event.code === "NumpadEnter")
            login();
    }

    return (
        <div className="center-login-page">
            <div className="login-page-div row">
                <div id="right-text">
                    <Text h1 size={57} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
                        Welcome to your
                    </Text>
                    <Text h1 size={60} css={{textGradient: "45deg, $yellow600 -20%, $red400 100%",}} weight="bold">
                        City Portal
                    </Text>
                    <div className="login-first-form">
                        <Input bordered id={"username"} label="Email" placeholder="user@gmail.com" onKeyPress={enterSubmit}
                              color="secondary" size="lg"/>
                    </div>
                    <div className="login-first-form">
                        <Input.Password bordered id={"password"} label="Password" placeholder="password"
                                        onKeyPress={enterSubmit} color="secondary" size="lg"/>
                    </div>
                    <Spacer y={1.5}/>
                    <Button size="lg" onClick={login} color="gradient" auto ghost>
                        Log In
                    </Button>
                    <Spacer y={0.3}/>
                    {validCredentials()}
                </div>
            </div>
                <div className="logo-div">
                    <img src={person2} alt=""></img>
                    <img src={person1} alt=""></img>
                </div>
        </div>
    );
}