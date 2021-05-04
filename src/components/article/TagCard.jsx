import React from 'react';
import Card from "@material-ui/core/Card";
import {useStyles} from "../../styles";
import {CardActionArea} from "@material-ui/core";

export const TagCard = (props) => {
    const classes = useStyles();
    const {name, callback} = props;

    const handleClick = (event) => {
        event.preventDefault();
        callback({
            name: name
        })
    }

    return (
        <Card className={classes.tagCard}>
            <CardActionArea onClick={handleClick}>
                {name}
            </CardActionArea>
        </Card>
    );
}
