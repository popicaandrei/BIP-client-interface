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