import React from 'react';
import {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {useStyles} from "../../styles";
import {register} from "../../api/userApi";

const texts = {
    LOGIN_TITLE: "Войти",
    REGISTER_TITLE: "Регистрация",
    LOGIN_BUTTON_TEXT: "Создать аккаунт",
    REGISTER_BUTTON_TEXT: "Зарегестрироваться",
}

export const LoginCard = (props) => {
    const {open, handleClose} = props;
    const classes = useStyles();
    const [isRegister, setRegister] = useState(false);
    const [headerText, setHeaderText] = useState(texts.LOGIN_TITLE);
    const [buttonText, setButtonText] = useState(texts.LOGIN_BUTTON_TEXT);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (open) {
            setRegister(false);
            setHeaderText(texts.LOGIN_TITLE);
            setButtonText(texts.LOGIN_BUTTON_TEXT);
        }
    }, [open]);

    const handleClick = (event) => {
        if(isRegister) {
            event.preventDefault();
            const credentials = Object();
            credentials.username = username;
            credentials.password = password;
            credentials.role = "ADMIN";
            register(JSON.stringify(credentials))
                .then(data => console.log(localStorage.getItem("jwt")));
        } else {
            setRegister(true);
            setHeaderText(texts.REGISTER_TITLE);
            setButtonText(texts.REGISTER_BUTTON_TEXT);
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{headerText}</DialogTitle>
                <DialogContent>
                        <form className={classes.form}>
                            <div>
                                <TextField
                                    label="Имя пользователя"
                                    value={username}
                                    onInput={e=>setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField label="Пароль"
                                           value={password}
                                           onInput={e=>setPassword(e.target.value)}
                                />
                            </div>
                            {isRegister &&(
                                <div>
                                    <TextField label="Подтвердите пароль"/>
                                </div>
                            )}
                            <Button onClick={handleClick} fullWidth={true}>
                                {buttonText}
                            </Button>
                        </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
