import {delWithAuth, get, getWithAuth, postWithAuth, putWithAuth} from "./baseApi";

export const createArticle = (article) =>
    postWithAuth(
        '/article',
        JSON.stringify(article)
    )

export const getArticleById = (id) =>
    get('/article/' + id)

export const updateArticleById = (id, article) =>
    putWithAuth(
        '/article/' + id,
        JSON.stringify(article)
    )

export const deleteArticleById = (id) =>
    delWithAuth('/article/' + id);

export const likeArticleById = (id) =>
    putWithAuth('/article/like/' + id);

export const getLikeArticleStatusById = (id) =>
    getWithAuth('/article/like/' + id);

export const getAllArticles = () =>
    get('/article/all')
        .then(json => json.collection);

export const getAllLikedArticlesForUser = () =>
    getWithAuth('/article/me')
        .then(json => json.collection);
