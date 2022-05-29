import {ApiUtil} from "../utils/ApiUtil";
import axios from "axios";

const institutionUrl = "/institutions"

export async function getEventsForInstitution() {
    let path = ApiUtil.URL + institutionUrl + "/events";
    try {
        const token = localStorage.getItem("jwt");
        if (token) {
            let response = await axios.get(path, {
                headers: {"Authorization": token},
            });
            return response.data;
        }
    } catch {
        console.log("Error getting the events");
    }
}

export async function addEvent(event) {
    let path = ApiUtil.URL + "/login";
    try {
        await axios.post(path, {
            email: event.name,
            reward: event.reward,
            active: event.active,
            validationNedeed: event.validation,
            authType: event.authType
        }).then((response) => {
            return response.status;
        });
    } catch {
        console.log("Error adding event");
    }
}