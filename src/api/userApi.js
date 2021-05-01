import {post} from "./baseApi";

export const register = (credentials) =>
    post(
        '/user',
        JSON.stringify(credentials)
    )

export const login = (credentials) =>
    post(
        '/auth/classic',
        JSON.stringify(credentials)
    )
        .then(data => localStorage.setItem("jwt", data.token))

export const refreshToken = (token) =>
    post(
        '/token/refresh',
        JSON.stringify(token)
    )
        .then(data => localStorage.setItem("jwt", data.token))
