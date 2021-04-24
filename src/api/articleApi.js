import {getHeadersWithAuth} from "./util";

export const createArticle = (article) =>
    fetch('/article', {
        method: "POST",
        headers: getHeadersWithAuth(),
        body: article,
    })
        .then(response => response.json())

export const getArticleById = (id) =>
    fetch('/article/' + id, {
        method: "GET",
        headers: getHeadersWithAuth(),
    })
        .then(response => response.json())

export const updateArticleById = (id, article) =>
    fetch('/article/' + id, {
        method: "PUT",
        headers: getHeadersWithAuth(),
        body: article
    })
        .then(response => response.json())

export const deleteArticleById = (id) =>
    fetch('/article/' + id, {
        method: "DELETE",
        headers: getHeadersWithAuth(),
    })
        .then(response => response.json())

export const likeArticleById = (id) =>
    fetch('/article/like/' + id, {
        method: "PUT",
        headers: getHeadersWithAuth(),
    })
        .then(response => response.json())

export const getAllArticlesForUser = () =>
    fetch('/article/me', {
        method: "GET",
        headers: getHeadersWithAuth(),
    })
        .then(response => response.json())
