import {getBaseHeaders, getHeadersWithAuth} from "./util";
import {handleError} from "./ErrorHandler";

export const createArticle = (article) =>
    fetch('/article', {
        method: "POST",
        headers: getHeadersWithAuth(),
        body: JSON.stringify(article),
    })
        .then(response => handleError(response))
        .then(response => response.json())

export const getArticleById = (id) =>
    fetch('/article/' + id, {
        method: "GET",
        headers: getBaseHeaders(),
    })
        .then(response => handleError(response))
        .then(response => response.json())

export const updateArticleById = (id, article) =>
    fetch('/article/' + id, {
        method: "PUT",
        headers: getHeadersWithAuth(),
        body: JSON.stringify(article),
    })
        .then(response => handleError(response))
        .then(response => response.json())

export const deleteArticleById = (id) =>
    fetch('/article/' + id, {
        method: "DELETE",
        headers: getHeadersWithAuth(),
    })
        .then(response => handleError(response))
        .then(response => response.json())

export const likeArticleById = (id) =>
    fetch('/article/like/' + id, {
        method: "PUT",
        headers: getHeadersWithAuth(),
    })
        .then(response => handleError(response))
        .then(response => response.json())

export const getAllArticles = () =>
    fetch('/article/all', {
        method: "GET",
        headers: getBaseHeaders(),
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(json => json.collection)

export const getAllLikedArticlesForUser = () =>
    fetch('/article/me', {
        method: "GET",
        headers: getHeadersWithAuth(),
    })
        .then(response => handleError(response))
        .then(response => response.json())
        .then(json => json.collection)
