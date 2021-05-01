import {deleteJWT, getBaseHeaders, getHeadersWithAuth} from "./util";
import {handleError} from "./ErrorHandler";
import jwtDecode from "jwt-decode";
import {refreshToken} from "./userApi";

export const get = (url, body) => doRequest(url, 'GET', body, false);

export const getWithAuth = (url, body) => doRequest(url, 'GET', body, true);

export const post = (url, body) => doRequest(url, 'POST', body, false);

export const postWithAuth = (url, body) => doRequest(url, 'POST', body, true);

export const put = (url, body) => doRequest(url, 'PUT', body, false);

export const putWithAuth = (url, body) => doRequest(url, 'PUT', body, true);

export const del = (url, body) => doRequest(url, 'DELETE', body, false);

export const delWithAuth = (url, body) => doRequest(url, 'DELETE', body, true);

export const patch = (url, body) => doRequest(url, 'PATCH', body, false);

export const patchWithAuth = (url, body) => doRequest(url, 'PATCH', body, true);

const doRequest = (url, method, body, isAuthRequest) => {
    if (localStorage.hasOwnProperty("jwt")) {
        const token = localStorage.getItem("jwt");
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp < (Date.now() / 1000)) {
            deleteJWT();
            return refreshToken(token)
                .then(() => requestByFetch(url, method, body, isAuthRequest));
        }
    }
    return requestByFetch(url, method, body, isAuthRequest);
}

const requestByFetch = (url, method, body, isAuthRequest) =>
    fetch(url, {
        method: method,
        headers: isAuthRequest ? getHeadersWithAuth() : getBaseHeaders(),
        body: body
    })
        .then(response => handleError(response))
        .then(response => response.json())
