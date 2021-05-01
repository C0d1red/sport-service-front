import React from 'react';
import Card from "@material-ui/core/Card";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStyles} from "../../styles";

export const LongArticleCard = (props) => {
    const classes = useStyles();
    const {name, text, liked, handleLikeClick} = props;
    return (
        <Card variant="outlined" className={classes.longArticleCard}>
            <CardContent className={classes.maxSize}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="body1">{text}</Typography>
            </CardContent>
            <CardActions disableSpacing={true} style={{marginLeft: 'auto', transition: ''}}>
                <IconButton size="small" onClick={handleLikeClick}>
                    {liked ?
                        <FavoriteIcon/>
                        :
                        <FavoriteBorderIcon/>
                    }
                </IconButton>
            </CardActions>
        </Card>
    );
}
