import {getBaseHeaders} from "./util";
import {handleError} from "./ErrorHandler";

export const register = (credentials) =>
    fetch('/user', {
        method: "POST",
        headers: getBaseHeaders(),
        body: JSON.stringify(credentials)
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(data => localStorage.setItem("jwt", data.token))

export const login = (credentials) =>
    fetch('/auth/classic', {
        method: "POST",
        headers: getBaseHeaders(),
        body: JSON.stringify(credentials)
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(data => localStorage.setItem("jwt", data.token))

export const refreshToken = (token) =>
    fetch('/token/refresh', {
        method: "POST",
        headers: getBaseHeaders(),
        body: JSON.stringify(token)
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(data => localStorage.setItem("jwt", data.token))
