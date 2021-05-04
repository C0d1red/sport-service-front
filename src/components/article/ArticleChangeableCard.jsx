import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Typography} from "@material-ui/core";
import {useStyles} from "../../styles";
import {CreateTagZone} from "./CreateTagZone";

export const ArticleChangeableCard = (props) => {
    const classes = useStyles();
    const {buttonCallback, buttonText, presentName, presentText, presentTag} = props;
    const [articleName, setArticleName] = useState('');
    const [articleText, setArticleText] = useState('');
    const [articleTags, setArticleTags] = useState([]);

    const handleButtonClick = (event) => {
        event.preventDefault();
        buttonCallback({
            name: articleName,
            text: articleText,
            tags: articleTags
        })
    }

    useEffect(() => {
        presentName && setArticleName(presentName);
        presentText && setArticleText(presentText);
        presentTag && setArticleTags(presentTag);
    }, [presentName, presentText, presentTag])

    return (
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
                    <Typography>Теги</Typography>
                    <CreateTagZone tags={articleTags} setTags={setArticleTags}/>
                    <div className={classes.center}>
                        <Button onClick={handleButtonClick} variant="contained" color={"primary"}>
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
