import axios from "axios";
import {ApiUtil} from '../utils/ApiUtil'
import {User} from "../models/User";

export async function Login(email, password) {
    let path = ApiUtil.URL + "/login";
    try {
        let token;
        await axios.post(path, {
            email: email,
            password: password,
        }).then( (response) => {
            token = response.headers["authorization"];
        });
        console.log(token)
        localStorage.setItem("jwt", token);
        User =  await GetLoggedInUser();
        console.log(User)
        return true;
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
        console.log(response.data)
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