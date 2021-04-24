import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";

const styles = () => ({
    leftToolBar: {
        flex: 1,
    },
    disableTransition: {
        transition: 'none',
    },
    appBar: {
        height: 'center',
    },
    articleCard: {
        minWidth: '275px',
        display: 'inline-block',
        margin: '20px',
    },
    form: {
        "& > *":{
            margin: '10px'
        }
    },
    center: {
        textAlign: 'center'
    },
    createArticleIcon: {
        fontSize: 70
    },
    createArticleCard: {
        display: 'inline-block',
    }
});

export const useStyles = makeStyles(styles, {index: 1, name: 'Default'});
