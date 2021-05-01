import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Box, Grid} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {getArticleById, getLikeArticleStatusById, likeArticleById} from "../../api/articleApi";
import {LongArticleCard} from "./LongArticleCard";

export const ArticlePage = () => {
    const {id} = useParams('');
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [liked, setLiked] = useState(false);

    const waitForReceivingArticleInfo = () => {
        receiveArticleInfo()
            .then(() => setIsLoading(false))
    }

    const receiveArticleInfo = async () => {
        await getArticleById(id)
            .then(receivedArticle => {
                setArticle(receivedArticle)
            });
        await getLikeArticleStatusById(id)
            .then(response => setLiked(response.liked))
    }

    const handleLikeClick = () => {
        likeArticleById(id)
            .then(() => setLiked(true))
            .catch(() => console.log("Error  while liking article"));
        getLikeArticleStatusById(id)
            .then(response => setLiked(response.liked))
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
                    liked={liked}
                    handleLikeClick={handleLikeClick}
                />
            </Box>
        </Grid>;
}
