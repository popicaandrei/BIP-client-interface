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
            localStorage.setItem("role", response.data.role);
            return response.data;
        }
    } catch {
        console.log("Error");
    }
}

export function isUserLoggedIn() {
    let jwt = localStorage.getItem("jwt");
    return jwt !== null;
}

export function hasRole(role) {
    return role === localStorage.getItem("role");
}