import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import {useStyles} from "../../styles";
import {login} from "../../api/userApi";

export const LoginForm = (props) => {
    const classes = useStyles();
    const {handleFormSwitchClick, handleLogin} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isForbidden, setForbidden] = useState(false);

    const handleLoginClick = (event) => {
        event.preventDefault();
        login({
            username: username,
            password: password,
            role: "ADMIN"
        })
            .then(handleLogin)
            .catch(() => setForbidden(true));
    }

    return (
        <form className={classes.form}>
            <div>
                <TextField
                    error={isForbidden}
                    label="Имя пользователя"
                    value={username}
                    onInput={e => setUsername(e.target.value)}
                    fullWidth={true}
                />
            </div>
            <div>
                <TextField
                    error={isForbidden}
                    label="Пароль"
                    value={password}
                    onInput={e => setPassword(e.target.value)}
                    fullWidth={true}
                />
            </div>
            {isForbidden &&
                <Typography color={"secondary"}>Неверное имя пользователя или пароль!</Typography>
            }
            <div>
                <Button color={"primary"} variant={"contained"} onClick={handleLoginClick} fullWidth={true}>
                    Войти
                </Button>
            </div>
            <div>
                <Typography>
                    Ещё нет аккаунта?
                </Typography>
            </div>
            <div>
                <Button color={"primary"} variant={"contained"} onClick={handleFormSwitchClick} fullWidth={true}>
                    Создать аккаунт
                </Button>
            </div>
        </form>
    );
}
