import {getBaseHeaders} from "./util";

export const register = (credentials) =>
    fetch('/user', {
        method: "POST",
        headers: getBaseHeaders(),
        body: credentials
    })
        .then(response => response.json())
        .then(data => localStorage.setItem("jwt", data.token))
