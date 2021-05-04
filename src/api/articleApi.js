import {delWithAuth, get, getWithAuth, postWithAuth, putWithAuth} from "./baseApi";
import {isJWTInStorage} from "./util";

export const createArticle = (article) =>
    postWithAuth(
        '/article',
        JSON.stringify(article)
    )

export const getArticleById = (id) => isJWTInStorage() ?
    getWithAuth('/article/' + id) : get('/article/' + id)

export const updateArticleById = (id, article) =>
    putWithAuth(
        '/article/' + id,
        JSON.stringify(article)
    )

export const deleteArticleById = (id) =>
    delWithAuth('/article/' + id);

export const likeArticleById = (id) =>
    putWithAuth('/article/like/' + id);

export const getAllArticles = () =>
    get('/article/all')
        .then(json => json.collection);

export const getArticlesByTag = (tag) =>
    get('/article?tag=' + tag)
        .then(json => json.collection);

export const getAllLikedArticlesForUser = () =>
    getWithAuth('/article/me')
        .then(json => json.collection);
