import React from 'react';
import Card from "@material-ui/core/Card";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";

export const ArticleCard = () => {
    const classes = useStyles();
    return (
            <Card variant="outlined" className={classes.articleCard}>
                <CardContent>
                    <Typography variant="h4">Название статьи</Typography>
                    <Typography variant="body1">Какой-то текст...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Прочитать полностью</Button>
                </CardActions>
            </Card>
    );
}
