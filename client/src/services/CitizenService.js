import {ApiUtil} from "../utils/ApiUtil";
import axios from "axios";

const citizenUrl = "/users"

export async function getActivities() {
    let path = ApiUtil.URL + citizenUrl + "/activities";
    const token = localStorage.getItem("jwt");
    if (token) {
        return await axios.get(path, {
            headers: {"Authorization": token},
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => console.log("Error getting the activities for user " + error))
    }
}

export async function addCitizenCard(cardNumber, cardCode, validFrom, validTo) {
    let path = ApiUtil.URL + citizenUrl + "/cards";
    const token = localStorage.getItem("jwt");
    if (token) {
        await axios.post(path, {
            number: cardNumber,
            code: cardCode,
            validFrom: validFrom,
            validTo: validTo
        }, {
            headers: {"Authorization": token}
        })
            .catch((error) => {
            console.log("Error adding a new card: " + error)
        })
    }
}

export async function getAllCards() {
    let path = ApiUtil.URL + citizenUrl + "/cards";
    const token = localStorage.getItem("jwt");
    if (token) {
        return await axios.get(path, {
            headers: {"Authorization": token},
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => console.log("Error getting the cards for user " + error))
    }
}

