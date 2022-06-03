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

export async function getEventsForInstitutionNotValidated() {
    let path = ApiUtil.URL + institutionUrl + "/events/validate";
    try {
        const token = localStorage.getItem("jwt");
        if (token) {
            let response = await axios.get(path, {
                headers: {"Authorization": token},
            });
            return response.data;
        }
    } catch {
        console.log("Error getting the events for validation");
    }
}

export async function createEvent(eventName, eventReward, eventAuth, validationNeeded) {
    let path = ApiUtil.URL + institutionUrl + "/events";
    try {
        const token = localStorage.getItem("jwt");
        if (token) {
            await axios.post(path, {
                name: eventName,
                reward: eventReward,
                active: true,
                validationNedeed: validationNeeded,
                authType: eventAuth
            }, {
                headers: {"Authorization": token}
            })
        }

    } catch {
        console.log("Error adding event");
    }
}

export async function validateEvents(eventIds) {
    let path = ApiUtil.URL + institutionUrl + "/events/validate/";
    try {
        const token = localStorage.getItem("jwt");
        if (token) {
            eventIds.forEach(
                (id) => {
                    axios.put(path + id, {
                        headers: {"Authorization": token},
                    });
                }
            )
        }
    } catch {
        console.log("Error validating events");
    }
}