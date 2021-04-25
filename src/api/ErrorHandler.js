export const handleError = (response) => {
    console.log(response.status)
    if (response.status >= 400) {
        throw Error(response.status);
    }
    return response;
}
