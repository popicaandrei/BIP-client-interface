import axios from "axios";
import {ApiUtil} from '../utils/ApiUtil'

export async function login(email, password) {
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
    } catch {
        return false;
    }
}

export async function getLoggedInUser() {
    let path = ApiUtil.URL + "/users";
    try {
        const token = localStorage.getItem("jwt");
        if (token) {
            let response = await axios.get(path, {
                headers: {"Authorization": token},
            });
            localStorage.setItem("user",JSON.stringify(response.data));
            return response.data;
        }
    } catch {
        console.log("Error");
    }
}

export function getUser(){
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        return JSON.parse(loggedInUser);
    }
}

export function isUserLoggedIn() {
    let jwt = localStorage.getItem("jwt");
    return jwt !== null;
}

export function hasRole(role) {
    let user = getUser();
    return user.role === role;
}