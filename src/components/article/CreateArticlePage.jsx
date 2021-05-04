import React from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Grid} from "@material-ui/core";
import {createArticle} from "../../api/articleApi";
import {ArticleChangeableCard} from "./ArticleChangeableCard";

export const CreateArticlePage = () => {
    const history = useHistory();

    const handlePublishClick = (article) => {
        createArticle(article)
            .then(article => history.push('/article/' + article.id))
            .catch(err => console.log("Article {} hasn't been published, error: {}", article.name, err));
    };

    return (
        <Grid container justify="center" style={{"margin-top": '20px'}}>
            <Box width="95%">
                <ArticleChangeableCard
                    buttonCallback={handlePublishClick}
                    buttonText={"Опубликовать"}
                />
            </Box>
        </Grid>
    );
}
