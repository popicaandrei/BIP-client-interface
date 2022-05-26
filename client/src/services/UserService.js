import axios from "axios";
import {ApiUtil} from '../utils/ApiUtil'

export async function Login(email, password) {
    let path = ApiUtil.URL + "/login";
    try {
        let token;
        await axios.post(path, {
            email: email,
            password: password,
        }).then((response) => {
            token = response.headers["authorization"];
        });
        localStorage.setItem("jwt", token);
        return await GetLoggedInUser();
    } catch {
        return false;
    }
}

export async function GetLoggedInUser() {
    let path = ApiUtil.URL + "/users";
    try {
        let response = await axios.get(path, {
            headers: {"Authorization": localStorage.getItem("jwt")},
        });
        return response.data;
    } catch {
        console.log("Error");
    }
}

export function IsUserLoggedIn() {
    let jwt = localStorage.getItem("jwt");
    return jwt !== null;
}