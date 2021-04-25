import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";
import {NavLink} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import {getAllLikedArticlesForUser, likeArticleById} from "../../api/articleApi";
import FavoriteIcon from '@material-ui/icons/Favorite';

export const ArticleCard = (props) => {
    const classes = useStyles();
    const {id, name, text, long} = props;
    const [className, setClassName] = useState('');
    const [visibleText, setVisibleText] = useState('');
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        getAllLikedArticlesForUser()
            .then(articles => {
                for (let article of articles) {
                    if (article.id === id) {
                        setLiked(true);
                        break;
                    }
                }
            })
        if(long) {
            setClassName(classes.longArticleCard);
            setVisibleText(text);
        } else {
            setClassName(classes.shortArticleCard);
            setVisibleText(text.slice(0, 50) + "...");
        }

    }, [name, text, long])

    const handleLikeClick = () => {
        likeArticleById(id)
            .then(() => setLiked(true))
            .catch(() => console.log("Error  while liking article"));
    }

    return (
        <Card variant="outlined" className={className}>
            <CardContent>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="body1">{visibleText}</Typography>
            </CardContent>
            <CardActions style={{marginLeft: 'auto'}}>
                {long ?
                    <IconButton size="small" onClick={handleLikeClick}>
                        {liked ?
                            <FavoriteIcon/>
                            :
                            <FavoriteBorderIcon/>
                        }
                    </IconButton>
                    :
                    <Button component={NavLink} to={"article/" + id} size="small">Прочитать полностью</Button>
                }
            </CardActions>
        </Card>
    );
}
