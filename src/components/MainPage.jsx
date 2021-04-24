import React from 'react';
import {ArticleCard} from "./article/ArticleCard";
import {Button, Container, Grid, IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from "../styles";
import {NavLink} from "react-router-dom";

export const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.center}>
                <IconButton component={NavLink} to={"/create-article"}>
                    <AddCircleIcon color={"primary"} className={classes.createArticleIcon}/>
                </IconButton>
            </div>
            <Grid container justify="center">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </Grid>
        </div>
    );
}
