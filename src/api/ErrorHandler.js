export const handleError = (response) => {
    if (response.status >= 400) {
        throw Error(response.status);
    }
    return response;
}
