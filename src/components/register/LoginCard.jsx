import React from 'react';
import {useState, useEffect} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {LoginForm} from "./LoginForm";
import {RegisterForm} from "./RegisterForm";
import {useStyles} from "../../styles";

const texts = {
    LOGIN_TITLE: "Вход",
    REGISTER_TITLE: "Регистрация"
}

export const LoginCard = (props) => {
    const classes = useStyles();
    const {open, handleClose, handleLogin} = props;
    const [isRegister, setRegister] = useState(false);
    const [headerText, setHeaderText] = useState(texts.LOGIN_TITLE);

    useEffect(() => {
        if (open) {
            setRegister(false);
            setHeaderText(texts.LOGIN_TITLE);
        }
    }, [open]);

    const handleFormSwitchClick = () => {
        setRegister(true);
        setHeaderText(texts.REGISTER_TITLE);
    }

    return (
        <div >
            <Dialog open={open} onClose={handleClose} fullWidth={true} className={classes.loginCard}>
                <DialogTitle>{headerText}</DialogTitle>
                <DialogContent>
                    {isRegister ?
                        <RegisterForm handleLogin={handleLogin}/>
                        :
                        <LoginForm handleFormSwitchClick={handleFormSwitchClick} handleLogin={handleLogin}/>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
