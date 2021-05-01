import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";
import {ArticlesTable} from "../article/ArticlesTable";
import {getAllLikedArticlesForUser} from "../../api/articleApi";

export const ProfilePage = () => {
    const classes = useStyles();
    const [likedArticles, setLikedArticles] = useState([]);

    useEffect(() => {
        getAllLikedArticlesForUser()
            .then(articles => setLikedArticles(articles));
    }, [])

    return (
        <Grid container spacing={3} style={{padding: '20px'}}>
            <Grid item xs={3}>
                <Card className={classes.center}>
                    <AccountBoxIcon className={classes.profileLargeIcon}/>
                </Card>
            </Grid>
            <Grid item xs={9}>
                <Card style={{padding: '20px'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card>
                                <Typography>Логин:</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <Typography>Что-то ещё:</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Typography variant={"h4"} className={classes.center}>Любимые статьи</Typography>
                    <ArticlesTable articles={likedArticles}/>
                </Card>
            </Grid>
        </Grid>
    );
}
