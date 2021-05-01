import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from "../styles";
import {ArticlesTable} from "./article/ArticlesTable";
import {getAllArticles} from "../api/articleApi";

export const MainPage = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);

    const updateArticles = () => {
        getAllArticles()
            .then(articles => setArticles(articles));
    }

    useEffect(() => updateArticles(), [])

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
