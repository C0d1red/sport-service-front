import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Box, Grid} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {getArticleById, likeArticleById} from "../../api/articleApi";
import {LongArticleCard} from "./LongArticleCard";

export const ArticlePage = () => {
    const {id} = useParams('');
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const [hasAccess, setAccess] = useState(false);

    const waitForReceivingArticleInfo = () => {
        updateArticleInfo()
            .then(() => setIsLoading(false))
    }

    const updateArticleInfo = async () => {
        await getArticleById(id)
            .then(receivedArticle => {
                setArticle(receivedArticle);
                setLiked(receivedArticle.statuses
                    .find(status => status.name === 'likeStatus')
                    .state
                )
                setAccess(receivedArticle.statuses
                    .find(status => status.name === 'accessStatus')
                    .state
                )
            });
    }

    const handleLikeClick = () => {
        likeArticleById(id)
            .then(() => setLiked(true))
            .catch(() => console.log("Error  while liking article"));
    }

    useEffect(() => {
        waitForReceivingArticleInfo();
    }, [id])

    return isLoading ?
        <CircularProgress/>
        :
        <Grid container justify="center" style={{"margin-top": '20px'}}>
            <Box width="95%">
                <LongArticleCard
                    id={article.id}
                    name={article.name}
                    text={article.text}
                    tags={article.tags}
                    liked={liked}
                    hasAccess={hasAccess}
                    handleLikeClick={handleLikeClick}
                />
            </Box>
        </Grid>;
}
