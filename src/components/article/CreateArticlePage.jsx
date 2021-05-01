import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "../../styles";
import {createArticle} from "../../api/articleApi";

export const CreateArticlePage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [articleName, setArticleName] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tags, setTags] = useState('');

    const handlePublishClick = (event) => {
        event.preventDefault();
        createArticle({
                name: articleName,
                text: articleText,
                keyWords: ['undefined']
        })
            .then(article => history.push('/article/' + article.id))
            .catch(err => console.log("Article {} hasn't been published, error: {}", articleName, err));
    };

    return (
        <Grid container justify="center" style={{"margin-top": '20px'}}>
            <Box width="95%">
                <Card variant="outlined">
                    <CardContent>
                        <form className={classes.form}>
                            <div>
                                <TextField
                                    label="Название статьи"
                                    value={articleName}
                                    onInput={e => setArticleName(e.target.value)}
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <TextField label="Текст статьи"
                                           multiline
                                           rows={10}
                                           rowsMax={Infinity}
                                           value={articleText}
                                           onInput={e => setArticleText(e.target.value)}
                                           fullWidth={true}
                                />
                            </div>
                            <div>
                                <TextField label="Тэги"
                                           rows={1}
                                           value={tags}
                                           onInput={e => {
                                               setTags(e.target.value)
                                           }}
                                           fullWidth={true}
                                />
                            </div>
                            <div className={classes.center}>
                                <Button onClick={handlePublishClick} variant="contained" color={"primary"}>
                                    Опубликовать
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
}
