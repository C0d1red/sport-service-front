import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from "../styles";
import {ArticlesTable} from "./article/ArticlesTable";
import {getAllArticles, getArticlesByTag} from "../api/articleApi";

export const MainPage = (props) => {
    const classes = useStyles();
    const {tag} = useParams();
    const [articles, setArticles] = useState([]);

    const updateArticles = () => tag ?
        getArticlesByTag(tag)
            .then(articles => setArticles(articles))
        :
        getAllArticles()
            .then(articles => setArticles(articles))

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
