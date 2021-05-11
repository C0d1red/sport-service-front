import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from "../styles";
import {ArticlesTable} from "./article/ArticlesTable";
import {getAllArticles, getAllRecommendedArticlesForUser, getArticlesByTag} from "../api/articleApi";

export const TYPES = {
    all: 0,
    recommended: 1,
    byTag: 2
}

export const MainPage = (props) => {
    const classes = useStyles();
    const {type} = props
    const {tag} = useParams();
    const [articles, setArticles] = useState([]);

    const updateArticles = () => {
        switch (type){
            default:
            case TYPES.all:
                getAllArticles()
                    .then(articles => setArticles(articles))
                break;
            case TYPES.recommended:
                getAllRecommendedArticlesForUser()
                    .then(articles => setArticles(articles))
                break;
            case TYPES.byTag:
                getArticlesByTag(tag)
                    .then(articles => setArticles(articles))
        }
    }

    useEffect(() => updateArticles(), [tag])

    return (
        <div>
            <div className={classes.center}>
                <IconButton component={NavLink} to={"/create-article"}>
                    <AddCircleIcon color={"primary"} className={classes.createArticleIcon}/>
                </IconButton>
            </div>
            <ArticlesTable articles={articles}/>
        </div>
    );
}
