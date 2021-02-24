import axios from "axios"
import { api_route } from "../main"

export function registerUser(user) {
    const req_url = api_route + "auth/register";
    return axios.post(req_url, {
        username: user.username,
        password: user.password,
    })
}

export function loginUser(user) {
    const req_url = api_route + "auth/login";
    return axios.post(req_url, {
        username: user.username,
        password: user.password,
    })
}