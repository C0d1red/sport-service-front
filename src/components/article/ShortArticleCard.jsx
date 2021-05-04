import React from 'react';
import {NavLink} from "react-router-dom";
import Card from "@material-ui/core/Card";
import {CardActionArea, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {useStyles} from "../../styles";
import { display } from '@material-ui/system';
import CardActions from "@material-ui/core/CardActions";

export const ShortArticleCard = (props) => {
    const classes = useStyles();
    const {id, name, text} = props;
    return (
        <Card variant="outlined" className={classes.shortArticleCard}>
            <CardActionArea component={NavLink} to={"article/" + id} className={classes.maxSize}>
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="body1">{text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
