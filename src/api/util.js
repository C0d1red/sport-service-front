export const getHeadersWithAuth = () => {
    let baseHeaders = getBaseHeaders();
    baseHeaders["Authorization"] = getAuthorization();
    return baseHeaders;
}

export const getBaseHeaders = () => {
    return {"Content-type": "application/json; charset=UTF-8"}
}

const getAuthorization = () => {
    return "Bearer " + localStorage.getItem("jwt");
}
