import React from 'react';
import {useStyles} from "../../styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {LoginCard} from "../register/LoginCard";
import {NavLink} from "react-router-dom";

export const MenuBar = () => {
    const classes = useStyles();
    const [isLogin, setLogin] = React.useState(false);

    const handleLoginClick = () => {
        setLogin(true);
    };

    const handleLoginClose = () => {
        setLogin(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup size={"large"} variant="text" aria-label="text primary button group" className={classes.leftToolBar}>
                        <Button component={NavLink} color="inherit" to={"/article"}>Статьи</Button>
                        <Button component={NavLink} color="inherit" to="/profile">Профиль</Button>
                    </ButtonGroup>
                    <Button color="inherit" onClick={handleLoginClick}>Войти</Button>
                </Toolbar>
            </AppBar>
            <LoginCard open={isLogin} handleClose={handleLoginClose}/>
        </div>
    );
}
