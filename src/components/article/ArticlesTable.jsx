import React, {useEffect, useState} from 'react';
import {ArticleCard} from "./ArticleCard";
import {Grid} from "@material-ui/core";
import {getAllArticles} from "../../api/articleApi";

export const ArticlesTable = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles()
            .then(articles => setArticles(articles));
    }, [])

    return (
        <Grid container justify="center">
            {articles.map((article) =>
                <ArticleCard id={article.id} name={article.name} text={article.text}/>
                )}
        </Grid>
    );
}
