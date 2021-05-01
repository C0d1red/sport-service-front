import React, {useState, useEffect} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {LoginForm} from "./LoginForm";
import {RegisterForm} from "./RegisterForm";
import {useStyles} from "../../styles";

const titles = {
    LOGIN_TITLE: "Вход",
    REGISTER_TITLE: "Регистрация"
}

const states = {
    LOGIN: 1,
    REGISTER: 2
}

export const LoginCard = (props) => {
    const classes = useStyles();
    const {isOpen, handleClose, handleLogin} = props;
    const [state, setState] = useState(states.LOGIN);
    const [headerText, setHeaderText] = useState(titles.LOGIN_TITLE);

    const setCardToLoginState = () => {
        setState(states.LOGIN);
        setHeaderText(titles.LOGIN_TITLE);
    }

    const setCardToRegisterState = () => {
        setState(states.REGISTER);
        setHeaderText(titles.REGISTER_TITLE);
    }

    useEffect(() => setCardToLoginState(), [isOpen]);

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} fullWidth={true} className={classes.center}>
                <DialogTitle>{headerText}</DialogTitle>
                <DialogContent>
                    {state === states.LOGIN ?
                        <LoginForm handleFormSwitchClick={setCardToRegisterState} handleLogin={handleLogin}/>
                        :
                        <RegisterForm handleLogin={handleLogin}/>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
