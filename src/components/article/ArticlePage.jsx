import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getArticleById} from "../../api/articleApi";
import {ArticleCard} from "./ArticleCard";
import {Box, Grid} from "@material-ui/core";

export const ArticlePage = () => {
    const {id} = useParams();
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticleById(id)
            .then(receivedArticle => setArticle(receivedArticle));
    }, [id])

    return (
        <Grid container justify="center" style={{"margin-top": '20px'}}>
            <Box width="95%">
                <ArticleCard id={article.id} name={article.name} text={article.text} long/>
            </Box>
        </Grid>
    );
}
