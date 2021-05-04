import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Grid} from "@material-ui/core";
import {getArticleById, updateArticleById} from "../../api/articleApi";
import {useParams} from "react-router";
import {ArticleChangeableCard} from "./ArticleChangeableCard";

export const ChangeArticlePage = () => {
    const history = useHistory();
    const {id} = useParams('');
    const [presentArticle, setPresentArticle] = useState({});

    const handleUpdateClick = (article) => {
        updateArticleById(id, article)
            .then(article => history.push('/article/' + article.id))
            .catch(err => console.log("Article {} hasn't been updated, error: {}", article.name, err));
    };

    useEffect(() => {
        getArticleById(id)
            .then(receivedArticle => setPresentArticle(receivedArticle))
    }, [])

    return (
        <Grid container justify="center" style={{"margin-top": '20px'}}>
            <Box width="95%">
                <ArticleChangeableCard
                    buttonCallback={handleUpdateClick}
                    buttonText={"Обновить"}
                    presentName={presentArticle.name}
                    presentText={presentArticle.text}
                    presentTag={presentArticle.tags}
                />
            </Box>
        </Grid>
    );
}
