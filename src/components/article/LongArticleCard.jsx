import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {Grid, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStyles} from "../../styles";
import {TagCard} from "./TagCard";
import {NavLink, useHistory} from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';

export const LongArticleCard = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const {id, name, text, tags, liked, hasAccess, handleLikeClick} = props;

    const goToTag = (tagData) => {
        history.push('/tags/' + tagData.name)
    }

    return (
        <Card variant="outlined" className={classes.longArticleCard}>
            <CardContent className={classes.maxSize}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h4">{name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            {tags.map(tag =>
                                <Grid item>
                                    <TagCard name={tag} callback={goToTag}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
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
                {hasAccess &&
                <IconButton size="small" component={NavLink} to={"/article/" + id + "/change"}>
                    <CreateIcon/>
                </IconButton>
                }
            </CardActions>
        </Card>
    );
}
