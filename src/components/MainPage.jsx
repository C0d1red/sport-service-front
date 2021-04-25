import React from 'react';
import {IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from "../styles";
import {NavLink} from "react-router-dom";
import {ArticlesTable} from "./article/ArticlesTable";

export const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.center}>
                <IconButton component={NavLink} to={"/create-article"}>
                    <AddCircleIcon color={"primary"} className={classes.createArticleIcon}/>
                </IconButton>
            </div>
            <ArticlesTable/>
        </div>
    );
}
