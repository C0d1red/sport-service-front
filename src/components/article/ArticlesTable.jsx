import React from 'react';
import {Grid} from "@material-ui/core";
import {ShortArticleCard} from "./ShortArticleCard";

export const ArticlesTable = (props) => {
    const {articles} = props;
    return (
        <Grid container justify="center">
            {articles.map((article) =>
                <ShortArticleCard
                    id={article.id}
                    name={article.name}
                    text={article.text}
                />
                )}
        </Grid>
    );
}
