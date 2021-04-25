export const getHeadersWithAuth = () => {
    let baseHeaders = getBaseHeaders();
    baseHeaders["Authorization"] = getAuthorization();
    return baseHeaders;
}

export const getBaseHeaders = () => {
    return {"Content-type": "application/json; charset=UTF-8"}
}

export const saveJWT = (token) => {
    localStorage.setItem("jwt", token);
}

export const deleteJWT = () => {
    localStorage.removeItem("jwt");
}

export const isJWTInStorage = () => {
    return localStorage.getItem("jwt") !== null;
}

const getAuthorization = () => {
    return "Bearer " + localStorage.getItem("jwt");
}
