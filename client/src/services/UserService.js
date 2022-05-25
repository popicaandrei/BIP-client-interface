import axios from "axios";
import {ApiUtil} from '../utils/ApiUtil'
import {User} from "../models/User";

export async function Login(username, password) {
    let path = ApiUtil.URL + "/login";
    try {
        let response = await axios.post(path, {
            username: username,
            password: password,
        });
        let token = response.getHeader("Authorization");
        localStorage.setItem("jwt", token);
        return true;
    } catch {
        return false;
    }
}

export async function GetLoggedInUser() {
    let path = ApiUtil.URL + "/users";
    try {
        let response = await axios.get(path, {
            headers: {"Authorization": "Bearer " + localStorage.getItem("jwt")},
        });
        User = response.data;
        return response.data;
    } catch {
        console.log("Error");
    }
}

export function IsUserLoggedIn() {
    let jwt = localStorage.getItem("jwt");
    return jwt !== null;
}

export function GetUserName() {
    return User.name;
}

export function GetUserId() {
    return User.id;
}

export function GetUserRole() {
    return User.role;
}

export function GetUserEmail() {
    return User.email;
}