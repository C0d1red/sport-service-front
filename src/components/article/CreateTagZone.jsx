import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Grid, IconButton, Typography} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {useStyles} from "../../styles";
import {TagCard} from "./TagCard";

export const CreateTagZone = (props) => {
    const {tags, setTags} = props;
    const [newTag, setNewTag] = useState('');
    const [error, setError] = useState('');

    const addNewTag = (event) => {
        event.preventDefault();

        if (newTag === '') {
            setError('Тэг не может быть пустым!')
            return;
        }
        if (tags.includes(newTag)) {
            setError('Такой тэг уже добавлен!')
            return;
        }

        setError('')

        setTags(tags => [...tags, newTag]);
        setNewTag('')
    }

    const deleteTag = (tagData) => {
        setTags(tags => [...tags.filter(tag => tag !== tagData.name)]);
        setNewTag('')
    }

    return (
        <Grid container spacing={2}>
            {tags.map(tag =>
                <Grid item xs={1}>
                    <TagCard name={tag} callback={deleteTag}/>
                </Grid>
            )}
            <Grid item xs={1}>
                <TextField
                    error={error}
                    rows={1}
                    value={newTag}
                    onInput={e => setNewTag(e.target.value)}
                    fullWidth={true}
                />
                {error &&
                <div>
                    <Typography color={"secondary"}>{error}</Typography>
                </div>
                }
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={addNewTag}>
                    <AddCircleIcon/>
                </IconButton>
            </Grid>
        </Grid>
    );
}
