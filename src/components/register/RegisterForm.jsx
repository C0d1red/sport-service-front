import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../styles";
import {register} from "../../api/userApi";
import {Typography} from "@material-ui/core";

export const RegisterForm = (props) => {
    const {handleLogin} = props;
    const [username, setUsername] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [isError, setError] = useState(false);
    const classes = useStyles();

    const handleRegisterClick = (event) => {
        event.preventDefault();
        if(firstPassword !== secondPassword) {
            setError(true);
            return;
        }

        register({
            username: username,
            password: firstPassword,
            role: "ADMIN"
        })
            .then(handleLogin)
            .catch(() => setError(true));
    }

    return (
        <form className={classes.form}>
            <div>
                <TextField
                    error={isError}
                    label="Имя пользователя"
                    value={username}
                    onInput={e => setUsername(e.target.value)}
                    fullWidth={true}
                />
            </div>
            <div>
                <TextField
                    error={isError}
                    label="Пароль"
                    value={firstPassword}
                    onInput={e => setFirstPassword(e.target.value)}
                    fullWidth={true}
                />
            </div>
            <div>
                <TextField
                    error={isError}
                    label="Подтвердите пароль"
                    value={secondPassword}
                    onInput={e => setSecondPassword(e.target.value)}
                    fullWidth={true}
                />
            </div>
            {isError &&
                <div>
                    <Typography color={"secondary"}>Пароли не совпадают!</Typography>
                </div>
            }
            <div>
                <Button color={"primary"} variant={"contained"} onClick={handleRegisterClick} fullWidth={true}>
                    Зарегестрироваться
                </Button>
            </div>
        </form>
    );
}
